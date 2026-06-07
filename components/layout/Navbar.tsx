"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/common/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Corporate Account", href: "/corporate" },
  { label: "Book a Premium Ride", href: "/premium" },
  { label: "Become a Fleet Owner", href: "/fleet" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-50 pt-6 md:pt-8">
      <div className="maxContainer sm:px-8 px-[7%]">
        <div className="flex items-center justify-between">
          {/* Desktop Nav */}

          <div className="hidden md:flex items-center justify-between w-full rounded-[18px] bg-white px-4 py-3 shadow-sm">
            {/* Logo */}

            <div className="flex flex-col justify-between">
              <div>
                <Image
                  src="/kablux-logo.png"
                  alt="Kablux Logo"
                  width={150}
                  height={40}
                  className="h-auto w-[130px] md:w-[150px]"
                  priority
                />
              </div>
            </div>

            {/* Links */}

            <nav className="flex items-center gap-1 font-sans">
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`rounded-xl px-4 py-2 text-[14px] transition-all duration-200 ${
                    index === 0
                      ? "bg-primary text-black font-medium"
                      : "text-[#5a5a5a] hover:bg-[#FFF3CC]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <button className="flex items-center gap-1 rounded-xl px-4 py-2 text-[14px] text-[#5a5a5a] hover:bg-[#FFF3CC]">
                Company
                <ChevronDown size={14} />
              </button>
            </nav>

            {/* CTA */}

            <Button
              href="/waitlist"
              className="rounded-xl px-5 py-3 text-[13px] font-semibold"
            >
              Get Early Access
            </Button>
          </div>

          {/* Mobile Header */}

          <div className="flex w-full items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm md:hidden">
            <Image
              src="/kablux-logo.png"
              alt="Kablux Logo"
              width={150}
              height={30}
              className="h-auto w-[130px] md:w-[150px]"
              priority
            />

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-black"
            >
              {mobileOpen ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="mt-3 rounded-2xl bg-white p-4 shadow-lg md:hidden"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded-xl px-4 py-3 text-sm text-[#444]"
                  >
                    {link.label}
                  </Link>
                ))}

                <button className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-[#444]">
                  Company
                  <ChevronDown size={16} />
                </button>

                <Button href="/waitlist" className="mt-2 w-full justify-center">
                  Get Early Access
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
