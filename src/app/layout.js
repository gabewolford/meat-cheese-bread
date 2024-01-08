import { Inter } from "next/font/google";
import "./globals.css";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

const inter = Inter({ subsets: ["latin"] });

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
      <body
        className={`flex flex-col relative min-h-screen max-w-screen ${inter.className}`}
      >
        <TheHeader />
        <main className="mx-6 mb-6 flex-1 border-x-2 border-black">
          <div className="p-6">{children}</div>
        </main>
        <TheFooter />
      </body>
    </html>
  );
}
