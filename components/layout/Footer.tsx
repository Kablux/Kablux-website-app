"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { useEffect, useState } from "react";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const serviceLinks = [
  {
    label: "For Riders",
    isAndroid:
      "https://play.google.com/store/apps/details?id=com.crashingout.kablux",
    isIos: "https://apps.apple.com/ng/app/kablux-rider/id6759964134",
    desktopFallback:
      "https://play.google.com/store/apps/details?id=com.crashingout.kablux",
  },
  {
    label: "For Drivers",
    isAndroid:
      "https://play.google.com/store/apps/details?id=com.crashingout.kabluxdrive",
    isIos: "https://apps.apple.com/ng/app/kablux-driver/id6759971863",
    desktopFallback:
      "https://play.google.com/store/apps/details?id=com.crashingout.kablux",
  },
];

const DynamicStoreLink = ({
  label,
  isAndroid,
  isIos,
  desktopFallback,
}: any) => {
  const [targetUrl, setTargetUrl] = useState(desktopFallback);

  useEffect(() => {
    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setTargetUrl(isIos); // User is on an Apple device
    } else if (/android/i.test(userAgent)) {
      setTargetUrl(isAndroid); // User is on an Android device
    }
  }, [isAndroid, isIos, desktopFallback]);

  return (
    <a
      href={targetUrl}
      target={targetUrl !== desktopFallback ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="block text-[15px] text-[#d4a71d] transition hover:text-primary"
    >
      {label}
    </a>
  );
};
const Footer = () => {
  return (
    <footer className="bg-black py-20 text-white">
      <div className="maxContainer sm:px-8 px-5">
        <div className="flex justify-between flex-wrap gap-8 md:gap-12 w-full">
          <div className="flex flex-col justify-between gap-8 w-full ">
            <div className="flex justify-between flex-wrap gap-8 md:gap-12">
              {/* Logo */}

              <div className="flex flex-col justify-between">
                <div>
                  <Image
                    src="/logo.svg"
                    alt="Kablux Logo"
                    aria-hidden="true"
                    width={180}
                    height={50}
                    // className="w-[140px] md:w-[180px]"
                    // priority
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
              </div>

              {/* Services */}

              <div>
                <h3 className="text-[18px] font-semibold text-white">
                  SERVICES
                </h3>

                <div className="mt-6 space-y-4">
                  {serviceLinks.map((link) => (
                    <DynamicStoreLink
                      key={link.label}
                      label={link.label}
                      isAndroid={link.isAndroid}
                      isIos={link.isIos}
                      desktopFallback={link.desktopFallback}
                    />
                  ))}
                </div>
              </div>

              {/*Contact */}

              <div>
                <h3 className="text-[18px] font-semibold text-white">
                  CONTACT US
                </h3>

                <div className="mt-6 space-y-3 text-[15px] text-[#d4a71d]">
                  <p>+234 907 550 2400</p>
                  <a
                    href="mailto:hello@kabluxe.com"
                    className="underline mt-1 text-[#d4a71d] transition hover:text-primary"
                  >
                    hello@kabluxe.com
                  </a>
                  <p>Lekki, Lagos</p>
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
                  href="https://www.linkedin.com/company/kablux-nigeria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Kablux on LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#393939] transition hover:border-primary hover:text-primary"
                >
                  <FaLinkedinIn size={18} />
                </Link>

                <Link
                  href="https://www.facebook.com/share/19LLs8Lgjt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Kablux on Facebook"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#393939] transition hover:border-primary hover:text-primary focus:border-primary focus:text-primary focus:outline-none"
                >
                  <FaFacebookF size={18} />
                </Link>

                <Link
                  href="https://www.instagram.com/kablux_nigeria?igsh=MnU0YnlwODlmbXk0"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#393939] transition hover:border-primary hover:text-primary"
                >
                  <FaInstagram size={18} />
                </Link>

                <Link
                  href="https://www.tiktok.com/@kablux.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Kablux on TikTok"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#393939] transition hover:border-primary hover:text-primary focus:border-primary focus:text-primary focus:outline-none"
                >
                  <FaTiktok size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
