"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/common/Button";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const features = [
  "50k+ Trusted riders",
  "28k+ Verified drivers",
  "24/7 support & safety",
];

const sliderImages = [
  "/driver-img.png",
  "/about-slider2.jpg", 
  "/about-slider3.png", 
];

const AboutIntro = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };
  return (
    <section className=" bg-tertiary w-full">
    <div className="maxContainer px-5 py-20 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-poppins text-sm font-bold leading-[1.1] tracking-[-0.03em] text-black sm:text-lg lg:text-xl">
            Built in Nigeria,
            <br />
            <span className="text-deepYellow">for Nigeria.</span>
          </h2>

          <p className="mt-6 max-w-[725px] font-heebo sm:text-[18px] leading-7 text-black/70">
            Kablux is a premium ride-hailing and courier platform designed around how Nigerians actually move — with fair fares you can negotiate, drivers you can trust, and service that respects your time.
          </p>

          <ul className="my-8 space-y-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-4 font-heebo sm:text-[18px] font-medium text-black"
              >
                <CheckCircle2 className="h-5 w-5 text-[#ffbe18] shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          <Button href="/download" className="w-max rounded-[60px] bg-deepYellow text-[#fff] py-3">
            Join Us
          </Button>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="relative mx-auto w-full max-w-[500px]"
          >
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#ffbe18] text-white shadow-md transition-transform hover:scale-105 md:-left-6 lg:h-12 lg:w-12"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#ffbe18] text-white shadow-md transition-transform hover:scale-105 md:-right-6 lg:h-12 lg:w-12"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Container with White Border */}
            <div className="relative aspect-[880/620] w-full overflow-hidden border-[8px] border-white bg-gray-100 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={sliderImages[currentIndex]}
                    alt={`Kablux showcase ${currentIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
      </div>
      </div>
    </section>
  );
};

export default AboutIntro;
