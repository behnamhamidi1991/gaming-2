import { createContext, useState } from "react";
import { productions } from "../data";

interface ProductionInterface {
  id: string;
  title: string;
  text: string;
  image: string;
  price: number;
  offer: boolean;
  offPrice: number;
  percentage: string;
  rate: string;
  tags: string[];
}

export const GameContext = createContext({
  product: [] as ProductionInterface[],
  cart: [] as ProductionInterface[],
});

export const GameProvider = ({ children }: any) => {
  const [product, setProducts] = useState(productions);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((game) => {
      if (item.id === game.id) isPresent = true;
    });

    if (isPresent) {
      window.alert(
        "This game already exists in your shopping cart! Go to the cart page to handle the process."
      );
      return;
    } else {
      setCart([...cart, item]);
    }
  };

  return (
    <GameContext.Provider
      value={{
        product,
        cart,
        setProducts,
        handleClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
