"use client";

import { useEffect, useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

function encode(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (status !== "sent") return;
    const timer = window.setTimeout(() => setStatus("idle"), 30_000);
    return () => window.clearTimeout(timer);
  }, [status]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("company") ?? "").trim()) {
      setStatus("sent");
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    setStatus("sending");
    setError("");

    const gmailRequest = fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _replyto: email,
          _subject: `Portfolio message from ${name}`,
          _template: "table",
          _captcha: "false",
        }),
        signal: AbortSignal.timeout(20000),
      },
    ).then(async (response) => {
      const payload = (await response.json().catch(() => null)) as
        | { success?: string | boolean; message?: string }
        | null;
      const ok =
        response.ok &&
        (payload?.success === true || payload?.success === "true");
      if (!ok) {
        throw new Error(payload?.message ?? "Gmail delivery failed.");
      }
    });

    const netlifyRequest =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
        ? Promise.resolve()
        : fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
              "form-name": "contact",
              name,
              email,
              message,
            }),
          }).then((response) => {
            if (!response.ok) {
              throw new Error("Netlify form failed.");
            }
          });

    const results = await Promise.allSettled([gmailRequest, netlifyRequest]);
    const delivered = results.some((result) => result.status === "fulfilled");

    if (!delivered) {
      const reason = results.find((result) => result.status === "rejected") as
        | PromiseRejectedResult
        | undefined;
      setStatus("error");
      setError(
        reason?.reason instanceof Error
          ? `${reason.reason.message} You can still email me directly.`
          : "Could not send the message. Email me directly and I will reply.",
      );
      return;
    }

    form.reset();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <p className="rounded-2xl border border-paper/20 bg-paper/10 px-6 py-8 text-lg leading-8 text-paper">
        Thank you. Your note is on its way — I will read it and reply
        myself.
      </p>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="company"
      onSubmit={onSubmit}
      className="relative flex flex-col gap-5"
      noValidate
    >
      <input type="hidden" name="form-name" value="contact" />
      <label className="sr-only" htmlFor="company">
        Company
      </label>
      <input
        id="company"
        name="company"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <label className="flex flex-col gap-2">
        <span className="mono text-[11px] tracking-[0.2em] uppercase text-paper/70">
          Name
        </span>
        <input
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={120}
          autoComplete="name"
          className="rounded-xl border border-paper/20 bg-paper/10 px-4 py-3 text-paper outline-none placeholder:text-paper/40 focus:border-copper"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="mono text-[11px] tracking-[0.2em] uppercase text-paper/70">
          Your email
        </span>
        <input
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          className="rounded-xl border border-paper/20 bg-paper/10 px-4 py-3 text-paper outline-none placeholder:text-paper/40 focus:border-copper"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="mono text-[11px] tracking-[0.2em] uppercase text-paper/70">
          Message
        </span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={6}
          className="resize-y rounded-xl border border-paper/20 bg-paper/10 px-4 py-3 text-paper outline-none placeholder:text-paper/40 focus:border-copper"
        />
      </label>

      {status === "error" ? (
        <p className="text-sm text-paper" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="self-start rounded-full bg-copper px-6 py-3 text-sm text-paper hover:bg-copper-deep disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send a note"}
      </button>
    </form>
  );
}
