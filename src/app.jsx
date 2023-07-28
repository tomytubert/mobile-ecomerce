import { useContext } from "preact/hooks";
import ListItems from "./components/List/List";
import { ExpiringDataContext } from "./context/dataContext";

export function App() {
  const products = useContext(ExpiringDataContext);
  return <ListItems products={products.data} />;
}
