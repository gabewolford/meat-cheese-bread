import localFont from "next/font/local";
import { Reenie_Beanie } from "next/font/google";

const ReenieBeanie = Reenie_Beanie({ subsets: ["latin"], weight: "400" });

const supplyMonoBold = localFont({
  src: "./fonts/PPSupplyMono-Bold.woff2",
});

const supplyMonoMedium = localFont({
  src: "./fonts/PPSupplyMono-Medium.woff2",
});

const supplyMonoRegular = localFont({
  src: "./fonts/PPSupplyMono-Regular.woff2",
});

const supplyMonoUltralight = localFont({
  src: "./fonts/PPSupplyMono-Ultralight.woff2",
});

const supplySansBold = localFont({
  src: "./fonts/PPSupplySans-Bold.woff2",
});

const supplySansMedium = localFont({
  src: "./fonts/PPSupplySans-Medium.woff2",
});

const supplySansRegular = localFont({
  src: "./fonts/PPSupplySans-Regular.woff2",
});

const supplySansUltralight = localFont({
  src: "./fonts/PPSupplySans-Ultralight.woff2",
});

export {
  ReenieBeanie,
  supplyMonoBold,
  supplyMonoMedium,
  supplyMonoRegular,
  supplyMonoUltralight,
  supplySansBold,
  supplySansMedium,
  supplySansRegular,
  supplySansUltralight,
};
