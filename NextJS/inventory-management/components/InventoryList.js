// components/InventoryList.js
import React from "react";

const InventoryList = ({ items, onItemSelect }) => {
	return (
		<div>
			<h2>Inventory Items</h2>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Quantity</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{items.map((item) => (
						<tr key={item.id}>
							<td>{item.name}</td>
							<td>{item.quantity}</td>
							<td>
								<button onClick={() => onItemSelect(item)}>
									Edit/Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default InventoryList;
