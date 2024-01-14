import { client } from "@/src/utils/sanity/client";

export async function FetchMenu() {
  const menu = await client.fetch(`*[_type == "menu"]`);

  return (
    <ul>
      {menu.map((item) => (
        <li key={item._id}>
          <a href={item?.slug.current}>{item?.title}</a>
        </li>
      ))}
    </ul>
  );
}
