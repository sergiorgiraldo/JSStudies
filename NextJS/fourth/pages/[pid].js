import { Fragment } from "react";
import fs from "fs/promises"; //i can use the filesystem if I am accessing from the server
import path from "path";

function ProductDetailPage(props) {
  const { loadedProduct } = props;

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const filePath = path.join(process.cwd(), "data/dummy-backend.json"); //cwd() points to root folder
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((p) => p.id === productId);

  return {
    props: { loadedProduct: product },
  };
}

export async function getStaticPaths() {
    return {
        paths:[
            {params: {pid:"p1"}},
            {params: {pid:"p2"}},
            {params: {pid:"p3"}},
        ],
        fallback: false
    }
}

export default ProductDetailPage;
