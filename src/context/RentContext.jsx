import { createContext, useState } from "react";
export const RentContext = createContext({});
const RentProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <RentContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </RentContext.Provider>
  );
};

export default RentProvider;
