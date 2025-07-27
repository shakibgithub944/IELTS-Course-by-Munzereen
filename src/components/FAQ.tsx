'use client';

import { useState } from 'react';
import { Section } from '@/lib/api';

interface FAQProps {
  section: Section;
  lang: 'en' | 'bn';
}

export default function FAQ({ section, lang }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (section.type !== 'faq' || !section.faqs) return null;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {section.title}
          </h2>
          <p className="text-lg text-gray-600">
            {lang === 'en' 
              ? 'Find answers to commonly asked questions about our IELTS course.'
              : 'আমাদের IELTS কোর্স সম্পর্কে সাধারণত জিজ্ঞাসিত প্রশ্নের উত্তর খুঁজুন।'
            }
          </p>
        </div>

        <div className="space-y-4">
          {section.faqs.map((faq, index) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none focus:bg-gray-100"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <div 
                    className="text-gray-700 leading-relaxed prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {lang === 'en' ? 'Still have questions?' : 'এখনও প্রশ্ন আছে?'}
            </h3>
            <p className="text-gray-600 mb-4">
              {lang === 'en' 
                ? 'Our support team is here to help you with any additional questions.'
                : 'আমাদের সাপোর্ট টিম আপনার যেকোনো অতিরিক্ত প্রশ্নে সাহায্য করতে এখানে আছে।'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:16910"
                className="inline-flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {lang === 'en' ? 'Call 16910' : 'কল করুন ১৬৯১০'}
              </a>
              
              <a
                href="mailto:support@10minuteschool.com"
                className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {lang === 'en' ? 'Email Support' : 'ইমেইল সাপোর্ট'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

