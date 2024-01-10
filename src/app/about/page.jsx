export const metadata = {
  metadataBase: new URL("https://meatcheesebread.com"),
  alternates: {
    canonical: "/about",
  },
  title: "About Our Restaurant | Meat Cheese Bread",
  description:
    "Located in southeast Portland, Oregon, Meat Cheese Bread is a sandwich shop that uses fresh, local products of superior quality in a clean and vibrant space. Open daily.",
  keywords:
    "Portland restaurant, Portland Oregon restaurant, Portland sandwich shop, Portland sandwiches, Meat Cheese Bread, sandwich shop, catering, Portland catering, Portland Oregon catering, Portland lunch, Portland breakfast",
  openGraph: {
    title: "About Our Restaurant | Meat Cheese Bread",
    description:
      "Located in southeast Portland, Oregon, Meat Cheese Bread is a sandwich shop that uses fresh, local products of superior quality in a clean and vibrant space. Open daily.",
    siteName: "Meat Cheese Bread",
    type: "website",
    locale: "en_US",
    url: "https://meatcheesebread.com/about",
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

export default function AboutPage() {
  return <h1>About Page</h1>;
}
