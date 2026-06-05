import Image from "next/image";
interface FeatureBlockProps {
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
  iconColor: string;
  features: {
    icon: React.ElementType;
    text: string;
  }[];
}

const FeatureBlock = ({
  title,
  description,
  image,
  imagePosition,
  iconColor,
  features,
}: FeatureBlockProps) => {
  const ImageCard = (
    <div className="relative rounded-[28px] bg-white p-2 shadow-lg">
    <Image
  src="/sun-mark.svg"
  alt="svg"
  aria-hidden="true"
  width={84}
  height={84}
  className="absolute left-10 top-10 z-10"
/>

      <Image
        src={image}
        alt={title}
        width={700}
        height={700}
        className="mx-auto w-full max-w-[620px]"
      />
    </div>
  );

  const Content = (
    <div className="text-start">
      <h3 className="text-[28px] font-bold text-primary md:text-[36px]">
        {title}
      </h3>

      <p className="mt-6 sm:text-[22px] font-sans leading-8 text-grey">
        {description}
      </p>

      <ul className="mt-8 space-y-4">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <li
              key={index}
              className="flex items-start gap-4 sm:text-[22px] font-sans text-grey"
            >
              <Icon
                size={20}
                color={iconColor}
                className="mt-1 shrink-0"
              />

              <span>{item.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div
      className={`grid gap-12 ${
        imagePosition === "left"
          ? "lg:grid-cols-[1.5fr_1.2fr]"
          : "lg:grid-cols-[1.2fr_1.5fr]"
      }`}
    >
      {imagePosition === "left" ? (
        <>
          {ImageCard}
          {Content}
        </>
      ) : (
        <>
          {Content}
          {ImageCard}
        </>
      )}
    </div>
  );
};

export default FeatureBlock;