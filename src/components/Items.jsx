import React from "react";
import SingleItem from "./SingleItem";
import { nanoid } from "nanoid";

const Items = ({ items, removeItem, editItem }) => {
  return (
    <div className="items__list">
      {items.map((item) => {
        return (
          <SingleItem
            key={nanoid()}
            {...item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

export default Items;
