"use client";
import { motion, Variants } from "framer-motion"; 
import { IconType } from "react-icons";

interface FleetStepProps {
  icon: IconType;
  title: string;
  description: string;
  index?: number;
}

const FleetStep = ({
  icon: Icon,
  title,
  description,
  index = 0,
}: FleetStepProps) => {
 const stepVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3, 
      ease: "easeOut", 
    },
  },
};

  return (
    <motion.article
      variants={stepVariants}
      whileHover={{ y: -4, scale: 1.01 }}
      className="flex z-10 md:max-w-[624px] gap-4 rounded-[20px] bg-white px-5 py-6 shadow-lg text-start flex-wrap sm:flex-nowrap border border-gray-50 cursor-pointer"
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f5f5f5]">
        <Icon size={20} className="text-[#FFBE18]" />
      </div>

      <div>
        <h4 className="text-[18px] font-bold text-[#111111]">{title}</h4>

        <p className="mt-2 sm:text-[18px] leading-8 text-[#555555]">
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default FleetStep;