import Image from "next/image";
import heroImage from "../../public/images/logo.png";

export const metadata = {
  metadataBase: new URL("https://meatcheesebread.com"),
  alternates: {
    canonical: "/",
  },
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
        url: "https://meat-cheese-bread.vercel.app/images/logo.png",
        alt: "Meat Cheese Bread",
      },
    ],
  },
  images: [
    {
      url: "https://meat-cheese-bread.vercel.app/images/logo.png",
      alt: "Meat Cheese Bread",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <Image src={heroImage} alt="meat cheese bread hero" />
    </>
  );
}
