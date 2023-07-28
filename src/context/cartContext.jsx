import { createContext, useContext, useReducer } from "react";

const CartContext = createContext([]);
const CartDispatchContext = createContext(null);

export const useCart = () => useContext(CartContext);
export const useCartDispatch = () => useContext(CartDispatchContext);

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart }}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

const cartReducer = (cart, { type, payload }) => {
  switch (type) {
    case "ADD_PRODUCT":
      return [...cart, payload];
    default:
      return cart;
  }
};
