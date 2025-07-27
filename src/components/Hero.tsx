'use client';

import { ProductData } from '@/lib/api';

interface HeroProps {
  data: ProductData;
  lang: 'en' | 'bn';
}

export default function Hero({ data, lang }: HeroProps) {
  const videoMedia = data.media.find(m => m.type === 'video');
  const imageMedia = data.media.find(m => m.type === 'image');

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                {data.title}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm opacity-90">
                  (82.6% {lang === 'en' ? 'students got their desired band score' : 'শিক্ষার্থী কাঙ্ক্ষিত ব্যান্ড স্কোর পেয়েছেন'})
                </span>
              </div>

              {/* Description */}
              <div 
                className="text-lg opacity-90 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </div>

            {/* Price and CTA */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold">৳3850</span>
                <span className="text-xl line-through opacity-60">৳6000</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                  {lang === 'en' ? '36% off' : '৩৬% ছাড়'}
                </span>
              </div>
              
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors w-full sm:w-auto">
                {data.cta_text[lang]}
              </button>
            </div>

            {/* Course Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold">60+</div>
                <div className="text-sm opacity-80">
                  {lang === 'en' ? 'Video Lessons' : 'ভিডিও লেকচার'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">10</div>
                <div className="text-sm opacity-80">
                  {lang === 'en' ? 'Mock Tests' : 'মক টেস্ট'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1</div>
                <div className="text-sm opacity-80">
                  {lang === 'en' ? 'Free Book' : 'ফ্রি বই'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">∞</div>
                <div className="text-sm opacity-80">
                  {lang === 'en' ? 'Lifetime Access' : 'লাইফটাইম এক্সেস'}
                </div>
              </div>
            </div>
          </div>

          {/* Video/Image */}
          <div className="relative">
            {videoMedia ? (
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src={videoMedia.source}
                  title={videoMedia.alt_text}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            ) : imageMedia ? (
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={imageMedia.source}
                  alt={imageMedia.alt_text}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

