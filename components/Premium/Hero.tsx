"use client";

import Button from "@/components/common/Button";
import { CalendarDays, Clock3, ChevronDown } from "lucide-react";

const PremiumHero = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/premium-hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 maxContainer px-5 py-10 md:py-16">
        <div className="grid min-h-[700px] gap-8 md:gap-0 items-center md:grid-cols-[1.15fr_0.50fr]">
          {/* LEFT CONTENT */}

          <div>
            <div className="] rounded-[32px] flex flex-col items-center w-full text-center bg-[#AB821F]/80 p-8 text-white backdrop-blur-[3px] md:p-12">
              <h1 className="text-sm sm:text-md font-semibold sm:leading-tight md:text-[52px] max-w-[720px]">
                Honoring our Premium while driving the future.
              </h1>

              <p className="mt-5 max-w-[820px] text-base leading-8 text-white/90 md:text-[20px]">
                Celebrating 140 years since inventing the automobile,
                Mercedes-Benz welcomes you to the brand that has continuously
                shaped the way the world moves forward.
              </p>

              <div className="mt-8 flex justify-center flex-wrap sm:flex-nowrap gap-4">
                <Button className="font-semibold w-max">Explore Offers</Button>

                <Button
                  variant="secondary"
                  className="border-white max-w-max text-white hover:border-white hover:bg-white/10"
                >
                  View Inventory
                </Button>
              </div>
            </div>
          </div>

          {/* BOOKING CARD */}

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[416px] rounded-[20px] border border-white/10 bg-black/70 px-6 py-8 text-white backdrop-blur-xl">
              <h2 className="text-center text-sm font-semibold">
                Book your Ride
              </h2>

              <div className="mt-6 space-y-8">
                {/* Vehicle */}

                <div className="relative">
                  <select className="h-12 w-full appearance-none rounded-xl border border-white/20 bg-transparent px-4 outline-none">
                    <option className="text-black">KabLux Premium</option>
                    <option className="text-black">Executive Sedan</option>
                    <option className="text-black">Luxury SUV</option>
                  </select>

                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
                  />
                </div>

                {/* From */}

                <input
                  type="text"
                  placeholder="From"
                  className="h-12 w-full rounded-xl border border-white/20 bg-transparent px-4 outline-none placeholder:text-white/60"
                />

                {/* To */}

                <input
                  type="text"
                  placeholder="To"
                  className="h-12 w-full rounded-xl border border-white/20 bg-transparent px-4 outline-none placeholder:text-white/60"
                />

                {/* Date & Time */}

                {/* <div className="grid grid-cols-2 gap-3"> */}
                  <div className="relative">
                    <input
                      type="date"
                      className="h-12 w-full rounded-xl border border-white/20 bg-transparent px-4 outline-none"
                    />

                    <CalendarDays
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="time"
                      className="h-12 w-full rounded-xl border border-white/20 bg-transparent px-4 outline-none"
                    />

                    <Clock3
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    />
                  </div>
                {/* </div> */}

                <Button className="w-full py-2 justify-center font-semibold">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;
