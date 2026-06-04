import HeroBanner from "@/components/landing/HeroBanner";
import Services from "@/components/landing/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-inter">
<HeroBanner />
<Services/>
    </main>
  );
}
