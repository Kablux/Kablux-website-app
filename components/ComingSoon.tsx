"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, MapPin, Flag } from "lucide-react";

const steps = [
  { label: "Requested", state: "done" as const },
  { label: "Building your route", state: "active" as const },
  { label: "Live soon", state: "upcoming" as const },
];

const CarIcon = () => (
  <svg viewBox="0 0 64 32" className="h-7 w-14" fill="none">
    <path
      d="M4 22c0-2.2 1.4-4 4-4.6L12 14c1-2.4 3.4-4 6-4h16c2.6 0 5 1.6 6 4l4 3.4c2.6.6 4 2.4 4 4.6v3a2 2 0 0 1-2 2h-3a5 5 0 0 1-10 0H19a5 5 0 0 1-10 0H6a2 2 0 0 1-2-2v-3Z"
      fill="#fff8ec"
    />
    <path d="M15 14.4 17 10h14l3.6 4.4H15Z" fill="#141414" fillOpacity="0.12" />
    <circle cx="14" cy="25" r="3.4" fill="#141414" />
    <circle cx="14" cy="25" r="1.3" fill="#fff8ec" />
    <circle cx="34" cy="25" r="3.4" fill="#141414" />
    <circle cx="34" cy="25" r="1.3" fill="#fff8ec" />
    <circle cx="49" cy="16" r="1.6" fill="#ffbe18" />
  </svg>
);

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sent");
  };

  const headline = "We're currently building this route.";

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#141414] px-5 py-20">
      {/* Ambient backdrop: dot grid + slow-pulsing glow */}
      <div className="pointer-events-none absolute inset-0 bg-cs-grid opacity-[0.08]" />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#ffbe18] opacity-40 blur-[140px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[640px] flex-col items-center text-center">
        {/* Eyebrow / trip status pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-poppins text-xs font-semibold uppercase tracking-wider text-white/70"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffbe18] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ffbe18]" />
          </span>
          Page status &middot; in progress
        </motion.div>

        {/* Headline, word-by-word reveal */}
        <h1 className="mt-7 flex flex-wrap justify-center gap-x-3 font-poppins text-[34px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[46px]">
          {headline.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
              className={
                word.toLowerCase().includes("route")
                  ? "text-[#ffbe18]"
                  : undefined
              }
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-5 max-w-[740px] font-heebo sm:text-[18px] leading-7 text-white/60"
        >
          Every good ride starts with paving the road first. We&apos;re
          putting the finishing touches on this page &mdash; please check
          back soon.
        </motion.p>

        {/* Signature element: the road strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="relative mt-10 w-full max-w-[420px]"
        >
          <div className="relative h-[76px] w-full overflow-hidden rounded-2xl bg-[#0c0c0c] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
            {/* scrolling dashed centre line */}
            <div className="cs-road-dashes absolute left-0 top-1/2 h-[3px] w-[200%] -translate-y-1/2" />

            {/* pin + flag markers on either edge, road "ends" */}
            <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/25" strokeWidth={1.75} />
            <Flag className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/25" strokeWidth={1.75} />

            {/* idling car, bobbing gently */}
            <motion.div
              animate={{ y: [0, -2, 0], rotate: [0, -0.6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <CarIcon />
            </motion.div>
          </div>

          {/* Trip stepper */}
          <div className="mt-6 flex items-center justify-between">
            {steps.map((step, i) => (
              <div key={step.label} className="flex flex-1 items-center">
                <div className="flex flex-col items-center gap-2">
                  <span
                    className={`relative flex h-2.5 w-2.5 items-center justify-center rounded-full ${
                      step.state === "upcoming"
                        ? "bg-white/15"
                        : "bg-[#ffbe18]"
                    }`}
                  >
                    {step.state === "active" && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffbe18] opacity-60" />
                    )}
                  </span>
                  <span
                    className={`whitespace-nowrap font-poppins text-[11px] font-medium ${
                      step.state === "upcoming" ? "text-white/35" : "text-white/75"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="mx-2 mb-4 h-px flex-1 border-t border-dashed border-white/15" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ETA readout - utility/mono face for a data-feeling detail */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 font-mono text-[11px] tracking-wide text-white/35"
        >
          ETA &mdash; still calculating, worth the wait
        </motion.p>

        {/* Notify form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-9 flex w-full max-w-[400px] flex-col gap-2 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 font-poppins text-white outline-none placeholder:text-white/35 focus:border-[#ffbe18]"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-[#ffbe18] px-6 py-2 font-heebo font-medu text-black transition-opacity hover:opacity-90"
          >
            Notify me
          </button>
        </motion.form>

        {status === "sent" && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 font-poppins text-xs text-[#ffbe18]"
          >
            You&apos;re on the list &mdash; we&apos;ll let you know when we launch.
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.15 }}
        >
          <Link
            href="/"
            className="mt-10 inline-flex items-center gap-2 font-poppins text-[18px} font-medium text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to homepage
          </Link>
        </motion.div>
      </div>

      <style jsx global>{`
        .bg-cs-grid {
          background-image: radial-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px);
          background-size: 26px 26px;
        }
        .cs-road-dashes {
          background-image: repeating-linear-gradient(
            90deg,
            #ffbe18 0px,
            #ffbe18 14px,
            transparent 14px,
            transparent 28px
          );
          animation: cs-road-scroll 1.4s linear infinite;
        }
        @keyframes cs-road-scroll {
          from {
            transform: translate(0, -50%);
          }
          to {
            transform: translate(-50%, -50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .cs-road-dashes {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
};

export default ComingSoon;
