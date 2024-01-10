export const metadata = {
  metadataBase: new URL("https://meatcheesebread.com"),
  alternates: {
    canonical: "/menu",
  },
  title: "Our Menu | Meat Cheese Bread",
  description:
    "Meat Cheese Bread in Portland, Oregon, offers a daily menu of tasty breakfast and lunch items, drinks, salads, and side dishes.",
  keywords:
    "Portland restaurant, Portland Oregon restaurant, Portland sandwich shop, Portland sandwiches, Meat Cheese Bread, sandwich shop, catering, Portland catering, Portland Oregon catering, Portland lunch, Portland breakfast",
  openGraph: {
    title: "Our Menu | Meat Cheese Bread",
    description:
      "Meat Cheese Bread, located in close-in southeast Portland, is a sandwich shop that uses fresh, local products of superior quality in a clean and vibrant space.",
    siteName: "Meat Cheese Bread",
    type: "website",
    locale: "en_US",
    url: "https://meatcheesebread.com/menu",
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

export default function MenuPage() {
  return <h1>Menu Page</h1>;
}
