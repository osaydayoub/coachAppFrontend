import { createContext, useContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [clientsData, setClientsData] = useState(null);
  const [workoutsData, setWorkoutsData] = useState(null);
  const getWorkouts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_LINK}/coach/workouts`
      );
      setWorkoutsData(response.data);

    } catch (error) {
      console.log("error in get workouts");
    }
  };
  const getClients = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_LINK}/coach/clients`
      );
      setClientsData(response.data);

    } catch (error) {
      console.log("error in get Clients");
    }
  };

  const value = {
    clientsData,
    setClientsData,
    getClients,
    workoutsData,
    setWorkoutsData,
    getWorkouts,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
