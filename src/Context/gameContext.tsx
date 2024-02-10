import { createContext, useState } from "react";
import { productions } from "../data";

export const GameContext = createContext();

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
