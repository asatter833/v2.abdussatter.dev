"use client";

import { DottedGlowBackgroundProps } from "@/lib/types";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from "react";

export default function DottedGlowBackground({
  className,
  gap = 20,
  radius = 1.5,
  color = "rgba(255, 255, 255, 0.1)",
  glowColor = "rgba(250, 204, 21, 0.4)",
  opacity = 0.15,
  speedMin = 0.5,
  speedMax = 1.5,
  speedScale = 0.8,
}: DottedGlowBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let stopped = false;
    let dots: { x: number; y: number; phase: number; speed: number }[] = [];

    // 1. Handle Retina Display Scaling
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { width, height } = container.getBoundingClientRect();

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      regenDots(); // Re-calculate grid positions on resize
    };

    // 2. Generate Dot Grid
    const regenDots = () => {
      dots = [];
      const { width, height } = container.getBoundingClientRect();
      const cols = Math.ceil(width / gap) + 2;
      const rows = Math.ceil(height / gap) + 2;

      for (let i = -1; i < cols; i++) {
        for (let j = -1; j < rows; j++) {
          const x = i * gap + (j % 2 === 0 ? 0 : gap * 0.5);
          const y = j * gap;
          dots.push({
            x,
            y,
            phase: Math.random() * Math.PI * 2,
            speed: speedMin + Math.random() * (speedMax - speedMin),
          });
        }
      }
    };

    // 3. Animation Loop
    const draw = (now: number) => {
      if (stopped) return;
      const { width, height } = container.getBoundingClientRect();

      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = opacity;

      const time = (now / 1000) * speedScale;

      dots.forEach((d) => {
        // Calculate breathing/glowing effect
        const mod = (time * d.speed + d.phase) % 2;
        const lin = mod < 1 ? mod : 2 - mod;
        const intensity = 0.1 + 0.9 * (lin * lin);

        ctx.beginPath();
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);

        if (intensity > 0.7) {
          // Glow state
          ctx.fillStyle = glowColor;
          ctx.shadowColor = glowColor;
          ctx.shadowBlur = 10 * (intensity - 0.7) * 3;
          ctx.globalAlpha = opacity * 1.0;
        } else {
          // Dim state
          ctx.fillStyle = color;
          ctx.shadowBlur = 0;
          ctx.globalAlpha = opacity * (0.3 + intensity * 0.5);
        }

        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    // Initialize
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();
    raf = requestAnimationFrame(draw);

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [gap, radius, color, glowColor, opacity, speedMin, speedMax, speedScale]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className || ""}`}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
