"use client";

import { motion } from "framer-motion";
import {
  CarFront,
  Users,
  CalendarDays,
  Gauge,
} from "lucide-react";

const stats = [
  {
    icon: CarFront,
    value: "540+",
    label: "Cars",
  },
  {
    icon: Users,
    value: "200+",
    label: "Customers",
  },
  {
    icon: CalendarDays,
    value: "1+",
    label: "Years",
  },
  {
    icon: Gauge,
    value: "20m+",
    label: "Miles",
  },
];

export default function HowPlatformWorks() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-24"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 maxContainer px-5">
        <div className="mx-auto max-w-[980px] text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white md:text-[52px]"
          >
            How Our Platform Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="mx-auto mt-5 max-w-[760px] text-[18px] leading-9 text-white/85 md:text-[22px]"
          >
            We put drivers first. With fair commissions, instant payouts, and flexible hours, Kablux is the ride-hailing platform that truly works for you.
          </motion.p>

          {/* Stats */}

          <div className="mt-12 grid gap-5 grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="flex items-center gap-4 rounded-2xl bg-white p-4 text-left shadow-xl"
                >
                  {/* Icon */}

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF9E0C]">
                    <Icon
                      size={24}
                      className="text-white"
                    />
                  </div>

                  {/* Content */}

                  <div>
                    <h3 className="text-[18px] sm:text-sm font-bold text-black">
                      {stat.value}
                    </h3>

                    <p className=" text-gray-500">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}