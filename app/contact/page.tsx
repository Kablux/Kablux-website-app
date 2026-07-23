import AboutIntro from "@/components/about/AboutIntro";
import OurServices from "@/components/about/OurApproach";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMapForm from "@/components/contact/ContactMapForm";
import Navbar from "@/components/layout/Navbar";
import PageHeader from "@/components/PageHeader";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col font-inter">
      <PageHeader title={"Contact Us"} crumb={"Contact Us"} backgroundImage="/contact-banner.jpg"/>
      <ContactInfo/>
      <ContactMapForm/>
    </main>
  );
}