// pages/index.js
import { useState } from "react";
import useSWR from "swr";
import axios from "axios";
import InventoryList from "../components/InventoryList";
import AddItem from "../components/AddItem";
import EditItem from "../components/EditItem";
import DeleteItem from "../components/DeleteItem";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function Home() {
  const { data, error, mutate } = useSWR("/api/inventory", fetcher);
  const [selectedItem, setSelectedItem] = useState(null);

  if (error) return <div>Failed to load inventory</div>;
  if (!data) return <div>Loading...</div>;

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  const handleCancelEdit = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <h1>Inventory Management</h1>
      <AddItem onMutate={mutate} />
      <InventoryList items={data} onItemSelect={handleItemSelect} />
      {selectedItem && (
        <div>
          <EditItem item={selectedItem} onMutate={mutate} onCancel={handleCancelEdit} />
          <DeleteItem item={selectedItem} onMutate={mutate} onCancel={handleCancelEdit} />
        </div>
      )}
    </div>
  );
}
