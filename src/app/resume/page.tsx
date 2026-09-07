import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume for ${site.name}, ${site.role} at Amdocs in Israel.`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 text-ink">
      <p className="mono text-xs tracking-[0.2em] uppercase">
        <Link href="/" className="hover:text-copper">
          ← Portfolio
        </Link>
      </p>
      <header className="mt-8 border-b border-ink/15 pb-8">
        <h1 className="display text-5xl tracking-tight">{site.name}</h1>
        <p className="mt-2 text-xl text-copper">{site.role}</p>
        <p className="mt-4 text-ink-soft">
          {site.location} ·{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> ·{" "}
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
        </p>
      </header>

      <section className="mt-10">
        <h2 className="mono text-xs tracking-[0.22em] uppercase text-copper">
          Profile
        </h2>
        <p className="mt-3 leading-7 text-ink-soft">
          Experienced backend developer with {site.yearsExperience} years of
          hands-on work. Strong analytical skills and structured thinking,
          with a record of high-quality, standards-compliant code. Extensive
          experience working in English on large-scale systems with global
          cross-functional teams.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="mono text-xs tracking-[0.22em] uppercase text-copper">
          Experience
        </h2>
        <div className="mt-4">
          <h3 className="text-lg font-medium">Amdocs · Backend Developer</h3>
          <p className="mono text-sm text-ink-soft">2021 — Present</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-ink-soft">
            <li>Backend development in C, C++, Python, and Java.</li>
            <li>
              Daemon and job processes in C and shell scripting on Linux.
            </li>
            <li>Complex SQL against Oracle databases.</li>
            <li>Agile delivery with Jira.</li>
            <li>
              Daily use of Cursor, GitHub Copilot, and TabNine; MCP tools built
              for team use.
            </li>
            <li>Perforce, CI/CD familiarity, code reviews, PM collaboration.</li>
          </ul>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-medium">
            Elevation Academy · Backend bootcamp
          </h3>
          <p className="mono text-sm text-ink-soft">2020 — 2021</p>
          <p className="mt-3 leading-7 text-ink-soft">
            Intensive C, C++, and Python program with IBM, Apple, Google,
            Mobileye, and Unit 8200. Algorithms, data structures, computer
            architecture, operating systems, multithreading, AI/ML, image
            processing, and I/O optimization.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mono text-xs tracking-[0.22em] uppercase text-copper">
          Projects
        </h2>
        <ul className="mt-3 space-y-3 leading-7 text-ink-soft">
          <li>
            <strong className="text-ink"><a href="https://github.com/hershler/CPP-Under-The-Hood" target="_blank" rel="noopener noreferrer">CPP Under the Hood</a></strong> — C++
            program converted to C to expose OOP internals.
          </li>
          <li>
            <strong className="text-ink"><a href="https://github.com/hershler/Mobileye-Project" target="_blank" rel="noopener noreferrer">Mobileye project</a></strong> — traffic-light
            detection and distance estimation with Python and MATLAB.
          </li>
          <li>
            <strong className="text-ink"><a href="https://github.com/hershler/google-project" target="_blank" rel="noopener noreferrer">Google autocomplete</a></strong> — Python
            autocomplete with advanced data structures.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="mono text-xs tracking-[0.22em] uppercase text-copper">
          Education
        </h2>
        <h3 className="mt-3 text-lg font-medium">
          Adva Program by Scale-Up Velocity
        </h3>
        <p className="mono text-sm text-ink-soft">2018 — 2020 · GPA 95 · <a href="https://www.credly.com/users/rachel-hershler/badges" target="_blank" rel="noopener noreferrer">Adva Badge</a></p>
        <p className="mt-3 leading-7 text-ink-soft">
          Two-and-a-half-year training with Scale-Up Velocity and Mahat
          certificate. Bachelor-level math and computer science with TAU, the
          Hebrew University, and Ben-Gurion University.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="mono text-xs tracking-[0.22em] uppercase text-copper">
          Languages
        </h2>
        <p className="mt-3 text-ink-soft">Hebrew — native · English — fluent</p>
      </section>
    </article>
  );
}
