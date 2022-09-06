import { createContext, useState } from "react";
export const DashboardContext = createContext({});
const DashboardProvider = ({ children }) => {
  const [currentMarcaCar, setMarcaCurrentCar] = useState("");
  const [currentModeloCar, setModeloCurrentCar] = useState("");
  const [currentAnoCar, setAnoCurrentCar] = useState(0);
  const [currentCity, setCity] = useState("");
  const [currentDateFrom, setCurrentDateFrom] = useState("");
  const [currentDateTo, setCurrentDateTo] = useState("");

  return (
    <DashboardContext.Provider
      value={{
        currentMarcaCar,
        setMarcaCurrentCar,
        currentModeloCar,
        setModeloCurrentCar,
        currentAnoCar,
        setAnoCurrentCar,
        currentCity,
        setCity,
        currentDateFrom,
        setCurrentDateFrom,
        currentDateTo,
        setCurrentDateTo,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
