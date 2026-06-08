"use client";
import { motion, Variants } from "framer-motion"; 

interface SafetyCardProps {
  number: string;
  title: string;
  description: string;
  index?: number;
}

const SafetyCard = ({ number, title, description, index = 0 }: SafetyCardProps) => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 25,
      },
    },
  };

  return (
    <motion.article 
      variants={cardVariants}
      className="rounded-[20px] bg-white p-8 shadow-lg text-left border border-gray-100 hover:border-gray-200 transition-colors duration-300"
    >
      <div className="text-lg font-semibold text-[#f4c84f]">{number}</div>

      <h3 className="mt-4 text-[18px] font-semibold text-[#171717] md:text-sm">
        {title}
      </h3>

      <p className="mt-4 sm:text-[18px] font-sans text-grey leading-relaxed">
        {description}
      </p>
    </motion.article>
  );
};

export default SafetyCard;