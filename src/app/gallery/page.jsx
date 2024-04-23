import PageHeading from "../components/PageHeading";
import PhotoRightCTA from "../components/PhotoRightCTA";
import { supplyMonoRegular } from "../styles/fonts";

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
        url: "https://meatcheesebread.com/images/og-image.png",
        alt: "Meat Cheese Bread",
      },
    ],
  },
  images: [
    {
      url: "https://meatcheesebread.com/images/og-image.png",
      alt: "Meat Cheese Bread",
    },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <section className="flex flex-col w-full h-fit">
        <div className="flex flex-col text-center p-6 md:p-16 gap-4">
          <PageHeading headingText="Photo Gallery" />
          <p className={`${supplyMonoRegular.className} text-sm uppercase`}>
            Coming Soon...
          </p>
        </div>
      </section>

      <PhotoRightCTA
        heading="Are you hungry yet?"
        linkTo="/menu"
        buttonText="Explore the menu"
        hoverColor="red"
      />
    </>
  );
}
