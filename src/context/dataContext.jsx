import { useContext, useReducer } from "preact/hooks";
import { createContext, useEffect } from "react";

const DataContext = createContext([]);
const DataDispatchContext = createContext(null);
const expirationTime = 1000 * 60 * 60;

export const useData = () => useContext(DataContext);
export const useDataDispatch = () => useContext(DataDispatchContext);


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


export const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(dataReducer, []);

  useEffect(async () => {
    const newData = await fetchData();
    dispatch({ type: "FETCH_DATA", payload: newData });
    localStorage.setItem(
      "expiringData",
      JSON.stringify({ expirationTime: Date.now() + expirationTime })
    );
  }, []);

  return (
    <DataContext.Provider value={{data}}>
      <DataDispatchContext.Provider value={dispatch}>
      {children}
      </DataDispatchContext.Provider>
    </DataContext.Provider>
  );
};

const dataReducer = (data, { type, payload }) => {
  switch (type) {
    case "FETCH_DATA":
      return [...payload];
    case "UPDATE_DATA":
      localStorage.setItem(
        "expiringData",
        JSON.stringify({ expirationTime: Date.now() + expirationTime })
      );
      return [...payload]
    default:
      return data;
  }
};