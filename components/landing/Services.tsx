"use client";

import { motion, Variants } from "framer-motion"; // Imported motion and Variants
import { services } from "@/lib/data";
import SectionTag from "../common/SectionTag";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-tertiary py-24 text-center md:py-32 overflow-hidden">
      <div className="maxContainer px-5">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={fadeUpVariants} className="flex justify-center">
            <SectionTag>Services</SectionTag>
          </motion.div>

          <motion.h2 
            variants={fadeUpVariants} 
            className="mt-8 sm:mt-14 text-md text-[#002404] md:text-[72px]"
          >
            Mobility, Comfort
          </motion.h2>

          <motion.p 
            variants={fadeUpVariants} 
            className="mx-auto mt-5 sm:mt-8 max-w-[824px] font-sans sm:leading-8 text-grey sm:text-[22px]"
          >
            Beat the Hustle, Keep the Comfort. Whether you’re heading to a high-stakes meeting or returning home after a long day, Kablux ensures that while the city moves fast, you move with grace, ease, and absolute comfort.
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;