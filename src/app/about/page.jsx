import PhotoRightCTA from "../components/PhotoRightCTA";

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
  return (
    <>
      <section className="w-full h-[500px] p-4 md:p-6">About Page</section>
      <PhotoRightCTA
        heading="Are you hungry yet?"
        linkTo="/menu"
        buttonText="Explore the menu"
        hoverColor="red"
      />
    </>
  );
}
