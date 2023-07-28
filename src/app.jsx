import { useContext } from "preact/hooks";
import ListItems from "./components/List/List";
import { ExpiringDataContext } from "./context/dataContext";
import Loading from "./components/Loading/Loading";

export function App() {
  const products = useContext(ExpiringDataContext);

  if (!products.data.length) return <Loading />;
  return <ListItems products={products.data} />;
}
