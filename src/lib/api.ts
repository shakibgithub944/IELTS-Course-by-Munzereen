export interface ProductData {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Media[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}

export interface Media {
  type: 'image' | 'video';
  source: string;
  alt_text: string;
}

export interface Checklist {
  title: string;
  description: string;
}

export interface Seo {
  title: string;
  description: string;
  keywords: string;
}

export interface CtaText {
  en: string;
  bn: string;
}

export interface Section {
  type: 'instructor' | 'features' | 'pointers' | 'about' | 'faq';
  title: string;
  instructors?: Instructor[];
  items?: FeatureItem[];
  pointers?: string[];
  details?: string;
  faqs?: FaqItem[];
}

export interface Instructor {
  name: string;
  designation: string;
  bio: string;
  image: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  id: string;
}

export async function getProductData(lang: 'en' | 'bn'): Promise<ProductData | null> {
  try {
    const response = await fetch(
      `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
      {
        headers: {
          'X-TENMS-SOURCE-PLATFORM': 'web',
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      console.error(`Error fetching data: ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    return data.data as ProductData;
  } catch (error) {
    console.error('Failed to fetch product data:', error);
    return null;
  }
}


