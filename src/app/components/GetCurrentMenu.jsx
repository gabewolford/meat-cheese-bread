"use client";

import { useEffect, useState } from "react";
import { GetMenuData } from "../lib/data";
import { supplyMonoUltralight, supplyMonoRegular } from "../styles/fonts";

const MenuComponent = () => {
  const [menuData, setMenuData] = useState([]);
  const [latestUpdate, setLatestUpdate] = useState(null);
  const [breakfastItems, setBreakfastItems] = useState([]);
  const [coldSandwichesItems, setColdSandwichesItems] = useState([]);
  const [hotSandwichesItems, setHotSandwichesItems] = useState([]);
  const [saladItems, setSaladItems] = useState([]);
  const [sideItems, setSideItems] = useState([]);
  const [sweetItems, setSweetItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetMenuData();
        setMenuData(data);

        const mostRecentUpdate = data.reduce((maxDate, item) => {
          const updatedAtDate = new Date(item._updatedAt);
          return updatedAtDate > maxDate ? updatedAtDate : maxDate;
        }, new Date(0));

        setLatestUpdate(mostRecentUpdate);

        // Extract breakfast items
        const breakfastCategory = data.find(
          (category) => category.category === "Breakfast"
        );
        if (breakfastCategory) {
          setBreakfastItems(breakfastCategory.items);
        }

        // Extract cold sandwich items
        const coldSandwichesCategory = data.find(
          (category) => category.category === "Cold Sandwiches"
        );
        if (coldSandwichesCategory) {
          setColdSandwichesItems(coldSandwichesCategory.items);
        }

        // Extract hot sandwich items
        const hotSandwichesCategory = data.find(
          (category) => category.category === "Hot Sandwiches"
        );
        if (hotSandwichesCategory) {
          setHotSandwichesItems(hotSandwichesCategory.items);
        }

        // Extract salad items
        const saladCategory = data.find(
          (category) => category.category === "Salads"
        );
        if (saladCategory) {
          setSaladItems(saladCategory.items);
        }

        // Extract side items
        const sidesCategory = data.find(
          (category) => category.category === "Sides"
        );
        if (saladCategory) {
          setSideItems(sidesCategory.items);
        }

        // Extract sweet items
        const sweetsCategory = data.find(
          (category) => category.category === "Sweets"
        );
        if (sweetsCategory) {
          setSweetItems(sweetsCategory.items);
        }
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2 className="text-2xl lg:text-4xl">Current Menu</h2>
      <p
        className={`${supplyMonoUltralight.className} uppercase text-xs text-green`}
      >
        {latestUpdate
          ? `-- updated ${latestUpdate.toLocaleDateString()} --`
          : ""}
      </p>

      <div className="flex flex-col text-left">
        {/* Render breakfast items */}
        <h3 className="text-lg lg:text-2xl text-green mb-3">Breakfast</h3>
        <ul className="flex flex-col gap-2 mb-8 lg:md:mb-12">
          {breakfastItems.map((item, index) => (
            <li
              key={index}
              className={`${supplyMonoRegular.className} uppercase`}
            >
              {item.name} -{" "}
              <span className={`${supplyMonoUltralight.className} lowercase`}>
                {item.description}
              </span>
            </li>
          ))}
        </ul>

        {/* Render cold sandwich items */}
        <h3 className="text-lg lg:text-2xl text-green mb-3">Cold Sandwiches</h3>
        <ul className="flex flex-col gap-2 mb-8 lg:md:mb-12">
          {coldSandwichesItems.map((item, index) => (
            <li
              key={index}
              className={`${supplyMonoRegular.className} uppercase`}
            >
              {item.name} -{" "}
              <span className={`${supplyMonoUltralight.className} lowercase`}>
                {item.description}
              </span>
            </li>
          ))}
        </ul>

        {/* Render hot sandwich items */}
        <h3 className="text-lg lg:text-2xl text-green mb-3">Hot Sandwiches</h3>
        <ul className="flex flex-col gap-2 mb-8 lg:md:mb-12">
          {hotSandwichesItems.map((item, index) => (
            <li
              key={index}
              className={`${supplyMonoRegular.className} uppercase`}
            >
              {item.name} -{" "}
              <span className={`${supplyMonoUltralight.className} lowercase`}>
                {item.description}
              </span>
            </li>
          ))}
        </ul>

        {/* Render salad items */}
        <h3 className="text-lg lg:text-2xl text-green mb-3">Salads</h3>
        <ul className="flex flex-col gap-2 mb-8 lg:md:mb-12">
          {saladItems.map((item, index) => (
            <li
              key={index}
              className={`${supplyMonoRegular.className} uppercase`}
            >
              {item.name} -{" "}
              <span className={`${supplyMonoUltralight.className} lowercase`}>
                {item.description}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col md:flex-row w-full">
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <h3 className="text-lg lg:text-2xl text-green mb-3">Sides</h3>
            <ul className="flex flex-col gap-2 mb-8 lg:md:mb-12">
              {sideItems.map((item, index) => (
                <li
                  key={index}
                  className={`${supplyMonoRegular.className} uppercase`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <h3 className="text-lg lg:text-2xl text-green mb-3">Sides</h3>
            <ul className="flex flex-col gap-2 mb-8 lg:md:mb-12">
              {sweetItems.map((item, index) => (
                <li
                  key={index}
                  className={`${supplyMonoRegular.className} uppercase`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuComponent;
