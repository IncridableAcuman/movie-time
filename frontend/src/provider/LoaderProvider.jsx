import React, { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);
  return (
    <>
      <LoaderContext.Provider value={{ isLoading, startLoading, stopLoading }}>
        {children}
      </LoaderContext.Provider>
    </>
  );
};

export const UseLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("UseLoader must be used inside LoaderProvider");
  }
  return context ? context : null;
};
