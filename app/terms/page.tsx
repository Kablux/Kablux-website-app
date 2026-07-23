import TermsContent from "@/components/legal/TermsContent";
import PageHeader from "@/components/PageHeader";


export const metadata = {
  title: "Terms of Service | Kablux",
  description:
    "The Terms of Service governing your use of the Kablux mobile applications, website, and related services.",
};

const TermsPage = () => {
  return (
    <main className="bg-[#fff8ec]">
      <PageHeader title="Terms of Service" crumb="Terms" />
      <TermsContent />
    </main>
  );
};

export default TermsPage;
