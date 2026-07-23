"use client";

import { motion } from "framer-motion";
import { Send, Phone, Flag,  User } from "lucide-react";
import Link from "next/link";
import Navbar from "./layout/Navbar";

interface PageHeaderProps {
  title: string;
  crumb: string;
  backgroundImage?: string;
  svgWidth?: string | number;
}

const PageHeader = ({
  title,
  crumb,
  backgroundImage = "/driver-img.png",
  svgWidth = "235"
}: PageHeaderProps) => {
  const [firstWord, ...restWords] = title.split(" ");

  return (
    <div className="flex w-full flex-col">
      {/* --- Top Dark Bar --- */}
      <div className="hidden w-full items-center justify-between bg-[#1A1A1A] px-[7%] py-2.5 text-[13px] text-white/80 sm:px-8 md:flex">
        {/* Left Side: Contact Info */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Send size={14} className="text-primary" />
            <span>info@kablux.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-primary" />
            <span>+234 916 309 7000</span>
          </div>
        </div>

        {/* Right Side: Language & Account */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 transition-colors hover:text-white">
            <Flag size={14} className="text-primary" />
            <span>English</span>
          </div>
          <div className="flex cursor-pointer items-center gap-2 transition-colors hover:text-white">
            <User size={14} className="text-primary" />
            <span>Kablux</span>
          </div>
        </div>
      </div>

      {/* --- Cream Background Wrapper for Navbar --- */}
      <div className="relative z-50 flex w-full items-center justify-center bg-tertiary py-4">
  <Navbar isAbsolute={false} />
      </div>
    <section
      className="relative w-full overflow-hidden bg-[#141414] bg-center bg-cover bg-no-repeat py-16 md:py-24"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="absolute inset-0 bg-[#141414]/80" />

      <div className="maxContainer relative px-5">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-poppins text-[40px] font-bold leading-none tracking-[-0.03em] md:text-[56px]"
        >
          <span className="text-primary">{firstWord}</span>{" "}
          <span className="text-white">{restWords.join(" ")}</span>
        </motion.h1>

        <motion.svg
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          width={svgWidth}
          height="10"
          viewBox="0 0 235 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-4 text-white" 
        >
          <path
            d="M1 1.5 H35 L40 7.5 L45 1.5 H235"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-5 font-poppins sm:text-sm text-white/70"
        >
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary">{crumb}</span>
        </motion.nav>
      </div>
    </section></div>
  );
};

export default PageHeader;