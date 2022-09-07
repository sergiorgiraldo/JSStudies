import { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalesPage(props) {
	const [sales, setSales] = useState(props.sales);

	const { data, error } = useSWR(
		"https://nextjs-course-d43b3-default-rtdb.europe-west1.firebasedatabase.app/sales.json",
		(url) => fetch(url).then((res) => res.json())
	);

	useEffect(() => {
		if (data) {
			const transformedSales = [];
			for (const key in data) {
				transformedSales.push({
					id: key,
					username: data[key].username,
					volume: data[key].volume,
				});
			}
			setSales(transformedSales);
		}
	}, [data]);

	if (error) {
		return <p>Something bad happened .... {error}</p>;
	}

	if (!data && !sales) {
		return <p>Loading ....</p>;
	}

	return (
		<ul>
			{sales.map((s) => (
				<li key={s.id}>
					{s.username} bought {s.volume}
				</li>
			))}
		</ul>
	);
}

export async function getStaticProps() {
	const response = await fetch(
		"https://nextjs-course-d43b3-default-rtdb.europe-west1.firebasedatabase.app/sales.json"
	);
	const data = await response.json();

	const transformedSales = [];
	for (const key in data) {
		transformedSales.push({
			id: key,
			username: data[key].username,
			volume: data[key].volume,
		});
	}

	return { props: { sales: transformedSales }, revalidate: 10 };
}

export default LastSalesPage;
