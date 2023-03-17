// components/EditItem.js
import { useState } from "react";
import axios from "axios";

const EditItem = ({ item, mutate }) => {
  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/inventory/${item._id}`, { name, quantity });
      mutate();
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <div>
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditItem;
