import { Car } from '@/lib/data';
import { motion } from 'framer-motion';
import { Settings2, Snowflake, Link } from 'lucide-react';
import React from 'react'

export const CarCard = ({ car }: { car: Car }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-[24px] p-4 shadow-sm border border-gray-100 flex flex-col"
    >
      <div className="relative w-full h-[200px] rounded-[16px] overflow-hidden bg-gray-100 mb-4">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="px-2 pb-2 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-1">
          <h4 className="sm:text-[18px] font-bold text-gray-900">{car.name}</h4>
          <div className="text-right">
            <span className="text-[#ffbd11] font-bold sm:text-[18px]">
              {car.currency}{car.price}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <p className=" text-gray-400 capitalize">{car.type}</p>
          <p className="text-[12px] text-gray-400 uppercase tracking-wide">
            per day
          </p>
        </div>

        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-2 text-gray-500 sm:text-[18px]">
            <Settings2 size={16} />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 sm:text-[18px]">
            <Snowflake size={16} />
            <span>{car.ac ? "Air Conditioner" : "No AC"}</span>
          </div>
        </div>

        {/* <Link href={`/ride/${car.slug}`} className="mt-auto block w-full"> */}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-2.5 rounded-lg bg-[#ffbd11] text-black font-semibold transition-shadow hover:shadow-lg"
          >
            View Details
          </motion.button>
        {/* </Link> */}
      </div>
    </motion.div>
  );
};
