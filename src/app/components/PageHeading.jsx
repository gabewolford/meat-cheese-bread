import { headlineOutline } from "../styles/fonts";

export default function PageHeading({ headingText }) {
  return (
    <h2 className={`${headlineOutline.className} text-2xl md:text-4xl`}>
      {headingText}
    </h2>
  );
}
