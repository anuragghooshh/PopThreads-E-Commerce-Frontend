import { createContext } from "react";

interface CartContextValue {
  itemCount: number;
  setItemCount: React.Dispatch<React.SetStateAction<number>>;
  items: string[];
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
}

const CartContext = createContext<CartContextValue>({
  itemCount: 0,
  setItemCount: () => {},
  items: [],
  setItems: () => {},
});

export default CartContext;
