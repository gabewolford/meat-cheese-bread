import PhotoRightCTA from "../components/PhotoRightCTA";
import { supplyMonoRegular, supplyMonoUltralight } from "../styles/fonts";

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
  return (
    <>
      <section className="flex flex-col w-full h-fit">
        <div className="flex flex-col text-center p-4 md:p-16 gap-4">
          <h2 className="text-2xl lg:text-4xl">Current Menu</h2>
          <p
            className={`${supplyMonoUltralight.className} uppercase text-xs text-green`}
          >
            -- updated 1/12/2024 --
          </p>
          {/* <button
            className={`${supplyMonoRegular.className} flex flex-row uppercase w-fit text-green mx-auto pl-2 hover:underline underline-offset-4 gap-2`}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.0001 10V15M10.0001 15L12.5001 13.3333M10.0001 15L7.50008 13.3333M10.8334 2.50072C10.7538 2.5 10.6645 2.5 10.5623 2.5H6.83358C5.90016 2.5 5.4331 2.5 5.07658 2.68166C4.76298 2.84144 4.50819 3.09623 4.3484 3.40983C4.16675 3.76635 4.16675 4.23341 4.16675 5.16683V14.8335C4.16675 15.7669 4.16675 16.2334 4.3484 16.5899C4.50819 16.9035 4.76298 17.1587 5.07658 17.3185C5.43275 17.5 5.89924 17.5 6.83084 17.5H13.1693C14.1009 17.5 14.5667 17.5 14.9229 17.3185C15.2365 17.1587 15.4921 16.9035 15.6519 16.5899C15.8334 16.2337 15.8334 15.7679 15.8334 14.8363V7.7714C15.8334 7.66913 15.8334 7.57967 15.8326 7.5M10.8334 2.50072C11.0714 2.50289 11.222 2.51154 11.3658 2.54605C11.5358 2.58688 11.6983 2.65439 11.8474 2.74577C12.0156 2.8488 12.1599 2.99318 12.448 3.28125L15.0526 5.88582C15.3408 6.17407 15.4841 6.3178 15.5872 6.48599C15.6786 6.63511 15.7462 6.79771 15.787 6.96777C15.8215 7.11147 15.8304 7.26209 15.8326 7.5M10.8334 2.50072V4.83333C10.8334 5.76675 10.8334 6.23314 11.0151 6.58966C11.1749 6.90326 11.4296 7.15873 11.7432 7.31852C12.0994 7.5 12.5659 7.5 13.4975 7.5H15.8326M15.8326 7.5H15.8336"
                  stroke="#344B2D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>{" "}
            Printer-Friendly Menu
          </button> */}
        </div>

        <div className="flex flex-col px-4 md:px-16 gap-4">
          <h3 className="text-lg lg:text-2xl text-green">Breakfast</h3>
          <div className="flex flex-col gap-2 mb-8 lg:md:mb-12">
            <p className={`${supplyMonoRegular.className} uppercase`}>
              Breakfast burrito -{" "}
              <span className={`${supplyMonoUltralight.className} lowercase`}>
                scrambled egg, hash browns, green chile salsa and cheddar
              </span>
            </p>
            <p className={`${supplyMonoRegular.className} uppercase`}>
              Steak and Egg -{" "}
              <span className={`${supplyMonoUltralight.className} lowercase`}>
                Grilled flank steak, blue cheese aioli, blue cheese, greens and
                an egg on a house-made roll
              </span>
            </p>
            <p className={`${supplyMonoRegular.className} uppercase`}>
              Granola and Yogurt -{" "}
              <span className={`${supplyMonoUltralight.className} lowercase`}>
                Nancy&#39;s honey yogurt, house-made granola
              </span>
            </p>
            <p className={`${supplyMonoRegular.className} uppercase`}>
              Toast -{" "}
              <span className={`${supplyMonoUltralight.className} lowercase`}>
                toast with butter and seasonal jelly
              </span>
            </p>
          </div>

          <h3 className="text-lg lg:text-2xl text-green">Cold Sandwiches</h3>
          <div className="flex flex-col gap-2 mb-8 lg:md:mb-12">
            <p className={`${supplyMonoRegular.className} uppercase`}>
              Turkey -{" "}
              <span className={`${supplyMonoUltralight.className} lowercase`}>
                roasted turkey, fontina, bacon, sweet onion, mayo, lettuce on
                rustic sourdough
              </span>
            </p>
            <p className={`${supplyMonoRegular.className} uppercase`}>
              Park Kitchen -{" "}
              <span className={`${supplyMonoUltralight.className} lowercase`}>
                flank steak, pickled onions, greens, blue cheese, herbs and
                sherry vinaigrette
              </span>
            </p>
            <p className={`${supplyMonoRegular.className} uppercase`}>
              Squash -{" "}
              <span className={`${supplyMonoUltralight.className} lowercase`}>
                delicata squash, arugula, romesco sauce and feta on ciabatta
              </span>
            </p>
            <p className={`${supplyMonoRegular.className} uppercase`}>
              Egg salad -{" "}
              <span className={`${supplyMonoUltralight.className} lowercase`}>
                egg salad, Nueske&#39;s bacon with aioli and green leaf on
                toasted sourdough
              </span>
            </p>
          </div>

          <h3 className="text-lg lg:text-2xl text-green">Hot Sandwiches</h3>
          <div className="flex flex-col gap-2 mb-8 lg:md:mb-12">
            <p className={`${supplyMonoRegular.className} uppercase`}>
              Green bean -{" "}
              <span className={`${supplyMonoUltralight.className} lowercase`}>
                grilled green beans, bacon relish, soft boiled egg, parmesan and
                aioli
              </span>
            </p>
            <p className={`${supplyMonoRegular.className} uppercase`}>
              Sausage marinara -{" "}
              <span className={`${supplyMonoUltralight.className} lowercase`}>
                grilled pork links, smoked provolone, marinara with basil,
                parmesan and bread crumbs
              </span>
            </p>
            <p className={`${supplyMonoRegular.className} uppercase`}>
              Bacon sweet potato -{" "}
              <span className={`${supplyMonoUltralight.className} lowercase`}>
                thick cut Nueske&#39;s bacon, rosemary sweet potatoes, arugula
                and goat cheese sauce on ciabatta
              </span>
            </p>
          </div>

          <h3 className="text-lg lg:text-2xl text-green">Salads</h3>
          <div className="flex flex-col gap-2 mb-8 lg:md:mb-12">
            <p className={`${supplyMonoRegular.className} uppercase`}>
              Mixed greens -{" "}
              <span className={`${supplyMonoUltralight.className} lowercase`}>
                mixed farm greens, spiced nuts, and fresh herbs with sherry
                vinaigrette
              </span>
            </p>
            <p className={`${supplyMonoRegular.className} uppercase`}>
              Wedge salad -{" "}
              <span className={`${supplyMonoUltralight.className} lowercase`}>
                iceberg lettuce, blue cheese dressing, croutons, ham,
                hard-boiled egg, and blue cheese
              </span>
            </p>
            <p className={`${supplyMonoRegular.className} uppercase`}>
              Sandwich salad -{" "}
              <span className={`${supplyMonoUltralight.className} lowercase`}>
                most sandwiches available as a salad
              </span>
            </p>
            <p className={`${supplyMonoRegular.className} uppercase`}>
              Arugula salad -{" "}
              <span className={`${supplyMonoUltralight.className} lowercase`}>
                preserved lemon vinaigrette, parmesan and toasty bread crumbles
              </span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row w-full">
            <div className="flex flex-col gap-4 w-full lg:w-1/2">
              <h3 className="text-lg lg:text-2xl text-green">Sides</h3>
              <div className={"flex flex-col gap-2 mb-8 lg:md:mb-12"}>
                <p className={`${supplyMonoRegular.className} uppercase`}>
                  Potato salad
                </p>
                <p className={`${supplyMonoRegular.className} uppercase`}>
                  House-made soup
                </p>
                <p className={`${supplyMonoRegular.className} uppercase`}>
                  Side salad
                </p>
                <p className={`${supplyMonoRegular.className} uppercase`}>
                  Pickle
                </p>
                <p className={`${supplyMonoRegular.className} uppercase`}>
                  Tim&#39;s Chips
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full lg:w-1/2">
              <h3 className="text-lg lg:text-2xl text-green">Sweets</h3>
              <div className={"flex flex-col gap-2 mb-8 lg:md:mb-12"}>
                <p className={`${supplyMonoRegular.className} uppercase`}>
                  Bread pudding
                </p>
                <p className={`${supplyMonoRegular.className} uppercase`}>
                  Peanut butter rice crispy treat
                </p>
                <p className={`${supplyMonoRegular.className} uppercase`}>
                  Cookies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PhotoRightCTA
        heading="Ready to order?"
        linkTo="tel:+15032341700"
        buttonText="Give us a call"
        hoverColor="green"
      />
    </>
  );
}
