import PhotoRightCTA from "../components/PhotoRightCTA";

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

export default function GalleryPage() {
  return (
    <>
      <section className="w-full h-[500px] p-4 md:p-6">Gallery Page</section>

      <PhotoRightCTA
        heading="Are you hungry yet?"
        linkTo="/menu"
        buttonText="Explore the menu"
        hoverColor="red"
      />
    </>
  );
}
