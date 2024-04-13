import React, { useState, useContext, ReactNode } from "react";

interface AppContextType {
  confirmation: any;
  setConfirmation: React.Dispatch<React.SetStateAction<any>>;
  userPhoneNumber: any;
  setUserPhoneNumber: React.Dispatch<React.SetStateAction<any>>;
}

const AppContext = React.createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [confirmation, setConfirmation] = useState<any>(null);
  const [userPhoneNumber, setUserPhoneNumber] = useState<any>(null);

  const value = {
    confirmation,
    setConfirmation,
    userPhoneNumber,
    setUserPhoneNumber,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
}
