// components/DeleteItem.js
import axios from "axios";

const DeleteItem = ({ item, mutate }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/inventory/${item._id}`);
      mutate();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div>
      <h2>Delete Item</h2>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteItem;
