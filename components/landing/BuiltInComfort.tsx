import { fleetSteps, safetyFeatures, services } from "@/lib/data";
import SectionTag from "../common/SectionTag";
import Image from "next/image";
import SafetyCard from "./SafetyCard";
import FleetStep from "./FleetStep";

const BuiltInComfort = () => {
  return (
    <section className=" bg-tertiary py-24 text-center md:py-32">
      <div className="maxContainer px-5">
        <SectionTag>Services</SectionTag>

        <h2 className="mt-14 text-5xl text-[#002404] md:text-[72px]">
          Built With Comfort in Mind
        </h2>

        <p className="mx-auto mt-8 max-w-[824px] font-sans sm:leading-8 text-grey sm:text-[22px]">
          From background-checked drivers to real-time trip tracking and 24/7
          support, KabLux is designed to keep every ride smooth, secure, and
          worry-free.
        </p>

        <div className="mt-16 grid gap-8 ss:grid-cols-2 md:grid-cols-3">
          {safetyFeatures.map((item) => (
            <SafetyCard key={item.number} {...item} />
          ))}
        </div>
        {/* Fleet Section */}

        <div className="mt-24">
          <h3 className="text-sm font-bold text-[#111111] md:text-lg">
            Fleet Services
          </h3>

          <p className="mx-auto mt-8 max-w-[624px] font-sans font-medium sm:text-[18px]">
            With Kablux, hiring a luxury car has never been easier. Our
            streamlined process makes it simple to book and confirm your vehicle
            online.
          </p>

          <div className="relative mt-12 md:flex md:justify-end">
            {/* Card Stack */}

            <div className="md:absolute md:left-0 md:top-1/2 mb-12 md:z-20 flex md:-translate-y-1/2 flex-col gap-4">
              {fleetSteps.map((step) => (
                <FleetStep key={step.title} {...step} />
              ))}
            </div>

            {/* Image Container */}

            <div className="md:ml-[220px] w-full md:max-w-[850px] rounded-[24px] border-4 border-primary p-8">
              <Image
                src="/kablux_car.png"
                alt="Kablux Fleet Vehicle"
                width={800}
                height={500}
                className="mx-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltInComfort;
