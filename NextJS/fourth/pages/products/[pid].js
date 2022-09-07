import { Fragment } from "react";
import fs from "fs/promises"; //i can use the filesystem if I am accessing from the server
import path from "path";

function ProductDetailPage(props) {
	const { loadedProduct } = props;

	if (!loadedProduct) {
		return <p>Loading ...</p>;
	}

	return (
		<Fragment>
			<h1>{loadedProduct.title}</h1>
			<p>{loadedProduct.description}</p>
		</Fragment>
	);
}

async function GetData() {
	const filePath = path.join(process.cwd(), "data/dummy-backend.json"); //cwd() points to root folder
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData);
	return data;
}

export async function getStaticProps(context) {
	const { params } = context;
	const productId = params.pid;

	const data = await GetData();

	const product = data.products.find((p) => p.id === productId);

	if (!product) {
		return { notFound: true }; //redirects to 404
	}

	return {
		props: { loadedProduct: product },
	};
}

export async function getStaticPaths() {
	const data = await GetData();
	const ids = data.products.map((p) => p.id);
	const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));
	return {
		paths: pathsWithParams,
		fallback: true,
	};
}

export default ProductDetailPage;
