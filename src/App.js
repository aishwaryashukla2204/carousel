import React, { useEffect, useState } from "react";
import "./styles.css";
import Carousel from "./components/Carousel/Carousel";
import items from "./utils/Items";
import { getUniqueElements } from "./utils/HelperFunctions.js";
import Dropdown from './components/Dropdown/Dropdown'
const App = () => {
  const [selectedValue, setSelectedValue] = useState("default");
  const [itemList, setItemList] = useState(items);
  const categorySet = getUniqueElements(items, "category");

  const handleSelect = (e) => {
    setSelectedValue(e.target.value);
  };
  useEffect(() => {
    if (selectedValue === "default") {
      setItemList([...items]);
    }
    if (selectedValue !== "default" && selectedValue !== "") {
      const filteredItems = items.filter(
        (item) => item.category === selectedValue
      );
      setItemList([...filteredItems]);
    }
  }, [selectedValue]);
  return (
    <div className="App">
      <div className="app-container">
      <div className="category-filter">
      {/* <Dropdown handleSelect={() => this.handleSelect(e)}
        items={categorySet}
      /> */}

      <select id="select-category" onChange={(e) => handleSelect(e)}>
      <option value="">Select a Category</option>
        <option value="default">All</option>
        {categorySet.map((category,idx) => {
          return <option key={idx} value={category}>{category}</option>;
        })}
      </select>
      </div>
      <Carousel numOfItems={3} itemList={itemList}></Carousel>

      </div>
    </div>
  );
};
export default App;
