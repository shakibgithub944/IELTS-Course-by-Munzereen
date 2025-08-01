/* eslint-disable @next/next/no-img-element */
"use client";

interface FooterProps {
  lang: "en" | "bn";
}

export default function Footer({ lang }: FooterProps) {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-blue-400 mb-4">
              <img
                src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                alt=""
                className="w-32"
              />
            </div>
            <p className=" mb-6 leading-relaxed">
              {lang === "en"
                ? "Bangladesh's largest online education platform, providing quality education to millions of students across the country."
                : "বাংলাদেশের বৃহত্তম অনলাইন শিক্ষা প্ল্যাটফর্ম, সারাদেশের লক্ষ লক্ষ শিক্ষার্থীকে মানসম্পন্ন শিক্ষা প্রদান করছে।"}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="  transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="  transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="  transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                </svg>
              </a>
              <a href="#" className="  transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {lang === "en" ? "Quick Links" : "দ্রুত লিংক"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="  transition-colors">
                  {lang === "en" ? "All Courses" : "সব কোর্স"}
                </a>
              </li>
              <li>
                <a href="#" className="  transition-colors">
                  {lang === "en" ? "Skills Development" : "দক্ষতা উন্নয়ন"}
                </a>
              </li>
              <li>
                <a href="#" className="  transition-colors">
                  {lang === "en" ? "Live Classes" : "লাইভ ক্লাস"}
                </a>
              </li>
              <li>
                <a href="#" className="  transition-colors">
                  {lang === "en" ? "Free Resources" : "ফ্রি রিসোর্স"}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {lang === "en" ? "Support" : "সাপোর্ট"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:16910" className="  transition-colors">
                  {lang === "en" ? "Call: 16910" : "কল: ১৬৯১০"}
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@10minuteschool.com"
                  className="  transition-colors"
                >
                  support@10minuteschool.com
                </a>
              </li>
              <li>
                <a href="#" className="  transition-colors">
                  {lang === "en" ? "Help Center" : "সাহায্য কেন্দ্র"}
                </a>
              </li>
              <li>
                <a href="#" className="  transition-colors">
                  {lang === "en" ? "Contact Us" : "যোগাযোগ"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className=" text-sm">
            © 2024 10 Minute School.{" "}
            {lang === "en" ? "All rights reserved." : "সকল অধিকার সংরক্ষিত।"}
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="  text-sm transition-colors">
              {lang === "en" ? "Privacy Policy" : "গোপনীয়তা নীতি"}
            </a>
            <a href="#" className="  text-sm transition-colors">
              {lang === "en" ? "Terms of Service" : "সেবার শর্তাবলী"}
            </a>
            <a href="#" className="  text-sm transition-colors">
              {lang === "en" ? "Refund Policy" : "রিফান্ড নীতি"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
