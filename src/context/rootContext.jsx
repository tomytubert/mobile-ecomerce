import { CartProvider } from "./cartContext";
import { DataProvider } from "./dataContext";

export default function RootContext({ children }) {
  return (
    <>
      <DataProvider>
        <CartProvider>{children}</CartProvider>
      </DataProvider>
    </>
  );
}
