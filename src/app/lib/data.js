import { client } from "../../../sanity/lib/client";

export async function GetMenuData() {
  const menuData = await client.fetch(`*[_type == "menu"]`, {
    cache: "no-store",
  });
  console.log(menuData);

  return menuData;
}
