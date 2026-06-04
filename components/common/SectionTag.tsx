interface SectionTagProps {
  children: React.ReactNode;
}

const SectionTag = ({ children }: SectionTagProps) => {
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[330px]"
        viewBox="0 0 327 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.0435557 51.6135C-4.26945 49.4192 313.168 51.6135 313.168 51.6135C313.168 51.6135 295.26 67.8927 255.899 70.3684C255.899 70.3684 252.336 95.3123 225.483 99.1383C198.667 102.946 96.6549 64.0855 76.9839 66.5799C57.294 69.0743 64.4574 84.1156 0.0435557 51.6135ZM13.1701 47.7875C8.85709 49.9819 326.294 47.7875 326.294 47.7875C326.294 47.7875 308.386 31.5083 269.025 29.0327C269.025 29.0327 265.462 4.08878 238.609 0.262793C211.793 -3.54444 109.781 35.3156 90.1104 32.8212C70.4206 30.3268 77.5839 15.2854 13.1701 47.7875Z"
          fill="#C3D2FF"
        />
      </svg>

      {/* Yellow Tag */}
      <div className="relative z-10 flex h-[64px] min-w-[170px] items-center justify-center bg-[#FFBE18] px-8 sm:text-[22px] text-[#171717] shadow-sm">
        {children}
      </div>
    </div>
  );
};

export default SectionTag;
