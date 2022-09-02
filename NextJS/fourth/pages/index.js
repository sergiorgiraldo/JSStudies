import fs from "fs/promises"; //i can use the filesystem if I am accessing from the server
import path from "path";

function HomePage(props) {
  const { products__ } = props;
  return (
    <ul>
      {
        products__.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))
      }
    </ul>
  );
}

export async function getStaticProps() {
  console.log("Re-generate");
  const filePath = path.join(process.cwd(), "data/dummy-backend.json"); //cwd() points to root folder
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products__: data.products
    },
    revalidate: 10
  };
}

export default HomePage;
