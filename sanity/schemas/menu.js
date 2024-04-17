export const menu = {
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
      value: "Category",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Breakfast", value: "Breakfast" },
          {
            title: "Cold Sandwiches",
            value: "Cold Sandwiches",
          },
          { title: "Hot Sandwiches", value: "Hot Sandwiches" },
          { title: "Salads", value: "Salads" },
          { title: "Sides", value: "Sides" },
          { title: "Sweets", value: "Sweets" },
        ],
      },
      readOnly: true,
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          name: "menuItem",
          title: "Menu Item",
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              description: "The name of the menu item",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Description",
              type: "string",
              description: "Description of the menu item",
            },
            {
              name: "price",
              title: "Price",
              type: "number",
              description: "The price of the menu item",
            },
          ],
        },
      ],
      description: "List of items in the menu category",
    },
  ],
};
