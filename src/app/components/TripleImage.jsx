import Image from "next/image";

export default function TripleImage({
  photo1,
  altText1,
  photo2,
  altText2,
  photo3,
  altText3,
}) {
  return (
    <section className="grid grid-cols-6">
      <div className="col-span-2 flex justify-center items-center">
        <Image
          src={photo1}
          alt={altText1}
          className="h-full w-full object-cover"
          placeholder="blur"
        />
      </div>
      <div className="col-span-2 flex justify-center items-center border-l-2 border-black">
        <Image
          src={photo2}
          alt={altText2}
          className="h-full w-full object-cover"
          placeholder="blur"
        />
      </div>
      <div className="col-span-2 flex justify-center items-center border-l-2 border-black">
        <Image
          src={photo3}
          alt={altText3}
          className="h-full w-full object-cover"
          placeholder="blur"
        />
      </div>
    </section>
  );
}
