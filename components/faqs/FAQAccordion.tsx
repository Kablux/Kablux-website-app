"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQCategory } from "@/lib/data";

interface FAQAccordionProps {
  categories: FAQCategory[];
}

export default function FAQAccordion({
  categories,
}: FAQAccordionProps) {
  const [openKey, setOpenKey] = useState("General-0");

  return (
    <div className="mx-auto mt-8 sm:mt-16 max-w-5xl">
      {categories.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-2xl bg-white py-10 text-center shadow-sm"
        >
          <p className="text-black/60">
            No questions found.
          </p>
        </motion.div>
      ) : (
        categories.map((category, categoryIndex) => (
          <motion.section
            key={category.label}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: categoryIndex * 0.08,
            }}
            className="mb-10"
          >
            {/* Category Heading */}
            <h3 className="mb-4 sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FFBE18]">
              {category.label}
            </h3>

            {/* Questions */}
            <div className="space-y-3">
              {category.items.map((item, index) => {
                const key = `${category.label}-${index}`;
                const isOpen = openKey === key;

                return (
                  <motion.div
                    key={key}
                    layout
                    transition={{
                      layout: {
                        duration: 0.3,
                      },
                    }}
                    className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_35px_-25px_rgba(0,0,0,0.25)] transition-all duration-300 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.18)]"
                  >
                    <button
                      onClick={() =>
                        setOpenKey(isOpen ? "" : key)
                      }
                      className="flex w-full items-center justify-between px-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-poppins text-[15px] font-semibold text-[#141414]">
                        {item.question}
                      </span>

                      <motion.div
                        animate={{
                          rotate: isOpen ? 180 : 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 22,
                        }}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF8E8]"
                      >
                        <ChevronDown
                          size={16}
                          className="text-[#141414]"
                        />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{
                            opacity: 0,
                            height: 0,
                          }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                          }}
                          transition={{
                            duration: 0.28,
                            ease: "easeInOut",
                          }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-[#EFE7D7] px-6 py-5">
                            <p className="leading-7 text-black/60">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        ))
      )}
    </div>
  );
}