import React, { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("please provide item name");
      return;
    }
    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form__control">
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button className="btn btn-submit" type="submit">
          add
        </button>
      </div>
    </form>
  );
};

export default Form;
