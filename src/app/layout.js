import "./globals.css";
import { supplySansMedium } from "./styles/fonts";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

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
      <body className="flex flex-col relative min-h-screen max-w-screen">
        <TheHeader />
        <main className="mx-4 md:mx-6 flex-1 border-x-2 border-black border-collapse">
          <div className={`${supplySansMedium.className} min-h-fit`}>
            {children}
          </div>
        </main>
        <TheFooter />
      </body>
    </html>
  );
}
