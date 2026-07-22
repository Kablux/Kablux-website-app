"use client";

import { motion } from "framer-motion";
import {
  HandCoins,
  ShieldCheck,
  Users,
  Crown,
  Building2,
  PackageCheck,
  LucideIcon,
} from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: HandCoins,
    title: "Price negotiation",
    description:
      "Agree on a fair fare with your driver before the ride begins, no surge surprises.",
  },
  {
    icon: ShieldCheck,
    title: "Rider-first safety",
    description:
      "Live trip tracking, verified drivers, and an in-app SOS button on every ride.",
  },
  {
    icon: Users,
    title: "Drivers we respect",
    description:
      "Transparent commissions and weekly payouts so drivers earn what they deserve.",
  },
  {
    icon: Crown,
    title: "Premium when you need it",
    description:
      "Upgrade to a Premium account for priority pickups and dedicated support.",
  },
  {
    icon: Building2,
    title: "Corporate ready",
    description:
      "Manage staff travel budgets and invoicing with a single Kablux for Business account.",
  },
  {
    icon: PackageCheck,
    title: "Same-day courier",
    description:
      "Send packages across town with the same drivers, tracking, and fare fairness.",
  },
];

const OurServices = () => {
  return (
    <section className="bg-tertiary">
    
    <div className=" maxContainer px-5 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-[560px] text-center"
      >
        <h2 className="font-poppins text-sm font-bold tracking-[-0.03em] text-black sm:text-lg lg:text-xl">
          Our <span className="text-deepYellow">Services</span>
        </h2>
        <p className="mt-6 max-w-[725px] font-heebo sm:text-[18px] leading-7 text-black/70">
          Kablux connects thousands of riders and drivers every day across the beautiful city of Ibadan. From standard rides to corporate fleets, premium chauffeurs, and same-day courier.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="rounded-xl flex flex-col justify-center items-center border border-black/5 bg-white p-8 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.3)] transition-shadow hover:shadow-[0_15px_35px_-18px_rgba(0,0,0,0.35)]"
          >
            <service.icon className="h-7 w-7 text-[#ffbe18]" strokeWidth={1.75} />
            <h3 className="mt-5 font-poppins text-base md:text-[18px] font-bold text-black">
              {service.title}
            </h3>
            <p className="mt-2 text-center font-heebo leading-6 text-black/60">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
        </div>
    </section>
  );
};

export default OurServices;
