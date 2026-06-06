"use client";

import { motion } from "framer-motion";

interface HowWeWorkStepProps {
  number: number;
  title: string;
  description: string;
}

const HowWeWorkStep = ({
  number,
  title,
  description,
}: HowWeWorkStepProps) => {
  return (
    <motion.div
      whileHover={{
        x: 8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group flex gap-4 font-poppins"
    >
      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: 8,
        }}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-black"
      >
        {number}
      </motion.div>

      <div>
        <h3 className="text-[18px] font-bold text-[#242424] md:text-sm">
          {title}
        </h3>

        <p className="mt-2 text-base leading-8 text-[#111] md:text-[22px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default HowWeWorkStep;