import { Header } from "@/components/Header";
import { site } from "@/lib/site";

const skills = [
  "C",
  "C++",
  "Python",
  "Java",
  "Oracle SQL",
  "Linux",
  "Shell",
  "Perforce",
  "Git",
  "Jira",
  "CI/CD",
  "Agile",
  "Cursor",
  "GitHub Copilot",
  "OOP",
  "Design patterns",
];

const amdocsPoints = [
  "Backend development in C, C++, Python, and Java on large, multi-layer production systems.",
  "Daemons and batch jobs in C and shell on Linux, including complex Oracle SQL.",
  "Daily AI-assisted engineering with Cursor, GitHub Copilot, and TabNine, plus MCP tools built for the team.",
  "Code reviews, close work with project managers, and Agile delivery in Jira.",
  "Version control in Perforce, with CI/CD familiarity and English-first collaboration across global teams.",
];

const projects = [
  {
    title: "CPP Under the Hood",
    tags: "C++ · C",
    text: "Converted a C++ program into equivalent C to make object-oriented mechanics — vtables, construction, and memory — fully explicit.",
  },
  {
    title: "Mobileye project",
    tags: "Python · MATLAB",
    text: "Detected traffic lights in video and estimated distance using image processing and machine learning.",
  },
  {
    title: "Google autocomplete",
    tags: "Python",
    text: "Implemented autocomplete with compact data structures and algorithmic optimizations over large dictionaries.",
  },
];

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="relative overflow-hidden bg-ink text-paper">
          <div className="section-pad relative pt-28 pb-16 md:pt-36 md:pb-24">
            <p className="mono text-[11px] tracking-[0.28em] uppercase text-mist">
              {site.location} · Available for conversations
            </p>
            <h1 className="display mt-8 max-w-5xl text-[clamp(3.4rem,12vw,9.5rem)] leading-[0.86] tracking-[-0.045em]">
              Rachel
              <br />
              Rubin
            </h1>
            <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-xl text-lg leading-relaxed text-paper/80 md:text-xl">
                Backend developer. I design and ship the quiet machinery behind
                large systems — processes that run every night, queries that
                must be right, and tools that make a team faster.
              </p>
              <p className="display text-3xl text-copper md:text-4xl">
                {site.role}
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-copper px-6 py-3 text-sm text-paper hover:bg-copper-deep"
              >
                Get in touch
              </a>
              <a
                href="/resume"
                className="rounded-full border border-paper/25 px-6 py-3 text-sm text-paper hover:border-paper"
              >
                View resume
              </a>
            </div>
          </div>
          <div className="overflow-hidden border-t border-paper/10 py-4">
            <div className="marquee-track flex gap-10 whitespace-nowrap px-6 text-sm tracking-[0.18em] uppercase text-mist">
              {[...skills, ...skills].map((skill, i) => (
                <span key={`${skill}-${i}`} className="flex items-center gap-10">
                  {skill}
                  <span className="text-copper">/</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-pad py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <p className="mono text-[11px] tracking-[0.24em] uppercase text-ink-soft lg:col-span-3">
              01 — Profile
            </p>
            <div className="lg:col-span-8">
              <h2 className="display text-4xl leading-tight tracking-tight md:text-6xl">
                Structured thinking, production-grade code.
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-ink-soft">
                About {site.yearsExperience} years of hands-on backend work. I bring analytical
                depth to messy production problems and care about standards,
                reviews, and code that still makes sense at 2 a.m. I work in
                English every day with international teams, and I am looking
                for the next challenging software role where that craft can
                grow.
              </p>
              <dl className="mt-12 grid gap-8 sm:grid-cols-3">
                <div>
                  <dt className="mono text-[11px] tracking-[0.2em] uppercase text-ink-soft">
                    Experience
                  </dt>
                  <dd className="display mt-2 text-4xl">
                    {site.yearsExperience} yrs
                  </dd>
                </div>
                <div>
                  <dt className="mono text-[11px] tracking-[0.2em] uppercase text-ink-soft">
                    Current
                  </dt>
                  <dd className="display mt-2 text-4xl">Amdocs</dd>
                </div>
                <div>
                  <dt className="mono text-[11px] tracking-[0.2em] uppercase text-ink-soft">
                    Languages
                  </dt>
                  <dd className="display mt-2 text-4xl">EN / HE</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <div className="rule mx-[clamp(1.25rem,5vw,4.5rem)]" />

        <section id="work" className="section-pad py-20 md:py-28">
          <p className="mono text-[11px] tracking-[0.24em] uppercase text-ink-soft">
            02 — Experience
          </p>
          <h2 className="display mt-4 max-w-3xl text-4xl tracking-tight md:text-6xl">
            Where the work happened.
          </h2>

          <article className="mt-16 grid gap-8 border-t border-ink/10 pt-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="mono text-sm text-copper">2021 — Present</p>
              <h3 className="display mt-3 text-3xl">Amdocs</h3>
              <p className="mt-1 text-ink-soft">Backend Developer</p>
            </div>
            <ul className="space-y-4 text-[1.05rem] leading-7 text-ink-soft lg:col-span-8">
              {amdocsPoints.map((point) => (
                <li key={point} className="border-l-2 border-copper/40 pl-5">
                  {point}
                </li>
              ))}
            </ul>
          </article>

          <article className="mt-16 grid gap-8 border-t border-ink/10 pt-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="mono text-sm text-copper">2020 — 2021</p>
              <h3 className="display mt-3 text-3xl">Elevation Academy</h3>
              <p className="mt-1 text-ink-soft">Backend bootcamp</p>
            </div>
            <div className="space-y-4 text-[1.05rem] leading-7 text-ink-soft lg:col-span-8">
              <p>
                Intensive C, C++, and Python program designed with IBM, Apple,
                Google, Mobileye, and Unit 8200. Algorithms, data structures,
                computer architecture, operating systems, multithreading, and
                advanced C++.
              </p>
              <p>
                Additional work in AI and ML: I/O optimization, image
                processing, geometry, TensorFlow, and MATLAB.
              </p>
            </div>
          </article>
        </section>

        <section id="projects" className="bg-ink text-paper">
          <div className="section-pad py-20 md:py-28">
            <p className="mono text-[11px] tracking-[0.24em] uppercase text-mist">
              03 — Selected work
            </p>
            <h2 className="display mt-4 text-4xl tracking-tight md:text-6xl">
              Projects from the studio years.
            </h2>
            <div className="mt-14 grid gap-px bg-paper/10 md:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="bg-ink p-8 md:p-10"
                >
                  <p className="mono text-[11px] text-copper">
                    0{index + 1}
                  </p>
                  <h3 className="display mt-6 text-3xl">{project.title}</h3>
                  <p className="mono mt-2 text-xs tracking-wide text-mist">
                    {project.tags}
                  </p>
                  <p className="mt-6 leading-7 text-paper/75">{project.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section-pad py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <p className="mono text-[11px] tracking-[0.24em] uppercase text-ink-soft lg:col-span-3">
              04 — Education
            </p>
            <div className="lg:col-span-8">
              <p className="mono text-sm text-copper">2018 — 2020 · GPA 95</p>
              <h2 className="display mt-3 text-4xl tracking-tight md:text-5xl">
                Adva Program by Scale-Up Velocity
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
                Two-and-a-half-year professional training with Scale-Up Velocity
                and a Mahat study certificate. Core mathematics and computer
                science at bachelor level, in cooperation with Tel Aviv
                University, the Hebrew University, and Ben-Gurion University.
                Adva Badge.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-sage text-paper">
          <div className="section-pad py-20 md:py-28">
            <p className="mono text-[11px] tracking-[0.24em] uppercase text-paper/70">
              05 — Contact
            </p>
            <h2 className="display mt-4 max-w-3xl text-4xl tracking-tight md:text-6xl">
              A short note is enough.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-paper/80">
              For roles, collaborations, or a conversation about backend
              systems — write or call. I read everything myself.
            </p>
            <div className="mt-12 flex flex-col gap-6">
              <a
                href={`mailto:${site.email}`}
                className="display text-3xl underline decoration-copper decoration-2 underline-offset-8 md:text-5xl"
              >
                {site.email}
              </a>
              <a
                href={`tel:${site.phone}`}
                className="display text-2xl md:text-4xl"
              >
                {site.phoneDisplay}
              </a>
              <p className="mono text-sm tracking-wide text-paper/70">
                {site.location}
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="section-pad flex flex-col gap-3 py-8 text-sm text-ink-soft sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p className="mono text-xs tracking-wide uppercase">
          Backend · Linux · Oracle · AI tooling
        </p>
      </footer>
    </>
  );
}
