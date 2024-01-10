export const metadata = {
  metadataBase: new URL("https://meatcheesebread.com"),
  alternates: {
    canonical: "/catering",
  },
  title: "Our Catering Menu | Meat Cheese Bread",
  description:
    "Meat Cheese Bread offers catering for you or your group, with a wide range of breakfast and lunch items, salads, drinks, and side dishes.",
  keywords:
    "Portland restaurant, Portland Oregon restaurant, Portland sandwich shop, Portland sandwiches, Meat Cheese Bread, sandwich shop, catering, Portland catering, Portland Oregon catering, Portland lunch, Portland breakfast",
  openGraph: {
    title: "Our Catering Menu | Meat Cheese Bread",
    description:
      "Meat Cheese Bread offers catering for you or your group, with a wide range of breakfast and lunch items, salads, drinks, and side dishes.",
    siteName: "Meat Cheese Bread",
    type: "website",
    locale: "en_US",
    url: "https://meatcheesebread.com/catering",
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

export default function CateringPage() {
  return <h1>Catering Page</h1>;
}
