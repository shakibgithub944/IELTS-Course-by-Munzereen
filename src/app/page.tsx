"use client";

import { useState, useEffect } from "react";
import { ProductData, getProductData } from "@/lib/api";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Instructor from "@/components/Instructor";
import Features from "@/components/Features";
import LearningOutcomes from "@/components/LearningOutcomes";
import Checklist from "@/components/Checklist";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  const [data, setData] = useState<ProductData | null>(null);
  const [lang, setLang] = useState<"en" | "bn">("en");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const productData = await getProductData(lang);
        if (productData) {
          setData(productData);
        } else {
          setError("Failed to load course data");
        }
      } catch (err) {
        setError("An error occurred while loading the course data");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [lang]);

  const handleLanguageChange = (newLang: "en" | "bn") => {
    setLang(newLang);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1eaa55] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading course data...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️</div>
          <p className="text-gray-600 mb-4">
            {error || "Course data not available"}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#1eaa55] text-white px-4 py-2 rounded-md hover:bg-[#1eaa55] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Find sections by type
  const instructorSection = data.sections.find((s) => s.type === "instructors");
  const featuresSection = data.sections.find((s) => s.type === "features");
  const pointersSection = data.sections.find((s) => s.type === "pointers");
  const aboutSection = data.sections.find((s) => s.type === "about");
  const faqSection = data.sections.find((s) => s.type === "faq");

  return (
    <div className="min-h-screen bg-white">
      <Header data={data} lang={lang} onLanguageChange={handleLanguageChange} />

      <main>
        <Hero data={data} lang={lang} />

        {featuresSection && <Features section={featuresSection} lang={lang} />}

        {pointersSection && (
          <LearningOutcomes section={pointersSection} lang={lang} />
        )}

        <Checklist checklist={data.checklist} lang={lang} />

        {instructorSection && (
          <Instructor section={instructorSection} lang={lang} />
        )}
        {aboutSection &&
          aboutSection.description &&
          aboutSection.description.trim() !== "" && (
            <section className="py-16 bg-gray-50">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {aboutSection.title || aboutSection.name}
                  </h2>
                </div>
                <div
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: aboutSection.description,
                  }}
                />
              </div>
            </section>
          )}

        {faqSection && <FAQ section={faqSection} lang={lang} />}
      </main>

      <Footer lang={lang} />
    </div>
  );
}
