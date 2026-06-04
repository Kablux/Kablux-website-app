import { services } from "@/lib/data";
import SectionTag from "../common/SectionTag";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="px-5 bg-tertiary py-24 text-center md:py-32">
      <div className="maxContainer mx-auto">
        <SectionTag>Services</SectionTag>

        <h2 className="mt-14 text-5xl tracking-[-0.04em] text-[#002404] md:text-[72px]">
          Mobility, Comfort
        </h2>

        <p className="mx-auto mt-8 max-w-3xl sm:leading-9 text-grey sm:text-[22px]">
          Beat the Hustle, Keep the Comfort. Whether you’re heading to a high-stakes meeting or returning home after a long day, Kablux ensures that while the city moves fast, you move with grace, ease, and absolute comfort.
        </p>

        <div className="mt-16 grid gap-8 lg:gap-12 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
