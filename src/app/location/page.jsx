import PhotoRightCTA from "../components/PhotoRightCTA";

export const metadata = {
  metadataBase: new URL("https://meatcheesebread.com"),
  alternates: {
    canonical: "/location",
  },
  title: "Our Location | Meat Cheese Bread",
  description:
    "Meat Cheese Bread is located at 1406 SE Stark in Portland, Oregon. Phone us at 503-234-1700.",
  keywords:
    "Portland restaurant, Portland Oregon restaurant, Portland sandwich shop, Portland sandwiches, Meat Cheese Bread, sandwich shop, catering, Portland catering, Portland Oregon catering, Portland lunch, Portland breakfast",
  openGraph: {
    title: "About Our Restaurant | Meat Cheese Bread",
    description:
      "Meat Cheese Bread is located at 1406 SE Stark in Portland, Oregon. Phone us at 503-234-1700.",
    siteName: "Meat Cheese Bread",
    type: "website",
    locale: "en_US",
    url: "https://meatcheesebread.com/location",
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

export default function LocationPage() {
  return (
    <>
      <section className="w-full h-[500px] p-4 md:p-6">Location Page</section>
      <PhotoRightCTA
        heading="Are you hungry yet?"
        linkTo="/menu"
        buttonText="Explore the menu"
        hoverColor="red"
      />
    </>
  );
}
