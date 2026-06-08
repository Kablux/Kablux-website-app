"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Settings2, Snowflake, ArrowRight } from "lucide-react";
import { carCategories, availableCars, Car } from "@/lib/data";
import { CarCard } from "./CarCard";

const TopCategories = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCars =
    activeTab === "All"
      ? availableCars
      : availableCars.filter((car) => car.category === activeTab);

const heroCar =
  activeTab === "All"
    ? availableCars[0]
    : availableCars.find((car) => car.category === activeTab) ||
      availableCars[0];
  return (
    <section className="w-full">
      <div className="bg-[#121824] pt-16 pb-32 relative">
        <div className="maxContainer sm:px-8 px-5 ">
          {/* Header & Tabs */}
          <div className="flex flex-col items-center">
            <div className="inline-block relative mb-8">
              <h2 className="text-white text-sm font-bold tracking-widest uppercase">
                Top Categories
              </h2>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#ffbd11]" />
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-6 relative z-10">
              {carCategories.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative pb-2 text-base font-medium transition-colors duration-300 ${
                    activeTab === tab ? "text-white" : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ffbd11]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

         {/*  Hero Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 relative w-full rounded-[24px] border border-white/30 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
            
            {/* UPDATED IMAGE URL HERE */}
            <img
              src={heroCar.image}
              alt={heroCar.name}
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-start p-8 md:p-16">
              <h3 className="text-white text-4xl md:text-6xl font-serif font-bold italic mb-6">
                {heroCar.name}
              </h3>
              <button className="border-2 border-[#ffbd11] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#ffbd11]/10 transition-colors backdrop-blur-sm">
                Book Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-[#f8f9fa] pt-24 pb-20 sm:px-8 px-5">
        <div className="maxContainer sm:px-8 px-5 ">
          <div className="flex justify-between items-end mb-10">
            <h3 className="text-sm sm:text-md font-bold text-gray-700">
              Available Cars
            </h3>
            <Link 
              href="/cars" 
              className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-black transition-colors"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State if filter yields no results */}
          {filteredCars.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-center py-20 text-gray-500"
            >
              No cars currently available in this category.
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;

