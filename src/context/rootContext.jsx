import { CartProvider } from "./cartContext";
import { ExpiringDataProvider } from "./dataContext";

export default function RootContext({ children }) {
  return (
    <>
      <ExpiringDataProvider>
        <CartProvider>{children}</CartProvider>
      </ExpiringDataProvider>
    </>
  );
}
