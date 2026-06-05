import BuiltInComfort from "@/components/landing/BuiltInComfort";
import DownloadApp from "@/components/landing/DownloadApp";
import HeroBanner from "@/components/landing/HeroBanner";
import LuxuryRide from "@/components/landing/LuxuryRide";
import Services from "@/components/landing/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-inter">
      <HeroBanner />
      <Services />
      <LuxuryRide />
      <BuiltInComfort />
      <DownloadApp/>
    </main>
  );
}
