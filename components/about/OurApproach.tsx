"use client";

import { motion } from "framer-motion";
import {
  Eye, // For Transparency
  ShieldCheck, // For Safety
  MapPin, // For Reliability
  DollarSign, // For Fairness
  Blocks, // For Versatility
  LucideIcon,
} from "lucide-react";

interface Approach {
  icon: LucideIcon;
  title: string;
  description: string;
}

const approach: Approach[] = [
  {
    icon: Eye,
    title: "Transparency & Control",
    description:
      "Riders can see upfront pricing and have the option to negotiate on standard rides.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Verification",
    description:
      "Every driver undergoes rigorous background checks and documentation verification.",
  },
  {
    icon: MapPin,
    title: "Reliability",
    description:
      "Real-time tracking, clear communication, and professional service standards.",
  },
  {
    icon: DollarSign,
    title: "Fairness",
    description:
      "Drivers receive competitive earnings with instant payouts and meaningful support.",
  },
  {
    icon: Blocks,
    title: "Versatility",
    description:
      " From everyday standard rides to corporate mobility and professional courier dispatch, Kablux offers a full suite of mobility solutions.",
  },
];

const OurApproach = () => {
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
          Our <span className="text-deepYellow">Approach</span>
        </h2>
        <p className="mt-6 max-w-[725px] font-heebo sm:text-[18px] leading-7 text-black/70">
          Kablux connects thousands of riders and drivers every day across the beautiful city of Ibadan. From standard rides to corporate fleets, premium chauffeurs, and same-day courier.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {approach.map((approach, index) => (
          <motion.div
            key={approach.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="rounded-xl flex flex-col justify-center items-center border border-black/5 bg-white p-8 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.3)] transition-shadow hover:shadow-[0_15px_35px_-18px_rgba(0,0,0,0.35)]"
          >
            <approach.icon className="h-7 w-7 text-[#ffbe18]" strokeWidth={1.75} />
            <h3 className="mt-5 font-poppins text-base md:text-[18px] font-bold text-black">
              {approach.title}
            </h3>
            <p className="mt-2 text-center font-heebo leading-6 text-black/60">
              {approach.description}
            </p>
          </motion.div>
        ))}
      </div>
        </div>
    </section>
  );
};

export default OurApproach;
