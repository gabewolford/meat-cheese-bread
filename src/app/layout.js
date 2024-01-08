import "./globals.css";
import { supplyMonoUltralight } from "./styles/fonts";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

export const metadata = {
  title: "Meat Cheese Bread",
  description:
    "Meat Cheese Bread, located in close-in southeast Portland, is a sandwich shop that uses fresh, local products of superior quality in a clean and vibrant space.",
  keywords:
    "Portland restaurant, Portland Oregon restaurant, Portland sandwich shop, Portland sandwiches, Meat Cheese Bread, sandwich shop, catering, Portland catering, Portland Oregon catering, Portland lunch, Portland breakfast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className="flex flex-col relative min-h-screen max-w-screen">
        <TheHeader />
        <main className="mx-4 md:mx-6 mb-4 md:mb-6 flex-1 border-x-2 border-black">
          <div
            className={`${supplyMonoUltralight.className} p-4 md:p-6 min-h-[600px]`}
          >
            {children}
          </div>
        </main>
        <TheFooter />
      </body>
    </html>
  );
}
