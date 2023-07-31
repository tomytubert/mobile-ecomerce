import ListItems from "./components/List/List";
import { useData, useDataDispatch } from "./context/dataContext";
import Loading from "./components/Loading/Loading";
import { useEffect, useState } from "preact/hooks";
import Search from "./components/Search/Search";
import * as S from "./styles/homeStyles";

export function App() {
  const { data } = useData();
  const dispatchData = useDataDispatch();
  const expiringData = localStorage.getItem("expiringData");
  const [filterBy, setFilterBy] = useState("");

  const handleChange = ({ target }) => {
    setFilterBy(target.value);
  };

  const dataFiltered =
    data.length &&
    data.filter(
      (product) =>
        product.brand.toLowerCase().includes(filterBy.toLowerCase()) ||
        product.model.toLowerCase().includes(filterBy.toLowerCase())
    );

  const fetchData = () => {
    return fetch("https://itx-frontend-test.onrender.com/api/product")
      .then(async (res) => await res.json())
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(async () => {
    const { expirationTime } = JSON.parse(expiringData);
    if (Date.now() > expirationTime) {
      const newData = await fetchData();
      dispatchData({ type: "UPDATE_DATA", payload: newData });
    }
  }, []);

  if (!data.length) return <Loading />;
  return (
    <S.MainContainer>
      <div>
        <Search handleChange={handleChange} value={filterBy} />
      </div>
      <ListItems products={dataFiltered} />
    </S.MainContainer>
  );
}
