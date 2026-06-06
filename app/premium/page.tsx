// import Navbar from "@/components/layout/Navbar";
import PremiumHero from "@/components/Premium/Hero";
import HowWeWork from "@/components/Premium/HowWeWork";
import HowPlatformWorks from "@/components/Premium/HowPlatformWorks";
import DownloadApp from "@/components/Premium/DownloadApp";
export default function Premium() {
  return (
    <main className="flex min-h-screen flex-col font-inter">
      {/* <Navbar /> */}
      <PremiumHero />
      <HowWeWork />
      <HowPlatformWorks/>
      <DownloadApp/>
    </main>
  );
}
