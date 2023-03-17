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
  const [mode, setMode] = useState("");

  if (error) return <div>Failed to load inventory</div>;
  if (!data) return <div>Loading...</div>;

  const handleItemSelect = (item, mode) => {
    setSelectedItem(item);
    setMode(mode);
  };

  const handleCancelEdit = () => {
    setSelectedItem(null, "");
  };

  const handleMutate = async () => {
    await mutate();
    setSelectedItem(null, "");
  };

  return (
    <div>
      <h1>Inventory Management</h1>
      <AddItem onMutate={handleMutate} />
      <InventoryList items={data} onItemSelect={handleItemSelect} />
      {selectedItem && mode =="E" && (
        <div>
          <EditItem item={selectedItem} onMutate={handleMutate} onCancel={handleCancelEdit} />
        </div>
      )}
      {selectedItem && mode == "D" &&(
        <div>
          <DeleteItem item={selectedItem} onMutate={handleMutate} onCancel={handleCancelEdit} />
        </div>
      )}
    </div>
  );
}
