import Item from "../Item/Item";
import * as S from "./styles";

const ListItems = ({ products }) => {
  return (
    <S.List>
      {products.map((product) => {
        return <Item product={product} key={product.id} />;
      })}
    </S.List>
  );
};

export default ListItems;
