import { createContext, useState } from "react";

export const GlobalContext = createContext();

export default function GlobalState({ children }) {
  const [user , setUser] = useState({});
  const [captain , setCaptain] = useState({});
  const [isLoading , setIsLoading ] = useState(false);
    
  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        captain, 
        setCaptain,
        setIsLoading,
        isLoading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
