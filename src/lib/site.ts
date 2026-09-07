const careerStartYear = 2021;
const yearsExperience = new Date().getFullYear() - careerStartYear;

export const site = {
  name: "Rachel Rubin Hershler",
  shortName: "Rachel Rubin",
  role: "Backend Developer",
  location: "Israel",
  email: "RachelHershler@gmail.com",
  phone: "+972-58-324-4475",
  phoneDisplay: "058-324-4475",
  careerStartYear,
  yearsExperience,
  description: `Backend developer in Israel with ${yearsExperience} years at Amdocs. Builds C, C++, Python, and Java systems on Linux, with Oracle SQL, daemons, batch jobs, and AI-assisted engineering.`,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
