"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface FAQHeroProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export default function FAQHero({
  query,
  onQueryChange,
}: FAQHeroProps) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-poppins text-sm sm:text-lg font-bold"
      >
        <span className="text-[#08215D]">
          Questions,
        </span>{" "}
        <span className="text-[#FFBE18]">
          Answered.
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mx-auto mt-4 max-w-md text-black/60"
      >
        Everything you need to know about riding,
        driving, safety and payments on Kablux.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto mt-10 flex max-w-xl items-center rounded-full bg-[#F8F1E1] px-6 py-4"
      >
        <Search
          className="mr-3 text-black/40"
          size={18}
        />

        <input
          value={query}
          onChange={(e) =>
            onQueryChange(e.target.value)
          }
          placeholder="Search questions..."
          className="w-full bg-transparent outline-none placeholder:text-black/40"
        />
      </motion.div>
    </div>
  );
}