import React, { useContext, useState } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLoggedInGlobal, setIsLoggedInGlobal] = useState(false);
  const [userData] = useState(null);
  const [restData, setResData] = useState([]);
  const [searchInput, setSearchInput] = useState(null);
  const [currentId, setCurrentid] = useState(0);

  const openModal = () => {
    setIsModelOpen(true);
  };

  const dataSetting = (data) => {
    setResData(data);
  };

  return (
    <GlobalContext.Provider
      value={{
        isModelOpen,
        setIsModelOpen,
        openModal,
        isLoggedInGlobal,
        setIsLoggedInGlobal,
        searchInput,
        setSearchInput,
        dataSetting,
        currentId,
        setCurrentid,
        restData,
        setResData
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
