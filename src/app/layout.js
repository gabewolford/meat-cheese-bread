import "./globals.css";
import { supplySansMedium } from "./styles/fonts";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Meat Cheese Bread, a Portland, Oregon Restaurant | 503-234-1700",
  description:
    "Meat Cheese Bread, located in close-in southeast Portland, is a sandwich shop that uses fresh, local products of superior quality in a clean and vibrant space.",
  keywords:
    "Portland restaurant, Portland Oregon restaurant, Portland sandwich shop, Portland sandwiches, Meat Cheese Bread, sandwich shop, catering, Portland catering, Portland Oregon catering, Portland lunch, Portland breakfast",
  openGraph: {
    title: "Meat Cheese Bread, a Portland, Oregon Restaurant | 503-234-1700",
    description:
      "Meat Cheese Bread, located in close-in southeast Portland, is a sandwich shop that uses fresh, local products of superior quality in a clean and vibrant space.",
    siteName: "Meat Cheese Bread",
    type: "website",
    locale: "en_US",
    url: "https://meatcheesebread.com",
    images: [
      {
        url: "https://meat-cheese-bread.vercel.app/images/og-image.png",
        alt: "Meat Cheese Bread",
      },
    ],
  },
  images: [
    {
      url: "https://meat-cheese-bread.vercel.app/images/og-image.png",
      alt: "Meat Cheese Bread",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col relative h-full w-full">
        <div
          id="paper-effect"
          className="m-auto w-full h-full absolute -z-50"
        ></div>
        <div className="w-full h-full flex"></div>
        <svg className="w-0 h-0">
          <filter id="roughpaper">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              result="noise"
              numOctaves="5"
            />

            <feDiffuseLighting
              in="noise"
              lightingColor="#DAB68F"
              surfaceScale="2"
            >
              <feDistantLight azimuth="45" elevation="60" />
            </feDiffuseLighting>
          </filter>
        </svg>
        <TheHeader />
        <main className="mx-4 md:mx-6 flex-1 border-x-2 border-black border-collapse">
          <div className={`${supplySansMedium.className} min-h-fit`}>
            {children}
          </div>
        </main>
        <TheFooter />
      </body>
      <Analytics />
      <GoogleAnalytics gaId="G-3KYMLRM9RY" />
    </html>
  );
}
