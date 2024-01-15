import { client } from "../../../sanity/lib/client";

export async function GetMenuData() {
  const menuData = await client.fetch(
    `*[_type == "menu"]{_updatedAt, items, category}`,
    {
      revalidate: 3600,
    }
  );

  return menuData;
}

export async function GetCateringMenuData() {
  const cateringMenuData = await client.fetch(
    `*[_type == "cateringMenu"]{_updatedAt, items, category}`,
    {
      revalidate: 3600,
    }
  );

  return cateringMenuData;
}
