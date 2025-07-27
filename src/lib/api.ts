/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProductData {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Media[];
  checklist: Checklist[];
  seo: Seo;
  sections: Section[];
  cta_text: {
    name: string;
    en: string;
    bn: string;
  };
}

export interface Media {
  type: "image" | "video";
  source: string;
  alt_text: string;
}

export interface Checklist {
  text: string;
  icon: string;
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
  description: string;
  type: "instructors" | "features" | "pointers" | "about" | "faq";
  name: string;
  instructors?: Instructor[];
  items?: FeatureItem[];
  pointers?: string[];
  details?: string;
  faqs?: FaqItem[];
  values?: Instructor[];
  question?: string;
  title?: string;
  subtitle?: string;
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

export async function getProductData(
  lang: "en" | "bn"
): Promise<ProductData | null> {
  try {
    const response = await fetch(
      `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
      {
        headers: {
          "X-TENMS-SOURCE-PLATFORM": "web",
          Accept: "application/json",
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
    console.error("Failed to fetch product data:", error);
    return null;
  }
}
