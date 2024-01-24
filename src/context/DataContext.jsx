import { createContext, useContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [clientsData, setClientsData] = useState(null);
  const [workoutsData, setWorkoutsData] = useState(null);
  const [currentClient, setCurrentClient] = useState(null);
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

  const addPackage = async (id, packageObj) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_LINK}/coach/clients/assignPackage/${id}`,
        {
          numberOfWorkouts: packageObj.numberOfWorkouts,
          totalCost: packageObj.totalCost,
          paidAmount: packageObj.paidAmount,
          caloricIntake: packageObj.caloricIntake,
        }
      );
      //console.log(response.data);
      await getClients();
    } catch (error) {
      console.log("error in addPackage");
    }
  };

  const getCurrentClient = async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_LINK}/coach/clients/${id}`
      );
      setCurrentClient(response.data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      // throw new Error(error.)
    }
  };

  const createWorkout = async (workout) => {
    // console.log("createWorkout");
    try {
      console.log(workout);
      const response = await axios.post(
        `${import.meta.env.VITE_API_LINK}/coach/workouts`,
        {
          exercise: workout.exercise,
          date: workout.date,
          clientID: workout.clientID,
        }
      );
      // console.log(response.data);
      await getWorkouts();
    } catch (error) {
      console.log("error in createWorkout");
    }
  };

  const addDailyTracking = async (id, trackingObj) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_LINK}/coach/clients/dailyTracking/${id}`,
        {
          date: trackingObj.date,
          calories: trackingObj.calories,
          waterAmount: trackingObj.waterAmount,
          sleepHours: trackingObj.sleepHours,
        }
      );
      console.log(response.data);
      // await getCurrentClient(id);
    } catch (error) {
      console.log("error in addPackage");
    }
  };

  const value = {
    currentClient,
    setCurrentClient,
    getCurrentClient,
    clientsData,
    setClientsData,
    getClients,
    workoutsData,
    setWorkoutsData,
    getWorkouts,
    addPackage,
    createWorkout,
    addDailyTracking,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

// {
//   exercise: workout.exercise,
//   date: workout.date,
//   clientID: workout.clientID,
// }
