'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ProductData } from '@/lib/api';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Instructor from '@/components/Instructor';
import Features from '@/components/Features';
import LearningOutcomes from '@/components/LearningOutcomes';
import Checklist from '@/components/Checklist';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

interface ClientPageProps {
  initialData: ProductData;
  initialLang: 'en' | 'bn';
}

export default function ClientPage({ initialData, initialLang }: ClientPageProps) {
  const [data] = useState<ProductData>(initialData);
  const [lang, setLang] = useState<'en' | 'bn'>(initialLang);
  const router = useRouter();

  const handleLanguageChange = (newLang: 'en' | 'bn') => {
    setLang(newLang);
    router.push(`/${newLang}`);
  };

  // Find sections by type
  const instructorSection = data.sections.find(s => s.type === 'instructor');
  const featuresSection = data.sections.find(s => s.type === 'features');
  const pointersSection = data.sections.find(s => s.type === 'pointers');
  const aboutSection = data.sections.find(s => s.type === 'about');
  const faqSection = data.sections.find(s => s.type === 'faq');

  return (
    <div className="min-h-screen bg-white">
      <Header data={data} lang={lang} onLanguageChange={handleLanguageChange} />
      
      <main>
        <Hero data={data} lang={lang} />
        
        {instructorSection && (
          <Instructor section={instructorSection} lang={lang} />
        )}
        
        {featuresSection && (
          <Features section={featuresSection} lang={lang} />
        )}
        
        {pointersSection && (
          <LearningOutcomes section={pointersSection} lang={lang} />
        )}
        
        <Checklist checklist={data.checklist} lang={lang} />
        
        {aboutSection && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {aboutSection.title}
                </h2>
              </div>
              <div 
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: aboutSection.details || '' }}
              />
            </div>
          </section>
        )}
        
        {faqSection && (
          <FAQ section={faqSection} lang={lang} />
        )}
      </main>
      
      <Footer lang={lang} />
    </div>
  );
}

