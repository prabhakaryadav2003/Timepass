import React, { useContext, useState } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLoggedInGlobal, setIsLoggedInGlobal] = useState(false);
  const [userData] = useState(null);
  const openModal = () => {
    setIsModelOpen(true);
  };

  return (
    <GlobalContext.Provider
      value={{
        isModelOpen,
        setIsModelOpen,
        openModal,
        isLoggedInGlobal,
        setIsLoggedInGlobal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const GlobalGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};

export { GlobalProvider, GlobalContext };
