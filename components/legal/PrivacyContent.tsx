"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Section {
  id: string;
  number: string;
  title: string;
  body: React.ReactNode;
}

const SubList = ({ heading, items }: { heading: string; items: string[] }) => (
  <div className="mt-4 first:mt-0">
    <p className="font-poppins sm:text-[18px] font-semibold text-black">{heading}</p>
    <ul className="mt-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const sections: Section[] = [
  {
    id: "information-we-collect",
    number: "01",
    title: "Information We Collect",
    body: (
      <>
        <p>We collect the following types of information:</p>

        <SubList
          heading="Personal Information"
          items={[
            "Full name, phone number, email address, date of birth, and residential address.",
            "Government-issued ID (NIN, Driver's License, etc.).",
            "Profile photo and selfie for identity verification.",
          ]}
        />
        <SubList
          heading="Location Data"
          items={[
            "Real-time GPS location when you use ride or delivery features (with your consent).",
            "Pickup and drop-off addresses.",
          ]}
        />
        <SubList
          heading="Usage & Technical Data"
          items={[
            "Device information, IP address, app version, and usage logs.",
            "Ride and delivery details (routes, timestamps, status).",
          ]}
        />
        <SubList
          heading="Payment Information"
          items={[
            "Bank account details (for driver payouts) and payment transaction data (processed securely via Paystack).",
          ]}
        />
        <SubList
          heading="For Drivers & Couriers"
          items={[
            "Vehicle details, documents (registration, insurance, roadworthiness), and work history.",
          ]}
        />
      </>
    ),
  },
  {
    id: "how-we-use",
    number: "02",
    title: "How We Use Your Information",
    body: (
      <>
        <p>We use your information to:</p>
        <ul>
          <li>Provide and improve our ride-hailing and courier services.</li>
          <li>Match riders with drivers and manage deliveries.</li>
          <li>Process payments and payouts.</li>
          <li>Ensure safety and verify identities.</li>
          <li>Communicate with you (trip updates, promotions, support).</li>
          <li>
            Comply with legal and regulatory requirements (NDPA, FRSC, etc.).
          </li>
          <li>Prevent fraud and abuse.</li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing-of-information",
    number: "03",
    title: "Sharing of Information",
    body: (
      <>
        <p>We may share your information with:</p>
        <ul>
          <li>
            Drivers or couriers involved in your trip or delivery (limited to
            necessary details).
          </li>
          <li>Partnered companies (for B2B/Corporate rides).</li>
          <li>Payment processors (e.g., Paystack).</li>
          <li>Legal authorities when required by law.</li>
          <li>
            Trusted service providers who help us operate the platform (under
            strict confidentiality).
          </li>
        </ul>
        <p className="mt-4 font-semibold text-black">
          We do not sell your personal data to third parties.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    number: "04",
    title: "Data Security",
    body: (
      <p>
        We implement appropriate technical and organizational measures to
        protect your data, including encryption, access controls, and regular
        security reviews. However, no system is completely secure, and we cannot
        guarantee absolute security.
      </p>
    ),
  },
  {
    id: "your-rights",
    number: "05",
    title: "Your Rights (NDPA Compliance)",
    body: (
      <>
        <p>You have the right to:</p>
        <ul>
          <li>Access, correct, or delete your personal data.</li>
          <li>Withdraw consent where applicable.</li>
          <li>Object to certain processing activities.</li>
          <li>
            Lodge a complaint with the Nigeria Data Protection Commission.
          </li>
        </ul>
        <p className="mt-4">
          To exercise these rights, contact us at{" "}
          <a
            href="mailto:hello@kabluxe.com"
            className="font-semibold text-[#8a6400] underline underline-offset-2"
          >
            hello@kabluxe.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    number: "06",
    title: "Data Retention",
    body: (
      <p>
        We retain your data only for as long as necessary to provide our
        services, comply with legal obligations, or resolve disputes.
        Drivers&rsquo; KYC documents are retained for the duration of their
        active status plus a reasonable period thereafter.
      </p>
    ),
  },
  {
    id: "cookies",
    number: "07",
    title: "Cookies and Tracking",
    body: (
      <p>
        We use cookies and similar technologies to improve user experience,
        analyze usage, and deliver personalized content. You can manage cookie
        preferences through your device settings.
      </p>
    ),
  },
  {
    id: "childrens-privacy",
    number: "08",
    title: "Children's Privacy",
    body: (
      <p>
        Our services are not directed at children under 18. We do not knowingly
        collect data from minors.
      </p>
    ),
  },
  {
    id: "changes",
    number: "09",
    title: "Changes to this Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of significant changes through the app or email.
      </p>
    ),
  },
  {
    id: "contact-us",
    number: "10",
    title: "Contact Us",
    body: (
      <>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a
              href="mailto:hello@kabluxe.com"
              className="font-semibold text-[#8a6400] underline underline-offset-2"
            >
              hello@kabluxe.com
            </a>
          </li>
          <li>
            Phone:{" "}
            <a
              href="tel:+2349075502400"
              className="font-semibold text-[#8a6400] underline underline-offset-2"
            >
              +234 907 550 2400
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

const LAST_UPDATED = "July 23, 2026";

const PrivacyContent = () => {
  const [activeId, setActiveId] = useState(sections[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleJump = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="maxContainer px-5 py-16 md:py-20">
      {/* Intro strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col items-start justify-between gap-4 border-b border-black/10 pb-8 sm:flex-row sm:items-end"
      >
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#ffbe18]/15 px-3 py-1 font-poppins text-xs font-semibold text-[#8a6400]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ffbe18]" />
            Last Updated: {LAST_UPDATED}
          </span>
          <p className="mt-4 sm:text-[18px] text-black/60">
            At Kablux, we respect your privacy and are committed to protecting
            your personal data. This Privacy Policy explains how we collect,
            use, store, and protect your information when you use our mobile
            applications, website, and services. By using Kablux, you consent to
            the practices described in this Policy.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[240px_1fr] md:gap-14">
        {/* Sticky table of contents */}
        <motion.aside
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <div className="sticky top-24">
            <p className="mb-4 font-poppins text-xs font-bold uppercase tracking-wider text-black/40">
              On this page
            </p>
            <nav className="space-y-1 border-l border-black/10">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => handleJump(section.id)}
                    className={`block w-full border-l-2 py-2 pl-4 text-left font-poppins transition-colors ${
                      isActive
                        ? "border-[#ffbe18] font-semibold text-black"
                        : "border-transparent text-black/50 hover:text-black"
                    }`}
                  >
                    {section.number}. {section.title}
                  </button>
                );
              })}
            </nav>
          </div>
        </motion.aside>

        {/* Section cards */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.article
              key={section.id}
              id={section.id}
              ref={(el) => {
                sectionRefs.current[section.id] = el;
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.3) }}
              className="scroll-mt-24 rounded-xl border border-black/5 bg-white p-6 shadow-[0_10px_30px_-22px_rgba(0,0,0,0.3)] md:p-8"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#141414] font-poppins text-xs font-bold text-[#ffbe18]">
                  {section.number}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="font-poppins font-bold text-black md:text-sm">
                    {section.title}
                  </h2>
                  <div className="prose-terms mt-3 font-heebo text-black/65">
                    {section.body}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          {/* Closing note */}
           <div className="rounded-xl bg-[#141414] p-6 text-center md:p-8">
            <p className="font-poppins sm:text-[18px] leading-7 text-white/70">
              Questions about these Terms? Reach out to our support team and
              we&rsquo;ll be glad to help.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-block rounded-md bg-primary px-6 py-2.5 font-poppins font-medium text-black transition-opacity hover:opacity-90"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .prose-privacy ul {
          list-style: none;
          padding: 0;
          margin: 0.5rem 0 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .prose-privacy li {
          position: relative;
          padding-left: 1.1rem;
        }
        .prose-privacy li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.55em;
          width: 5px;
          height: 5px;
          border-radius: 9999px;
          background: #ffbe18;
        }
        .prose-privacy p + ul {
          margin-top: 0.75rem;
        }
      `}</style>
    </section>
  );
};

export default PrivacyContent;
