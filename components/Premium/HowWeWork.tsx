"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import HowWeWorkStep from "./HowWeWorkStep";

const steps = [
  {
    number: 1,
    title: "Choose Your Fare",
    description:
      "Go fixed or negotiate directly with drivers.",
  },
  {
    number: 2,
    title: "Travel with Confidence",
    description:
      "Share trips with loved ones, track your driver in real-time, and ride in comfort.",
  },
  {
    number: 3,
    title: "Ride Options for Every Need",
    description:
      "Budget, premium, convoy, or security-assisted rides.",
  },
  {
    number: 4,
    title: "Arrive Safely",
    description:
      "Enjoy secure, reliable transportation backed by professional drivers and real-time support.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const HowWeWork = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="maxContainer px-5">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          {/* IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
            className="overflow-hidden rounded-[26px] shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
          >
            <Image
              src="/premium-riders.png"
              alt="Passengers enjoying a premium ride"
              width={1200}
              height={800}
              className="h-full min-h-[320px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>

          {/* CONTENT */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <motion.p
              variants={itemVariants}
              className="text-sm w-max font-bold uppercase text-grey border-b border-b-[4px] border-primary"
            >
              How We Work
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="mt-8 space-y-8"
            >
              {steps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                >
                  <HowWeWorkStep {...step} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;