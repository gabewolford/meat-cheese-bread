import Link from "next/link";
import { supplyMonoRegular } from "../styles/fonts";

export default function PrimaryButton({ linkTo, buttonText, hoverColor }) {
  return (
    <Link
      href={linkTo}
      className={`${supplyMonoRegular.className} bg-black w-fit p-4 hover:bg-${hoverColor} hover:scale-105 transition-color duration-500 text-white uppercase`}
    >
      {buttonText}
    </Link>
  );
}
