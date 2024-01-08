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
    <html lang="en">
      <body
        className={`flex flex-col min-h-full max-w-screen border-2 border-black m-6 ${inter.className}`}
      >
        <TheHeader />
        <main className="p-6">{children}</main>
        <TheFooter />
      </body>
    </html>
  );
}
