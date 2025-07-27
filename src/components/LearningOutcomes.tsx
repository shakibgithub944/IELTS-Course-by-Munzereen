'use client';

import { Section } from '@/lib/api';

interface LearningOutcomesProps {
  section: Section;
  lang: 'en' | 'bn';
}

export default function LearningOutcomes({ section, lang }: LearningOutcomesProps) {
  if (section.type !== 'pointers' || !section.pointers) return null;

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {section.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {lang === 'en' 
              ? 'By completing this course, you will gain comprehensive skills and knowledge to excel in your IELTS examination.'
              : 'এই কোর্সটি সম্পন্ন করে, আপনি আপনার IELTS পরীক্ষায় উৎকর্ষতার জন্য ব্যাপক দক্ষতা এবং জ্ঞান অর্জন করবেন।'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {section.pointers.map((pointer, index) => (
            <div key={index} className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              
              <div className="flex-1">
                <p className="text-lg text-gray-800 leading-relaxed group-hover:text-gray-900 transition-colors">
                  {pointer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {lang === 'en' ? 'Additional Benefits' : 'অতিরিক্ত সুবিধা'}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                {lang === 'en' ? 'Lifetime Access' : 'লাইফটাইম এক্সেস'}
              </h4>
              <p className="text-gray-600 text-sm">
                {lang === 'en' 
                  ? 'Access course materials anytime, anywhere'
                  : 'যেকোনো সময়, যেকোনো জায়গায় কোর্স উপকরণ অ্যাক্সেস করুন'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                {lang === 'en' ? 'Expert Support' : 'বিশেষজ্ঞ সহায়তা'}
              </h4>
              <p className="text-gray-600 text-sm">
                {lang === 'en' 
                  ? 'Get help from experienced IELTS instructors'
                  : 'অভিজ্ঞ IELTS প্রশিক্ষকদের কাছ থেকে সাহায্য নিন'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                {lang === 'en' ? 'Certificate' : 'সার্টিফিকেট'}
              </h4>
              <p className="text-gray-600 text-sm">
                {lang === 'en' 
                  ? 'Receive completion certificate'
                  : 'সমাপনী সার্টিফিকেট পান'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

