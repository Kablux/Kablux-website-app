import Image from "next/image";
import Button from "../common/Button";

const DownloadApp = () => {
  return (
    <section className="bg-tertiary">
      <div className="maxContainer px-5 py-20">
        <div className="grid sm:items-end sm:grid-cols-[379px_1fr] md:grid-cols-[426px_1fr] lg:grid-cols-[504px_1fr]">
          {/* Phone Mockup */}

          <div className="relative h-full">
            {/* <div className="lg:absolute lg:-top-14 lg:left-0"> */}
            <Image
              src="/half-mobile.svg"
              alt="Kablux App"
              width={504}
              height={621}
              className="w-full sm:w-[379px] lg:w-[504px]"
              priority
            />
            {/* </div> */}
          </div>

          {/* Content */}
          <div className="mx-1 sm:mx-0">
            <div className="relative rounded-b-[32px] sm:rounded-bl-[0px] sm:rounded-r-[32px] w-full bg-black">
              <div className="px-6 py-12 text-white md:px-10 md:py-14 lg:px-20">
                <span className="uppercase">Download Our App</span>

                <h2 className="mt-2 text-sm font-bold leading-tight md:text-lg font-wrksans">
                  Download <span className="text-primary">KabLux</span> app
                </h2>

                <p className="mt-4 md:mt-6 max-w-[559px] md:text-[18px] font-poppins lg:text-[22px]">
                  We put our drivers first. With utmost Comfort to our rider,
                  instant payouts, and flexible hours, Kablux is the
                  ride-hailing and rider platform that truly works for you.
                </p>

                <div className="mt-6 md:mt-8 grid sm:flex gap-4 w-full">
                  <Button
                    href="/"
                    variant="secondary"
                    className="bg-white text-black border-0 w-full rounded-lg p-2 md:p-3"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src="/app-store.svg"
                        alt="App Store"
                        width={24}
                        height={24}
                      />

                      <div className="text-left leading-tight font-poppins">
                        <p className="text-[10px] uppercase font-medium">
                          Download on the
                        </p>
                        <p className=" font-semibold">App Store</p>
                      </div>
                    </div>
                  </Button>

                  <Button
                    href="/"
                    variant="secondary"
                    className="bg-white text-black w-full border-0 rounded-lg p-2 md:p-3"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src="/play-store.svg"
                        alt="Google Play"
                        width={24}
                        height={24}
                      />

                      <div className="text-left leading-tight font-poppins">
                        <p className="text-[10px] uppercase font-medium">
                          Get it on
                        </p>
                        <p className="font-semibold">Google Play</p>
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
