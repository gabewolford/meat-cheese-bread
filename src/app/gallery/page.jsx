export const metadata = {
  metadataBase: new URL("https://meatcheesebread.com"),
  alternates: {
    canonical: "/gallery",
  },
  title: "Photo Gallery | Meat Cheese Bread",
  description:
    "Enjoy eating in cozy comfort at Meat Cheese Bread, a restaurant and sandwich shop in Portland, Oregon.",
  keywords:
    "Portland restaurant, Portland Oregon restaurant, Portland sandwich shop, Portland sandwiches, Meat Cheese Bread, sandwich shop, catering, Portland catering, Portland Oregon catering, Portland lunch, Portland breakfast",
  openGraph: {
    title: "About Our Restaurant | Meat Cheese Bread",
    description:
      "Enjoy eating in cozy comfort at Meat Cheese Bread, a restaurant and sandwich shop in Portland, Oregon.",
    siteName: "Meat Cheese Bread",
    type: "website",
    locale: "en_US",
    url: "https://meatcheesebread.com/gallery",
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

export default function GalleryPage() {
  return <h1>Gallery Page</h1>;
}
