import { createContext, useState } from "react";

export const GlobalContext = createContext();

export default function GlobalState({ children }) {
  const [first, setfirst] = useState('')
    
  return (
    <GlobalContext.Provider
      value={{
        
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
