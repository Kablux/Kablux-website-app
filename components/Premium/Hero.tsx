"use client";

import { motion } from "framer-motion";
import Button from "@/components/common/Button";
import { CalendarDays, Clock3, ChevronDown } from "lucide-react";

const PremiumHero = () => {
  // Stagger arrangement for the left side typography elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Crisp, staggered appearance
        delayChildren: 0.1,
      },
    },
  };

  // Smooth cinematic ease-out for text blocks
  const textVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1], // Custom premium easeOut (cubic-bezier)
      },
    },
  };

  // Distinct entrance for the right-hand card layout
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.4, // Enters right after the main title loads
      },
    },
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/premium-hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Dark Overlay Fade-in */}
      <motion.div 
        className="absolute inset-0 bg-black/75"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "linear" }}
      />

      <div className="relative z-10 maxContainer sm:px-8 px-5 py-10 md:py-16">
        <div className="grid min-h-[700px] gap-8 md:gap-0 items-center md:grid-cols-[1.15fr_0.50fr]">
          
          {/* LEFT CONTENT CONTAINER */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="rounded-[32px] flex flex-col items-center w-full text-center bg-[#AB821F]/80 p-8 text-white backdrop-blur-[3px] md:p-12 shadow-2xl border border-white/5">
              <motion.h1 
                variants={textVariants}
                className="text-sm sm:text-md font-semibold sm:leading-tight md:text-[52px] max-w-[720px]"
              >
                Honoring our Premium while driving the future.
              </motion.h1>

              <motion.p 
                variants={textVariants}
                className="mt-5 max-w-[820px] text-base leading-8 text-white/90 md:text-[20px]"
              >
                Celebrating 140 years since inventing the automobile,
                Mercedes-Benz welcomes you to the brand that has continuously
                shaped the way the world moves forward.
              </motion.p>

              <motion.div 
                variants={textVariants}
                className="mt-8 flex justify-center flex-wrap sm:flex-nowrap gap-4"
              >
                <Button className="font-semibold w-max">Explore Offers</Button>
                <Button
                  variant="secondary"
                  className="border-white max-w-max text-white hover:border-white hover:bg-white/10"
                >
                  View Inventory
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT BOOKING CARD CONTAINER */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <div className="w-full max-w-[416px] rounded-[20px] border border-white/10 bg-black/70 px-6 py-8 text-white backdrop-blur-xl shadow-2xl">
              <h2 className="text-center text-sm font-semibold tracking-wide uppercase opacity-90">
                Book your Ride
              </h2>

              <div className="mt-6 space-y-8">
                {/* Vehicle Selection */}
                <div className="relative">
                  <select className="h-12 w-full appearance-none rounded-xl border border-white/20 bg-transparent px-4 outline-none transition-colors duration-200 focus:border-[#AB821F]">
                    <option className="text-black">KabLux Premium</option>
                    <option className="text-black">Executive Sedan</option>
                    <option className="text-black">Luxury SUV</option>
                  </select>
                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 opacity-70"
                  />
                </div>

                {/* Pickup Location */}
                <input
                  type="text"
                  placeholder="From"
                  className="h-12 w-full rounded-xl border border-white/20 bg-transparent px-4 outline-none placeholder:text-white/60 transition-colors duration-200 focus:border-[#AB821F]"
                />

                {/* Dropoff Location */}
                <input
                  type="text"
                  placeholder="To"
                  className="h-12 w-full rounded-xl border border-white/20 bg-transparent px-4 outline-none placeholder:text-white/60 transition-colors duration-200 focus:border-[#AB821F]"
                />

                {/* Date Selection */}
                <div className="relative">
                  <input
                    type="date"
                    className="h-12 w-full rounded-xl border border-white/20 bg-transparent px-4 outline-none focus:border-[#AB821F]"
                  />
                  <CalendarDays
                    size={16}
                    className="absolute right-4 top-1/2 -translate-y-1/2 opacity-70 pointer-events-none"
                  />
                </div>

                {/* Time Selection */}
                <div className="relative">
                  <input
                    type="time"
                    className="h-12 w-full rounded-xl border border-white/20 bg-transparent px-4 outline-none focus:border-[#AB821F]"
                  />
                  <Clock3
                    size={16}
                    className="absolute right-4 top-1/2 -translate-y-1/2 opacity-70 pointer-events-none"
                  />
                </div>

                <Button className="w-full py-2 justify-center font-semibold">
                  Book Now
                </Button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PremiumHero;