import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductData, getProductData } from '@/lib/api';
import ClientPage from './ClientPage';

interface PageProps {
  params: {
    lang: string;
  };
}

// Generate static params for ISR
export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'bn' },
  ];
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = params.lang as 'en' | 'bn';
  
  if (!['en', 'bn'].includes(lang)) {
    return {};
  }

  const data = await getProductData(lang);
  
  if (!data) {
    return {};
  }

  const title = data.seo?.title || data.title;
  const description = data.seo?.description || data.description.replace(/<[^>]*>/g, '').substring(0, 160);
  
  return {
    title,
    description,
    keywords: data.seo?.keywords,
    openGraph: {
      title,
      description,
      images: data.media.filter(m => m.type === 'image').map(m => ({
        url: m.source,
        alt: m.alt_text,
      })),
      locale: lang === 'bn' ? 'bn_BD' : 'en_US',
    },
    alternates: {
      languages: {
        'en': '/en',
        'bn': '/bn',
      },
    },
  };
}

// Main page component with ISR
export default async function Page({ params }: PageProps) {
  const lang = params.lang as 'en' | 'bn';
  
  // Validate language parameter
  if (!['en', 'bn'].includes(lang)) {
    notFound();
  }

  // Fetch data server-side for ISR
  const data = await getProductData(lang);
  
  if (!data) {
    notFound();
  }

  return <ClientPage initialData={data} initialLang={lang} />;
}

// Enable ISR with revalidation
export const revalidate = 3600; // Revalidate every hour

