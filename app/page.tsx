"use client";
import data from "@/data/personal.data.json"; // Move your data to a separate file
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { ExperienceCard } from "@/components/ui/cards/ExperienceCard";
import DottedGlowBackground from "@/components/ui/DottedGlowBackground";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/cards/ProjectsCard";
import { SkillTier } from "@/components/ui/cards/SkillTier";
import { ContactCard } from "@/components/ui/cards/ContactCard";
import { AwardCard } from "@/components/ui/cards/AwardCard";
import { SectionGrid } from "@/components/ui/SectionGrid";

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <DottedGlowBackground opacity={0.15} />
      <div className="vignette fixed inset-0 pointer-events-none z-[1]" />

      <Header name={data.name} version={data.version} />

      <main className="relative z-[2] max-w-[1400px] mx-auto px-6 md:px-10 pt-32 lg:pt-16">
        <Hero summary={data.summary} />

        {/* Experience */}
        <section id="infrastructure" className="scroll-mt-24">
          <SectionHeader id="01" title="Infrastructure" />
          <SectionGrid>
            {data.experience.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} />
            ))}
          </SectionGrid>
        </section>

        {/* Projects */}
        <section id="core components" className="scroll-mt-32">
          <SectionHeader id="02" title="Core Components" />
          <SectionGrid>
            {data.projects.map((proj) => (
              <ProjectCard key={proj.id} {...proj} />
            ))}
          </SectionGrid>
        </section>

        {/* Skills */}
        <section id="system-assets" className="scroll-mt-32">
          <SectionHeader id="03" title="System Assets" />
          <div className="flex flex-col gap-6 md:gap-8">
            {Object.entries(data.skills).map(([tier, items]) => (
              <SkillTier key={tier} tier={tier} items={items} />
            ))}
          </div>
        </section>

        {/* award */}
        <section id="telemetry" className="content-module scroll-mt-20">
          <SectionHeader id="04" title="TELEMETRY" />
          <div className="grid grid-cols-1 gap-[1px] bg-dim border border-dim">
            {data.awards.map((award, i) => (
              <AwardCard
                key={i}
                title={award.title}
                org={award.org}
                date={award.date}
                result={award.result}
              />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <SectionHeader id="05" title="Establish Connection" />
          <SectionGrid className="md:grid-cols-3">
            <ContactCard
              label="COMMUNICATION"
              status="SECURE"
              title="EMAIL"
              value={data.email}
              href={`mailto:${data.email}`}
            />
            <ContactCard
              label="NETWORK"
              status="CONNECTED"
              title="LINKEDIN"
              value="Registry_Node_Auth"
              href={data.linkedin}
            />
            <ContactCard
              label="SOURCE"
              status="OPEN"
              title="GITHUB"
              value="Binary_Repository"
              href={data.github}
            />
          </SectionGrid>
        </section>
      </main>
    </div>
  );
}
