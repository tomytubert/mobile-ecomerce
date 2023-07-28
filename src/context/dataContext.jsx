import { createContext, useState, useEffect } from "react";

const ExpiringDataContext = createContext();

const ExpiringDataProvider = ({ children }) => {
  const expirationTime = 3600000;

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

  const [data, setData] = useState({ data: [], expirationTime: 0 });

  const saveDataWithExpiration = (data) => {
    setData({ data, expirationTime: Date.now() + expirationTime });
  };

  const getValidData = async () => {
    const expiringData = data;
    if (expiringData.data.length) {
      const { data, expirationTime } = expiringData;
      if (Date.now() < expirationTime) {
        setData({ data, expirationTime });
      } else {
        const newData = fetchData();
        saveDataWithExpiration(newData);
      }
    } else {
      const newData = await fetchData();
      saveDataWithExpiration(newData);
    }
  };

  useEffect(() => {
    getValidData();
  }, []);

  return (
    <ExpiringDataContext.Provider value={data}>
      {children}
    </ExpiringDataContext.Provider>
  );
};

export { ExpiringDataContext, ExpiringDataProvider };
