"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Section {
  id: string;
  number: string;
  title: string;
  body: React.ReactNode;
}

const sections: Section[] = [
  {
    id: "platform",
    number: "01",
    title: "Our Platform",
    body: (
      <p>
        Kablux is a technology platform that connects riders, drivers, and
        businesses for ride-hailing and professional courier services. We do
        not own or operate vehicles. Drivers and couriers are independent
        partners, not employees of Kablux.
      </p>
    ),
  },
  {
    id: "eligibility",
    number: "02",
    title: "Eligibility",
    body: (
      <ul>
        <li>You must be at least 18 years old to use Kablux as a rider or sender.</li>
        <li>
          Drivers and couriers must be at least 21 years old, hold a valid
          driver&rsquo;s license (where applicable), and meet all regulatory
          and documentation requirements.
        </li>
        <li>Corporate accounts must be duly registered businesses in Nigeria.</li>
      </ul>
    ),
  },
  {
    id: "accounts",
    number: "03",
    title: "User Accounts",
    body: (
      <p>
        You are responsible for maintaining the confidentiality of your
        account credentials. Kablux reserves the right to suspend or
        terminate accounts involved in fraud, abuse, or repeated violations
        of these Terms.
      </p>
    ),
  },
  {
    id: "services",
    number: "04",
    title: "Services",
    body: (
      <>
        <p>Kablux offers:</p>
        <ul>
          <li>Standard, Corporate, and Premium ride-hailing services.</li>
          <li>Professional courier and dispatch services.</li>
          <li>Fleet and vehicle management solutions for businesses.</li>
          <li>All services are subject to availability and may vary by city.</li>
        </ul>
      </>
    ),
  },
  {
    id: "pricing",
    number: "05",
    title: "Pricing and Payment",
    body: (
      <ul>
        <li>Fares are calculated based on distance, time, demand, and vehicle type.</li>
        <li>On Standard rides, users may negotiate fares with drivers before the trip begins.</li>
        <li>Corporate rides are billed directly to the company wallet using unique employee codes.</li>
        <li>Payments can be made via wallet, card, cash, or bank transfer through our secure partners.</li>
        <li>All transactions are final unless otherwise stated in our cancellation policy.</li>
      </ul>
    ),
  },
  {
    id: "cancellations",
    number: "06",
    title: "Cancellations",
    body: (
      <ul>
        <li>Riders may cancel before the driver arrives, subject to a cancellation fee.</li>
        <li>
          Drivers may cancel with valid reason. Repeated unjustified
          cancellations may result in account suspension.
        </li>
        <li>Corporate cancellations follow the company&rsquo;s internal policy.</li>
      </ul>
    ),
  },
  {
    id: "driver-obligations",
    number: "07",
    title: "Driver and Courier Obligations",
    body: (
      <>
        <p>Drivers and couriers agree to:</p>
        <ul>
          <li>Maintain valid licenses, vehicle documents, and insurance.</li>
          <li>Provide safe, courteous, and professional service.</li>
          <li>Complete accepted trips unless safety or exceptional circumstances apply.</li>
          <li>Not engage in any form of harassment, fraud, or misconduct.</li>
        </ul>
      </>
    ),
  },
  {
    id: "rider-obligations",
    number: "08",
    title: "Rider and Sender Obligations",
    body: (
      <>
        <p>Riders and senders agree to:</p>
        <ul>
          <li>Provide accurate pickup and delivery information.</li>
          <li>Treat drivers and couriers with respect.</li>
          <li>Not engage in fraud or misuse of the platform.</li>
          <li>For courier services, be available to provide the Delivery PIN upon arrival.</li>
        </ul>
      </>
    ),
  },
  {
    id: "safety",
    number: "09",
    title: "Safety",
    body: (
      <ul>
        <li>The SOS button is for genuine emergencies only.</li>
        <li>Misuse of safety features may result in account suspension.</li>
        <li>
          Kablux may share location data with emergency services or trusted
          contacts when SOS is activated.
        </li>
      </ul>
    ),
  },
  {
    id: "liability",
    number: "10",
    title: "Liability",
    body: (
      <p>
        Kablux is a technology platform and is not liable for the actions or
        omissions of independent drivers or couriers. Our liability is
        limited to the value of the service fee paid for the specific trip
        or delivery.
      </p>
    ),
  },
  {
    id: "termination",
    number: "11",
    title: "Termination",
    body: (
      <p>
        Kablux may suspend or terminate your account for violation of these
        Terms, safety concerns, fraud, or repeated complaints. You may delete
        your account at any time through the app settings.
      </p>
    ),
  },
  {
    id: "disputes",
    number: "12",
    title: "Dispute Resolution",
    body: (
      <p>
        Any disputes shall first be resolved amicably through our support
        team. Unresolved disputes shall be subject to the jurisdiction of the
        courts of the Federal Republic of Nigeria.
      </p>
    ),
  },
  {
    id: "governing-law",
    number: "13",
    title: "Governing Law",
    body: <p>These Terms are governed by the laws of the Federal Republic of Nigeria.</p>,
  },
];

const LAST_UPDATED = "July 23, 2026";

const TermsContent = () => {
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
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleJump = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
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
          <p className="mt-4 sm:text-[18px]  text-black/60">
            Welcome to Kablux. These Terms govern your use of the Kablux
            mobile applications, website, and related services (the
            &ldquo;Platform&rdquo;). By accessing or using Kablux, you agree
            to be bound by these Terms. If you do not agree, please do not
            use our services.
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
              <div className="flex flex-col sm:flex-row  items-start gap-4">
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
        .prose-terms ul {
          list-style: none;
          padding: 0;
          margin: 0.5rem 0 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .prose-terms li {
          position: relative;
          padding-left: 1.1rem;
        }
        .prose-terms li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.55em;
          width: 5px;
          height: 5px;
          border-radius: 9999px;
          background: #ffbe18;
        }
        .prose-terms p + ul {
          margin-top: 0.75rem;
        }
      `}</style>
    </section>
  );
};

export default TermsContent;
