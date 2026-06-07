"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const serviceLinks = [
  { label: "For Riders", href: "/riders" },
  { label: "For Drivers", href: "/drivers" },
];

const Footer = () => {
  return (
    <footer className="bg-black py-20 text-white">
      <div className="maxContainer sm:px-8 px-5">
        <div className="flex justify-between flex-wrap gap-8 md:gap-12 w-full">
          <div className="flex flex-col justify-between gap-8 w-full md:w-1/2">
            <div className="flex justify-between flex-wrap gap-8 md:gap-12">
              {/* Logo */}

              <div className="flex flex-col justify-between">
                <div>
                  <Image
                    src="/kablux-logo.png"
                    alt="Kablux Logo"
                    width={180}
                    height={50}
                    className="h-auto w-[140px] md:w-[180px]"
                    priority
                  />
                </div>
              </div>

              {/* Company */}

              <div>
                <h3 className="text-[18px] font-semibold text-white">
                  COMPANY
                </h3>

                <div className="mt-6 space-y-4">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block text-[15px] text-[#d4a71d] transition hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <h3 className="mt-12 text-[18px] font-semibold text-white">
                  CONTACT US
                </h3>

                <div className="mt-6 space-y-3 text-[15px] text-[#d4a71d]">
                  <p>+234 916 309 7000</p>
                  <a
                    href="mailto:info@kablux.com"
                    className="underline mt-1 text-[#d4a71d] transition hover:text-primary"
                  >
                    info@kablux.com
                  </a>
                  <p>Lekki, Lagos</p>
                </div>
              </div>

              {/* Services */}

              <div>
                <h3 className="text-[18px] font-semibold text-white">
                  SERVICES
                </h3>

                <div className="mt-6 space-y-4">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block text-[15px] text-[#d4a71d] transition hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 w-full ">
              <p className="mt-12 hidden md:block sm:text-[18px] text-[#d4a71d] lg:mt-0">
                © 2026 KabLux™ Limited. All rights reserved.
              </p>
              {/* Socials */}

              <div className="mt-4 flex gap-4">
                <Link
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#393939] transition hover:border-primary hover:text-primary"
                >
                  <FaLinkedinIn size={18} />
                </Link>

                <Link
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#393939] transition hover:border-primary hover:text-primary"
                >
                  <FaInstagram size={18} />
                </Link>

                <Link
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#393939] transition hover:border-primary hover:text-primary"
                >
                  <FaXTwitter size={18} />
                </Link>
              </div>
            </div>
          </div>

          {/* Waitlist Form */}

          <div className=" w-full md:w-[40%]">
            <div className="rounded-[24px] border border-[#2a2a2a] p-5">
              <div className="rounded-[18px] bg-primary px-5 py-4 text-[18px] font-semibold text-black">
                ✦ Join the Waitlist
              </div>

              <div className="mt-5 space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-14 w-full rounded-[14px] border border-[#404040] bg-black px-5 text-white outline-none placeholder:text-[#6f6f6f]"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-14 w-full rounded-[14px] border border-[#404040] bg-black px-5 text-white outline-none placeholder:text-[#6f6f6f]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-14 w-full rounded-[14px] border border-[#404040] bg-black px-5 text-white outline-none placeholder:text-[#6f6f6f]"
                />
              </div>
            </div>

            <div className="mt-5 space-y-5">
              <textarea
                rows={4}
                placeholder="What would you be using this app as?"
                className="w-full rounded-[14px] border border-[#404040] bg-black px-5 py-4 text-white outline-none placeholder:text-[#6f6f6f]"
              />

              <button
                type="submit"
                className="h-14 w-full rounded-[14px] bg-[#8b6a0b] font-semibold text-[#d7b75a] transition hover:bg-primary hover:text-black"
              >
                Send A Request
              </button>
            </div>
            <div className="mt-12 md:hidden block md:mt-0 text-center">
              <p className="mt-12 md:hidden block sm:text-[18px] text-[#d4a71d]">
                © 2026 KabLux™ Limited. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
