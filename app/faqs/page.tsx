import FAQSection from "@/components/faqs/FAQSection";
import PageHeader from "@/components/PageHeader";

export default function Faqs() {
  return (
    <main className="flex min-h-screen flex-col font-inter">
      <PageHeader title={"Faqs"} crumb={"Faqs"} svgWidth={100} backgroundImage="/about-bg.png"/>
      <FAQSection />
    </main>
  );
}