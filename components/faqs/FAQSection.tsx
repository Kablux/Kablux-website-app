"use client";
import { useMemo, useState } from "react";
import FAQHero from "./FAQHero";
import FAQAccordion from "./FAQAccordion";
import { categories } from "@/lib/data";

export default function FAQSection() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return categories;

    const q = query.toLowerCase();

    return categories
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.question.toLowerCase().includes(q) ||
            item.answer.toLowerCase().includes(q)
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [query]);

  return (
    <section className="bg-[#FFF8E8] py-20">
      <div className="container mx-auto px-4">
        <FAQHero query={query} onQueryChange={setQuery} />

        <FAQAccordion categories={filtered} />
      </div>
    </section>
  );
}