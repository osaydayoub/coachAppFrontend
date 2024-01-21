import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [clients, setClients] = useState(null);
  const [workouts, setWorkouts] = useState(null);

  const value = {
    clients,
    setClients,
    workouts,
    setWorkouts,
  };
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}