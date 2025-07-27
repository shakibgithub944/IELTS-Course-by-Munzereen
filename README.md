# IELTS Course Product Page

A modern, responsive product page for the IELTS Course by Munzereen Shahid, built with Next.js, TypeScript, and TailwindCSS.

## 🚀 Features

- **Server-Side Rendering (SSR)** - Fast initial page loads and SEO optimization
- **Incremental Static Regeneration (ISR)** - Automatic content updates with caching
- **Localization** - Support for English and Bengali languages
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **TypeScript** - Type-safe development with full TypeScript support
- **TailwindCSS** - Modern utility-first CSS framework
- **SEO Optimized** - Meta tags, structured data, and Open Graph support
- **Performance Optimized** - Image optimization and code splitting

## 📋 Requirements Met

### Core Features ✅
- [x] Title (product title from API)
- [x] Description (HTML content from API)
- [x] Course instructors (from sections array type=instructor)
- [x] Product trailer (YouTube player from media data)
- [x] Price display (using ৳1000 as default, styled as ৳3850)
- [x] CTA text (from cta_text API data)
- [x] Localization (English/Bengali support)
- [x] Server-side rendering (SSR)

### Good to Have Features ✅
- [x] Course layout (from sections array type=features)
- [x] Learning outcomes (from sections array type=pointers)
- [x] Course exclusive features (instructor section)
- [x] Course details (from sections array type=about)
- [x] Checklist (from checklist API data)
- [x] Incremental static generation (ISR)
- [x] SEO optimization (meta tags, structured data)

### Technical Requirements ✅
- [x] React/Next.js with TypeScript
- [x] TailwindCSS for styling
- [x] State and Props management
- [x] Code splitting and reusable components
- [x] Responsive design
- [x] Dockerfile for deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.3
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **State Management**: React Hooks
- **API Integration**: Fetch API with TypeScript interfaces
- **Deployment**: Docker

## 📁 Project Structure

```
src/
├── app/
│   ├── [lang]/              # Dynamic language routes for ISR
│   │   ├── page.tsx         # Server-side rendered page
│   │   └── ClientPage.tsx   # Client-side components
│   ├── layout.tsx           # Root layout with SEO
│   ├── page.tsx             # Main page component
│   └── globals.css          # Global styles
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section with video
│   ├── Instructor.tsx       # Instructor information
│   ├── Features.tsx         # Course features
│   ├── LearningOutcomes.tsx # What you'll learn
│   ├── Checklist.tsx        # What's included
│   ├── FAQ.tsx              # Frequently asked questions
│   └── Footer.tsx           # Site footer
└── lib/
    └── api.ts               # API functions and TypeScript interfaces
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ielts-product-page
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t ielts-product-page .
```

### Run Docker Container

```bash
docker run -p 3000:3000 ielts-product-page
```

## 🌐 API Integration

The application integrates with the 10 Minute School API:

- **Endpoint**: `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course`
- **Parameters**: `lang=en|bn`
- **Headers**: `X-TENMS-SOURCE-PLATFORM: web`

### API Response Structure

```typescript
interface ProductData {
  slug: string;
  id: number;
  title: string;
  description: string; // HTML content
  media: Media[];      // Images and videos
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[]; // instructor, features, pointers, about, faq
}
```

## 🎨 Design Features

- **Modern Gradient Backgrounds** - Blue to purple gradients
- **Responsive Grid Layouts** - Adapts to all screen sizes
- **Interactive Elements** - Hover effects and smooth transitions
- **Professional Typography** - Clean, readable fonts
- **Accessible Design** - Proper contrast and semantic HTML
- **Mobile-First Approach** - Optimized for mobile devices

## 🔧 Configuration

### Next.js Configuration

- Image optimization for external domains
- Security headers
- Compression enabled
- Standalone output for Docker

### SEO Configuration

- Meta tags for title, description, keywords
- Open Graph tags for social sharing
- Twitter Card support
- Structured data (JSON-LD)
- Canonical URLs

## 📱 Responsive Design

The application is fully responsive and tested on:

- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🌍 Localization

Supports two languages:
- **English (en)**: Default language
- **Bengali (bn)**: Secondary language

Language switching is handled through:
- URL-based routing (`/en`, `/bn`)
- Dynamic content loading from API
- Localized UI text and labels

## 🚀 Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting by Next.js
- **ISR**: Incremental Static Regeneration for dynamic content
- **Compression**: Gzip compression enabled
- **Caching**: Proper cache headers for static assets

## 📊 SEO Features

- **Meta Tags**: Title, description, keywords
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Course schema markup
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## 🧪 Testing

The application has been tested for:
- ✅ Functionality (all features working)
- ✅ Responsiveness (mobile, tablet, desktop)
- ✅ Performance (fast loading times)
- ✅ SEO (proper meta tags and structure)
- ✅ Accessibility (semantic HTML, proper contrast)

## 📝 License

This project is created for assessment purposes.

## 👥 Contributors

- Frontend Engineer Assessment Project
- Built with Next.js, TypeScript, and TailwindCSS
- API integration with 10 Minute School

---

**Note**: This is a frontend assessment project demonstrating modern React/Next.js development practices with TypeScript, TailwindCSS, SSR, localization, and SEO optimization.

