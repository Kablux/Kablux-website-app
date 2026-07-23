import AboutIntro from "@/components/about/AboutIntro";
import OurServices from "@/components/about/OurApproach";
import PageHeader from "@/components/PageHeader";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col font-inter">
      <PageHeader title={"About Us"} crumb={"About"} backgroundImage="/about-bg.png"/>
      <AboutIntro/>

      <OurServices/>
    </main>
  );
}