"use client";

import { motion } from "framer-motion";
import Button from "@/components/common/Button";

const HeroBanner = () => {
  return (
    <>
      <section
        className="relative min-h-[1238px] bg-cover w-full bg-center bg-no-repeat py-20 "
        style={{
          backgroundImage: "url('/hero-banner.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/5" />

        <div className="maxContainer relative px-5 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-[920px] text-[54px] font-extrabold leading-[0.95] tracking-[-0.04em] text-black md:text-[86px]"
          >
            <span className="block">The Future Of</span>

            <span className="mt-4 block text-[38px] md:text-[64px]">
              Ride Hailing...
              <span className="ml-2 inline-block bg-[#ffbe18] px-4 py-2 md:px-7 md:py-3">
                Kablux
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mx-auto font-poppins mt-8 max-w-[869px] sm:leading-8 text-black sm:text-sm"
          >
            A smarter, safer, and more affordable way to get around. With
            Kablux, every ride puts you in control whether you're a rider or a
            driver.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="/corporate" className="font-bold border-black">
              Corporate Account
            </Button>

            <Button
              href="/premium"
              variant="secondary"
              className="font-bold border-black bg-white"
            >
              Get Premium Account
            </Button>
          </motion.div>
        </div>
      </section>

      {/* <div
        className="relative h-full min-h-[259px] sm:bg-cover w-full bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/express-road.png')",
        }}
      ></div> */}
    </>
  );
};

export default HeroBanner;
