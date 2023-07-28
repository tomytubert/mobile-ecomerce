import { Link } from "react-router-dom";
import * as S from "./styles";

const Item = ({ product }) => {
  return (
    <S.Item>
      <Link to={`/${product.id}`}>
        <img src={product.imgUrl} alt={product.model} />
        <div>
          <div>
            <h2>{product.model}</h2>
            <p>{product.brand}</p>
          </div>
          <p>{product.price || 0} €</p>
        </div>
      </Link>
    </S.Item>
  );
};

export default Item;
