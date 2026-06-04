import { luxuryRideData } from "@/lib/data";
import SectionTag from "../common/SectionTag";
import FeatureBlock from "./FeatureBlock";

const LuxuryRide = () => {
  return (
    <section className=" bg-tertiary py-24 text-center md:py-32">
      <div className="maxContainer px-5">
        <SectionTag>Services</SectionTag>

        <h2 className="mt-14 text-5xl text-[#002404] md:text-[72px]">
         Luxury Rides, Fair Earnings
        </h2>

        <p className="mx-auto mt-8 max-w-3xl font-sans sm:leading-8 text-grey sm:text-[22px]">
          We’re building a better ride-hailing experience for everyone whether you're 
catching a quick trip or earning on your own schedule. 
        </p>

         <div className="mt-20 space-y-20">
        {luxuryRideData.map((item) => (
          <FeatureBlock
            key={item.title}
            {...(item as Parameters<typeof FeatureBlock>[0])}
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default LuxuryRide;
