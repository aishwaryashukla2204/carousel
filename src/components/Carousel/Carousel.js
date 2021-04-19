import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Chevron from "../Chevron/Chevron.js";
import '../Carousel/Carousel.css'
import { goLeft, goRight } from "../../utils/HelperFunctions";
const Carousel = (props) => {
  const [startIndex, setStartIndex] = useState(0);
  const [items, setItems] = useState([]);
  const [itemsToShow, setItemsToShow] = useState([]);
  const [count, setCount] = useState(0);
  const [disableChevronRight, setDisabledChevronRight] = useState(false);
  const [disableChevronLeft, setDisabledChevronLeft] = useState(false);
  useEffect(() => {
    setItems([...props.itemList]);
    setCount(parseInt(props.numOfItems, 10));
    setStartIndex(0)
  }, [props.itemList]);
  useEffect(() => {
    console.log('props',items)
    console.log('si',startIndex)
    let numOfItemsToShow = [];
    const maxLimit = startIndex + count;
    for (let i = startIndex; i < maxLimit; i++) {
      numOfItemsToShow.push(items[i]);
    }
    console.log('numofitems',numOfItemsToShow)
    setItemsToShow([...numOfItemsToShow]);
    if (startIndex === 0) {
      setDisabledChevronRight(true);
    } else {
      setDisabledChevronRight(false);
    }
    if (startIndex === items.length - count) {
      setDisabledChevronLeft(true);
    } else {
      setDisabledChevronLeft(false);
    }
  }, [items, startIndex]);
  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  const next = (e) => {
    if (startIndex < items.length - count) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="carousel-container">
      <div onClick={prev} className={disableChevronRight ? 'arrow-circle-disabled' : 'arrow-circle'}>
        <Chevron chevronDirection="right" />
      </div>
      <div className="carousel-items">
        {itemsToShow.length > 0
          ? itemsToShow.map((itemToShow,idx) => {
              return <ProductCard key={idx} product={itemToShow} />;
            })
          : null}
      </div>
      <div onClick={next} className={disableChevronLeft ? 'arrow-circle-disabled' : 'arrow-circle'}>
        <Chevron chevronDirection="left" />
      </div>
    </div>
  );
};

export default Carousel;
