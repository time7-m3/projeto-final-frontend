import LoginContext from "../../context/AuthContext";
import CarContext from "../../context/CarContext";
import DashboardProvider from "../../context/DashboardContext";
import { UserProvider } from "../../context/HeaderContext";
import RegisterProvider from "../../context/RegisterContext";
import RentProvider from "../../context/RentContext";

const Providers = ({ children }) => {
  return (
    <>
      <LoginContext>
        <RegisterProvider>
          <CarContext>
            <RentProvider>
              <DashboardProvider>
                <UserProvider>{children}</UserProvider>
              </DashboardProvider>
            </RentProvider>
          </CarContext>
        </RegisterProvider>
      </LoginContext>
    </>
  );
};

export default Providers;
