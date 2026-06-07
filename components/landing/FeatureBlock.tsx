"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface FeatureBlockProps {
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
  iconColor: string;
  features: {
    icon: React.ElementType;
    text: string;
  }[];
}

const FeatureBlock = ({
  title,
  description,
  image,
  imagePosition,
  iconColor,
  features,
}: FeatureBlockProps) => {
  const imageInitialX = imagePosition === "left" ? -40 : 40;
  const contentInitialX = imagePosition === "left" ? 40 : -40;

  const ImageCard = (
    <motion.div
      initial={{ opacity: 0, x: imageInitialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative rounded-[28px] bg-white p-2 shadow-lg"
    >
      <Image
        src="/sun-mark.svg"
        alt="svg"
        aria-hidden="true"
        width={84}
        height={84}
        className="absolute left-10 top-10 z-10"
      />
      <Image
        src={image}
        alt={title}
        width={700}
        height={700}
        className="mx-auto w-full max-w-[620px]"
      />
    </motion.div>
  );

  const Content = (
    <motion.div
      initial={{ opacity: 0, x: contentInitialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className="text-start flex flex-col justify-center"
    >
      <h3 className="text-[28px] font-bold text-primary md:text-[36px]">
        {title}
      </h3>

      <p className="mt-6 sm:text-[22px] font-sans leading-8 text-grey">
        {description}
      </p>

      <ul className="mt-8 space-y-4">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }} 
              className="flex items-start gap-4 sm:text-[22px] font-sans text-grey"
            >
              <Icon
                size={20}
                color={iconColor}
                className="mt-1 shrink-0"
              />
              <span>{item.text}</span>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );

  return (
    <div
      className={`grid gap-12 lg:items-center ${
        imagePosition === "left"
          ? "lg:grid-cols-[1.5fr_1.2fr]"
          : "lg:grid-cols-[1.2fr_1.5fr]"
      }`}
    >
      {imagePosition === "left" ? (
        <>
          {ImageCard}
          {Content}
        </>
      ) : (
        <>
          {Content}
          {ImageCard}
        </>
      )}
    </div>
  );
};

export default FeatureBlock;