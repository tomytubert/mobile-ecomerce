import { useEffect, useState } from "preact/hooks";
import ListItems from "./components/List/List";
import Header from "./components/Header/Header";

export function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(async (res) => await res.json())
      .then((res) => {
        setProducts(res.products);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log("products :>> ", products[0]);
  return (
    <>
      <Header />
      <ListItems products={products} />
    </>
  );
}
