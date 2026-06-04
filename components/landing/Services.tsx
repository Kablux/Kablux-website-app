import { services } from "@/lib/data";
import SectionTag from "../common/SectionTag";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className=" bg-tertiary py-24 text-center md:py-32">
      <div className="maxContainer px-5">
        <SectionTag>Services</SectionTag>

        <h2 className="mt-14 text-5xl text-[#002404] md:text-[72px]">
          Mobility, Comfort
        </h2>

        <p className="mx-auto mt-8 max-w-[824px] font-sans sm:leading-8 text-grey sm:text-[22px]">
          Beat the Hustle, Keep the Comfort. Whether you’re heading to a high-stakes meeting or returning home after a long day, Kablux ensures that while the city moves fast, you move with grace, ease, and absolute comfort.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
