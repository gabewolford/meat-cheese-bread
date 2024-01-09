import Image from "next/image";
import heroImage from "../../public/images/logo.png";

export default function HomePage() {
  return (
    <>
      <Image src={heroImage} alt="meat cheese bread hero" />
    </>
  );
}
