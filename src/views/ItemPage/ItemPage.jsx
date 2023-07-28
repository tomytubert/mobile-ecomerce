import { useEffect, useState } from "preact/hooks";
import { useParams } from "react-router-dom";
import * as S from "./styles";
import { useCartDispatch } from "../../context/cartContext";

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

  if (loading) return <p>loading...</p>;
  return (
    <S.ItemPage>
      <section>
        <S.ImageContainer>
          <img src={product.imgUrl} alt={product.model} />
        </S.ImageContainer>
      </section>
      <section>
        <S.DetailsContainer>
          <div>
            <div>
              <h1>{product.model}</h1>
              <h2>{product.brand}</h2>
            </div>
            <p>{product.price}€</p>
          </div>
          <h3>Detalles:</h3>
          <ul>
            <li>
              <h4>
                <span>CPU:</span> {product.cpu}
              </h4>
            </li>
            <li>
              <h4>
                <span>RAM:</span> {product.ram}
              </h4>
            </li>
            <li>
              <h4>
                <span>Sistema operativo:</span> {product.os}
              </h4>
            </li>
            <li>
              <h4>
                <span>Resolución de pantalla:</span> {product.displaySize}
              </h4>
            </li>
            <li>
              <h4>
                <span>Batería:</span> {product.battery}
              </h4>
            </li>
            <li>
              <h4>
                <span>Dimensiones:</span> {product.dimentions}
              </h4>
            </li>
            <li>
              <h4>
                <span>Peso:</span> {product.weight} g
              </h4>
            </li>
          </ul>
        </S.DetailsContainer>
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
