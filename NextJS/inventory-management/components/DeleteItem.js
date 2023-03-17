// components/DeleteItem.js
import { useState } from "react";
import axios from "axios";

const DeleteItem = ({ item, onMutate }) => {
	const [id, _] = useState(item.id);
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.delete("/api/inventory/", { data: { id } });
			onMutate();
		} catch (error) {
			console.error("Error deleting item:", error);
		}
	};

	return (
		<div>
			<h2>Delete Item</h2>
			<form onSubmit={handleSubmit}>
				<button type="submit">Delete</button>
			</form>
		</div>
	);
};

export default DeleteItem;
