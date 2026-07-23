import PrivacyContent from "@/components/legal/PrivacyContent";
import PageHeader from "@/components/PageHeader";


export const metadata = {
  title: "Privacy Policy | Kablux",
  description:
    "How Kablux collects, uses, stores, and protects your personal data across our mobile applications, website, and services.",
};

const PrivacyPolicyPage = () => {
  return (
    <main className="bg-[#fff8ec]">
      <PageHeader title="Privacy Policy" crumb="Privacy Policy" />
      <PrivacyContent />
    </main>
  );
};

export default PrivacyPolicyPage;
