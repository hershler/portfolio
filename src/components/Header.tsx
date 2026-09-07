"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#projects", label: "Projects" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors ${
        scrolled ? "bg-paper/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="section-pad flex items-center justify-between py-4">
        <Link
          href="/"
          className="display text-xl tracking-tight text-ink md:text-[1.35rem]"
        >
          {site.shortName}
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-copper"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/resume"
            className="rounded-full border border-ink/15 px-4 py-1.5 text-ink hover:border-copper hover:text-copper"
          >
            Resume
          </Link>
        </nav>
        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="mono text-xs tracking-[0.2em] uppercase">
            {open ? "Close" : "Menu"}
          </span>
        </button>
      </div>
      {open ? (
        <div className="section-pad border-t border-ink/10 bg-paper pb-6 md:hidden">
          <nav className="flex flex-col gap-3 pt-4 text-lg">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link href="/resume" onClick={() => setOpen(false)}>
              Resume
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
