/* eslint-disable @next/next/no-img-element */
"use client";

import { Checklist as ChecklistType } from "@/lib/api";

interface ChecklistProps {
  checklist: ChecklistType[];
  lang: "en" | "bn";
}

export default function Checklist({ checklist, lang }: ChecklistProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {lang === "en" ? "What's Included" : "যা যা পাবেন"}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {lang === "en"
              ? "Everything you need to succeed in your IELTS journey is included in this comprehensive course package."
              : "আপনার IELTS যাত্রায় সফল হওয়ার জন্য প্রয়োজনীয় সবকিছু এই ব্যাপক কোর্স প্যাকেজে অন্তর্ভুক্ত রয়েছে।"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {checklist.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <img src={item.icon} className="w-6 h-6" alt={item.text} />

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.text}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-[#022335] via-[#022335] to-[#010a11] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {lang === "en"
                ? "Ready to Start Your IELTS Journey?"
                : "আপনার IELTS যাত্রা শুরু করতে প্রস্তুত?"}
            </h3>
            <p className="text-lg opacity-90 mb-6">
              {lang === "en"
                ? "Join thousands of successful students who achieved their target band scores with our comprehensive course."
                : "হাজার হাজার সফল শিক্ষার্থীর সাথে যোগ দিন যারা আমাদের ব্যাপক কোর্সের মাধ্যমে তাদের লক্ষ্য ব্যান্ড স্কোর অর্জন করেছেন।"}
            </p>
            <button className="bg-[#1eaa55] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#1eaa55]/80 transition-colors">
              {lang === "en" ? "Enroll Now - ৳3850" : "এখনই ভর্তি হন - ৳৩৮৫০"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
