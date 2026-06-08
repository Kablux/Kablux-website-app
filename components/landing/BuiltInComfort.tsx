"use client";
import { motion, Variants } from "framer-motion"; 
import { fleetSteps, safetyFeatures } from "@/lib/data";
import SectionTag from "../common/SectionTag";
import Image from "next/image";
import SafetyCard from "./SafetyCard";
import FleetStep from "./FleetStep";

const BuiltInComfort = () => {
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
      transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }, 
    },
  };

  return (
    <section className="bg-tertiary py-24 text-center md:py-32 overflow-hidden">
      <div className="maxContainer px-5">
        
        {/* Header Block */}
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
            Built With Comfort in Mind
          </motion.h2>

          <motion.p 
            variants={fadeUpVariants} 
            className="mx-auto mt-5 sm:mt-8 max-w-[824px] font-sans sm:leading-8 text-grey sm:text-[22px]"
          >
            From background-checked drivers to real-time trip tracking and 24/7
            support, KabLux is designed to keep every ride smooth, secure, and
            worry-free.
          </motion.p>
        </motion.div>

        {/* Safety Cards Grid */}
        <motion.div 
          className="mt-12 sm:mt-16 grid gap-8 ss:grid-cols-2 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {safetyFeatures.map((item, idx) => (
            <SafetyCard key={item.number} {...item} index={idx} />
          ))}
        </motion.div>

        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-bold text-[#111111] md:text-lg">
              Fleet Services
            </h3>

            <p className="mx-auto mt-8 max-w-[624px] font-sans font-medium sm:text-[18px]">
              With Kablux, hiring a luxury car has never been easier. Our
              streamlined process makes it simple to book and confirm your vehicle
              online.
            </p>
          </motion.div>

          <div className="relative mt-12 md:flex md:justify-end md:items-center min-h-[500px]">
            
            <motion.div 
              className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 mb-12 md:mb-0 md:z-20 flex flex-col gap-4 text-left w-full md:w-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              {fleetSteps.map((step, idx) => (
                <FleetStep key={step.title} {...step} index={idx} />
              ))}
            </motion.div>

            <div 
              className="md:ml-[220px] w-full md:max-w-[850px] rounded-[24px] border-4 border-primary p-8"
              
            >
              <Image
                src="/kablux_car.png"
                alt="Kablux Fleet Vehicle"
                width={800}
                height={500}
                className="mx-auto w-full object-contain"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BuiltInComfort;