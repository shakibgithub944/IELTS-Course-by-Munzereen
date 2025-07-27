import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IELTS Course by Munzereen Shahid - 10 Minute School',
  description: 'Prepare for your IELTS exam with Munzereen Shahid\'s comprehensive online course. Master all modules: Listening, Reading, Writing, and Speaking.',
  keywords: 'IELTS, IELTS preparation, online IELTS course, Munzereen Shahid, 10 Minute School, IELTS exam, English language, study abroad, IELTS training',
  authors: [{ name: '10 Minute School' }],
  creator: '10 Minute School',
  publisher: '10 Minute School',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://10minuteschool.com'),
  alternates: {
    canonical: '/product/ielts-course',
    languages: {
      'en-US': '/en/product/ielts-course',
      'bn-BD': '/bn/product/ielts-course',
    },
  },
  openGraph: {
    title: 'IELTS Course by Munzereen Shahid - 10 Minute School',
    description: 'Prepare for your IELTS exam with Munzereen Shahid\'s comprehensive online course. Master all modules: Listening, Reading, Writing, and Speaking.',
    url: 'https://10minuteschool.com/product/ielts-course',
    siteName: '10 Minute School',
    images: [
      {
        url: 'https://cdn.10minuteschool.com/images/skills/courses/thumbnails/ielts-course-by-munzereen-shahid-thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'IELTS Course by Munzereen Shahid',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IELTS Course by Munzereen Shahid - 10 Minute School',
    description: 'Prepare for your IELTS exam with Munzereen Shahid\'s comprehensive online course. Master all modules: Listening, Reading, Writing, and Speaking.',
    images: ['https://cdn.10minuteschool.com/images/skills/courses/thumbnails/ielts-course-by-munzereen-shahid-thumbnail.jpg'],
    creator: '@10minuteschool',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "IELTS Course by Munzereen Shahid",
              "description": "Prepare for your IELTS exam with Munzereen Shahid's comprehensive online course. Master all modules: Listening, Reading, Writing, and Speaking.",
              "provider": {
                "@type": "Organization",
                "name": "10 Minute School",
                "url": "https://10minuteschool.com"
              },
              "instructor": {
                "@type": "Person",
                "name": "Munzereen Shahid",
                "jobTitle": "IELTS Expert",
                "description": "IELTS expert with years of experience in teaching and training students for the IELTS exam."
              },
              "courseMode": "online",
              "educationalLevel": "intermediate",
              "teaches": ["IELTS Listening", "IELTS Reading", "IELTS Writing", "IELTS Speaking"],
              "offers": {
                "@type": "Offer",
                "price": "3850",
                "priceCurrency": "BDT",
                "availability": "https://schema.org/InStock"
              },
              "image": "https://cdn.10minuteschool.com/images/skills/courses/thumbnails/ielts-course-by-munzereen-shahid-thumbnail.jpg",
              "url": "https://10minuteschool.com/product/ielts-course"
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

