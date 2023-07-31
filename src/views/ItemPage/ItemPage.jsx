import { useEffect, useState } from "preact/hooks";
import { useParams } from "react-router-dom";
import * as S from "./styles";
import { useCartDispatch } from "../../context/cartContext";
import Loading from "../../components/Loading/Loading";
import Description from "../../components/Description/Description";

const ItemPage = () => {
  const { productId } = useParams();
  const dispatchCart = useCartDispatch();
  const [product, setProduct] = useState();
  const [selectedDetails, setSelectedDetails] = useState({
    color: { code: "", name: "" },
    storage: { code: "", name: "" },
  });
  const [loading, setLoading] = useState(true);

  const handleChange = ({ target }) => {
    const value =
      target.name === "color"
        ? product.options.colors.find(
            (color) => color.code === Number(target.value)
          )
        : product.options.storages.find(
            (storage) => storage.code === Number(target.value)
          );
    setSelectedDetails({ ...selectedDetails, [target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://itx-frontend-test.onrender.com/api/cart", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        id: product.id,
        colorCode: selectedDetails.color.code,
        storageCode: selectedDetails.storage.code,
      }),
    })
      .then((response) => response.json()) //Como solo devuelve 1 no lo utilizo
      .then(() => {
        dispatchCart({
          type: "ADD_PRODUCT",
          payload: { ...selectedDetails, id: product.id },
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetch(`https://itx-frontend-test.onrender.com/api/product/${productId}`)
      .then(async (res) => await res.json())
      .then((res) => {
        setProduct(res);
        setSelectedDetails({
          color: res.options.colors[0],
          storage: res.options.storages[0],
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  return (
    <S.ItemPage>
      <section>
        <S.ImageContainer>
          <img src={product.imgUrl} alt={product.model} />
        </S.ImageContainer>
      </section>
      <section>
        <Description product={product} />
        <S.ActionContainer>
          <h2>Configura tu teléfono {product.model}:</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <label htmlFor="color">Color</label>
                <select
                  name="color"
                  value={selectedDetails.color.code}
                  onChange={handleChange}
                >
                  {product.options.colors.map((color) => {
                    return (
                      <option key={color.code} value={color.code}>
                        {color.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label htmlFor="storage">Almacenamiento</label>
                <select
                  name="storage"
                  value={selectedDetails.storage.code}
                  onChange={handleChange}
                >
                  {product.options.storages.map((storages) => {
                    return (
                      <option key={storages.code} value={storages.code}>
                        {storages.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <button type="submit">Añadir al carrito</button>
          </form>
        </S.ActionContainer>
      </section>
    </S.ItemPage>
  );
};

export default ItemPage;
