"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, LucideIcon, ChevronsRight } from "lucide-react";

interface InfoCard {
  icon: LucideIcon;
  iconBg: string;
  label: string;
  value: string;
  href: string;
  linkName: string;
}

const cards: InfoCard[] = [
  {
    icon: MapPin,
    iconBg: "bg-[#1A685B]",
    label: "Address",
    value: "Lekki Phase 1, Lagos",
    href: "https://maps.google.com",
    linkName: "View on Map",
  },
  {
    icon: Phone,
    iconBg: "bg-[#ffbe18]",
    label: "Phone",
    value: "Call us directly",
    href: "tel:+2340000000000",
     linkName: "Call Us Directly",
  },
  {
    icon: Mail,
    iconBg: "bg-[#141414]",
    label: "Email",
    value: "Send Us A Mail",
    href: "mailto:hello@kablux.com",
     linkName: "Send your Mail",
  },
];

const ContactInfo = () => {
  return (
    <section className="bg-tertiary">
    <div className="maxContainer px-5 py-20">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group flex items-center gap-6 rounded-2xl bg-white p-5 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:shadow-[0px_10px_30px_rgba(0,0,0,0.1)]"
            >
              <span
                className={`flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-xl ${card.iconBg} transition-transform duration-500 group-hover:scale-105`}
              >
                <card.icon
                  className="h-10 w-10 text-white"
                  strokeWidth={1.5}
                />
              </span>

              <div className="flex flex-col">
                <h3 className="font-poppins sm:text-[18px] font-semibold text-gray-900">
                  {card.label}
                </h3>
                <p className="mt-1 font-poppins text-[15px] text-gray-500">
                  {card.value}
                </p>
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-3 flex w-fit items-center gap-1 font-poppins text-[13px] font-bold uppercase tracking-wider text-gray-900 transition-colors duration-300 hover:text-[#f5a100]"
                >
                  {card.linkName}
                  <ChevronsRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
    </div>
    </section>
  );
};

export default ContactInfo;
