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
});

export const GameProvider = ({ children }: any) => {
  const [product, setProducts] = useState(productions);

  console.log(product);

  return (
    <GameContext.Provider
      value={{
        product,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
