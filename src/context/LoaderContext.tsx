import React, { createContext, useContext, useState } from "react";
import Loader from "../components/Loader";

type LoaderContextValue = {
  isLoading: boolean;
  triggerLoading: (callback?: () => void) => void;
};

const LoaderContext = createContext<LoaderContextValue | undefined>(undefined);

export const useLoader = (): LoaderContextValue => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within LoaderProvider");
  }
  return context;
};

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  // Function to trigger loader and navigate or just show loader
  const triggerLoading = (callback?: () => void) => {
    setIsLoading(true);
    // Custom delay time, can be parameterized
    setTimeout(() => {
      if (callback) callback();
      setIsLoading(false);
    }, 1800);
  };

  return (
    <LoaderContext.Provider value={{ isLoading, triggerLoading }}>
      {isLoading && <Loader />}
      {children}
    </LoaderContext.Provider>
  );
};
