import { useContext } from "preact/hooks";
import ListItems from "./components/List/List";
import Header from "./components/Header/Header";
import { ExpiringDataContext } from "./context/dataContext";

export function App() {
  const products = useContext(ExpiringDataContext);

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then(async (res) => await res.json())
  //     .then((res) => {
  //       setProducts(res.products);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);


  return (
    <>
      <Header />
      <ListItems products={products.data} />
    </>
  );
}
