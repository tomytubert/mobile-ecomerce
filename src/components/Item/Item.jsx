import * as S from "./styles";

const Item = ({ product }) => {
  return (
    <S.Item>
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <div>
          <h2>{product.title}</h2>
          <p>{product.brand}</p>
        </div>
        <p>{product.price} €</p>
      </div>
      <p>{product.description}</p>
    </S.Item>
  );
};

export default Item;
