import React from "react";

const SingleItem = ({ id, name, completed, removeItem, editItem }) => {
  return (
    <div className="items__list-info">
      <div className="items__list-info-details">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => editItem(id)}
        />
        <p style={{ textDecoration: completed && "line-through" }}>{name}</p>
      </div>
      <button
        className="btn btn-delete"
        type="button"
        onClick={() => removeItem(id)}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
