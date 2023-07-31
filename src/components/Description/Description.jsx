import * as S from "./styles";

const Description = ({product}) => {
  return (
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
  );
};

export default Description;
