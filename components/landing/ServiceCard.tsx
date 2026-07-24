"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion"; // Imported Variants
import Button from "@/components/common/Button";
import { useState, useEffect } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  href: string;
  isAppDownload?: boolean;
  iosLink?: string;
  androidLink?: string;
}

const ServiceCard = ({
  title,
  description,
  image,
  buttonText,
  href,
  isAppDownload,
  iosLink,
  androidLink,
}: ServiceCardProps) => {
  const [targetUrl, setTargetUrl] = useState(href);

  useEffect(() => {
    if (isAppDownload) {
      const userAgent =
        navigator.userAgent || navigator.vendor || (window as any).opera;
      // Check for iOS (iPhone, iPad, iPod)
      if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        if (iosLink) setTargetUrl(iosLink);
      } else if (/android/i.test(userAgent)) {
        if (androidLink) setTargetUrl(androidLink);
      }
    }
  }, [isAppDownload, iosLink, androidLink, href]);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="relative overflow-hidden rounded-[20px] bg-white py-8 text-start px-6 shadow-lg border border-gray-50"
    >
      <div className="absolute right-0 top-0 h-[74px] w-[74px] bg-gradient-to-b from-[#fde999] to-white [clip-path:polygon(100%_0,0_0,100%_100%)]" />
      <div className="absolute right-7 top-4 h-[44px] w-[44px] bg-gradient-to-b from-[#fde999] to-white [clip-path:polygon(100%_0,0_0,100%_100%)]" />

      <h3 className="text-sm font-semibold">{title}</h3>

      <p className="mt-4 font-sans sm:text-[18px] text-grey">{description}</p>

      <div className="mt-6">
        <Button
          href={targetUrl}
          variant="secondary"
          className="w-full border border-grey py-[7px]"
        >
          {buttonText}
        </Button>
      </div>

      <div className="mt-6 rounded-3xl bg-[#f3f3f3] p-5">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="h-[230px] w-full rounded-2xl object-contain"
        />
      </div>
    </motion.article>
  );
};

export default ServiceCard;
