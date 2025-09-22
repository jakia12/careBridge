import Script from "next/script";
import "../../../globals.css";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Montserrat, Raleway } from "next/font/google";

// define fonts here
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata = {
  title: "CareBridge",
  description: "",
  icons: {
    icon: "/images/4.png",
    shortcut: "/images/4.png",
    apple: "/images/4.png",
  },
  // openGraph: {
  //   title: "Glamora – Beauty & Wellness",
  //   description: "Indulge in premium beauty, spa, and salon experiences.",
  //   url: "https://yourdomain.com",
  //   siteName: "Glamora",
  //   images: [
  //     {
  //       url: "/images/openfav.jpg", // absolute URL to your image
  //       width: 1200,
  //       height: 630,
  //       alt: "Glamora Spa & Salon Preview",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${raleway.variable} ${mont.variable}`}>
      <head>
        {/* CSS CDNs */}

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        />
        {/* Animate.css */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        {/* Slick Slider */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
        {/* Themify Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/themify-icons/1.0.1/css/themify-icons.css"
        />
        {/* Elegant Line Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/elegant-icons/1.0.1/style.css"
        />
        {/* Odometer */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/themes/odometer-theme-default.min.css"
        />
        {/* Custom main.css (keep local if it’s your project’s styles) */}
        <link rel="stylesheet" href="/css/main.css" />

        {/* optional slick theme */}
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css" /> */}
        {/* your local CSS */}
      </head>
      <body>
        <Header />
        <main>{children}</main>

        <Footer />
        {/* jQuery */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://kit.fontawesome.com/f5a24ca635.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />

        {/* Bootstrap */}
        <Script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.3/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        {/* Magnific Popup */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"
          strategy="afterInteractive"
        />

        {/* Nice Select */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js"
          strategy="afterInteractive"
        />

        {/* Slick Carousel */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
