import { ReenieBeanie } from "../styles/fonts";

export default function PageHeading({ headingText }) {
  return (
    <h2 className={`${ReenieBeanie.className} text-6xl md:text-7xl`}>
      {headingText}
    </h2>
  );
}
