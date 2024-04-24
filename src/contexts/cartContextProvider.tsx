import { useState } from "react";
import CartContext from "./cartContext";

const CartContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [itemCount, setItemCount] = useState<number>(0);
  const [items, setItems] = useState<string[]>([]);

  return (
    <CartContext.Provider value={{ itemCount, setItemCount, items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
