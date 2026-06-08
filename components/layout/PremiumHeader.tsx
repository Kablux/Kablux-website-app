"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  {
    label: "Book a Ride",
    href: "/premium/book",
  },
  {
    label: "Select Rides",
    href: "/premium/rides",
  },
  {
    label: "How it Works",
    href: "#how-it-works",
  },
  {
    label: "Company",
    href: "/company",
  },
];

export default function PremiumNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black">
      <div className="maxContainer sm:px-8 px-5">
        <div className="flex h-20 items-center justify-between font-poppins">
          {/* Logo */}

          <Link href="/" className="shrink-0">
            <Image
              src="/kablux-logo.png"
              alt="Kablux"
              width={140}
              height={40}
              className="h-auto w-[120px] md:w-[140px]"
              priority
            />
          </Link>

          {/* Desktop Nav */}

          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="sm:text-[18px] font-medium text-white/80 transition-colors duration-300 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}

          <div className="hidden items-center gap-5 lg:flex">
            <Link
              href="/signin"
              className=" font-medium text-white/80 transition-colors hover:text-primary"
            >
              Sign In
            </Link>

            <motion.div
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <Link
                href="/signup"
                className="rounded-lg bg-primary px-6 py-3 font-semibold text-black shadow-lg transition-all"
              >
                Sign Up
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setOpen(!open)}
            className="text-white lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
          }}
          className="border-t border-white/10 bg-black lg:hidden"
        >
          <div className="maxContainer sm:px-8 px-5 py-6">
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/80"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-3">
              <Link href="/signin" className="text-white/80">
                Sign In
              </Link>

              <Link
                href="/signup"
                className="rounded-lg bg-primary px-5 py-3 text-center font-semibold text-black"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
