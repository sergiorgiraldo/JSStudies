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
  return {
    props: {
      products__: [
        { id: "P1", title: "Product 1" },
        { id: "P2", title: "Product 2" }
      ],
    },
  };
}

export default HomePage;
