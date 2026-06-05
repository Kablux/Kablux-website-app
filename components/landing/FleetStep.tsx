import { IconType } from "react-icons";

interface FleetStepProps {
  icon: IconType;
  title: string;
  description: string;
}

const FleetStep = ({ icon: Icon, title, description }: FleetStepProps) => {
  return (
    <article className="flex z-10 md:max-w-[624px] gap-4 rounded-[20px] bg-white px-5 py-6 shadow-lg text-start flex-wrap sm:flex-nowrap">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f5f5f5]">
        <Icon size={20} className="text-[#FFBE18]" />
      </div>

      <div>
        <h4 className="text-[18px] font-bold text-[#111111]">{title}</h4>

        <p className="mt-2 sm:text-[18px] leading-8 text-[#555555]">
          {description}
        </p>
      </div>
    </article>
  );
};

export default FleetStep;
