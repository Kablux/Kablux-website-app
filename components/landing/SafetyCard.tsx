interface SafetyCardProps {
  number: string;
  title: string;
  description: string;
}

const SafetyCard = ({ number, title, description }: SafetyCardProps) => {
  return (
    <article className="rounded-[20px] bg-white p-8 shadow-lg text-left">
      <div className="text-lg font-semibold text-[#f4c84f]">{number}</div>

      <h3 className="mt-4 text-[18px] font-semibold text-[#171717] md:text-sm">
        {title}
      </h3>

      <p className="mt-4 sm:text-[18px] font-sans text-grey">
        {description}
      </p>
    </article>
  );
};

export default SafetyCard;
