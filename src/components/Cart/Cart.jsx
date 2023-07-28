import { useCart } from "../../context/cartContext";
import Bag from "../Icons/Bag/Bag";
import * as S from "./styles";

const Cart = () => {
  const { cart } = useCart();
  console.log("cart :>> ", cart);

  return (
    <S.CartContainer>
      <Bag />
      {cart.length > 0 && <span>{cart.length}</span>}
    </S.CartContainer>
  );
};

export default Cart;
