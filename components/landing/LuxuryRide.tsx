"use client";
import { motion, Variants } from "framer-motion";
import { luxuryRideData } from "@/lib/data";
import SectionTag from "../common/SectionTag";
import FeatureBlock from "./FeatureBlock";

const LuxuryRide = () => {
  const headerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section className="bg-tertiary py-24 text-center md:py-32 overflow-hidden">
      <div className="maxContainer px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} 
          variants={headerVariants}
        >
          <motion.div variants={itemVariants} className="flex justify-center">
            <SectionTag>Services</SectionTag>
          </motion.div>

          <motion.h2 variants={itemVariants} className="mt-8 sm:mt-14 text-md text-[#002404] md:text-[72px]">
            Luxury Rides, Fair Earnings
          </motion.h2>

          <motion.p variants={itemVariants} className="mx-auto mt-5 sm:mt-8 max-w-3xl font-sans sm:leading-8 text-grey sm:text-[22px]">
            We’re building a better ride-hailing experience for everyone whether
            you're catching a quick trip or earning on your own schedule.
          </motion.p>
        </motion.div>

        <div className="mt-20 space-y-20">
          {luxuryRideData.map((item) => (
            <FeatureBlock
              key={item.title}
              {...(item as Parameters<typeof FeatureBlock>[0])}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryRide;