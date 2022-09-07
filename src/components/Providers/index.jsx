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
          <RentProvider>
            <CarContext>
              <DashboardProvider>
                <UserProvider>{children}</UserProvider>
              </DashboardProvider>
            </CarContext>
          </RentProvider>
        </RegisterProvider>
      </LoginContext>
    </>
  );
};

export default Providers;
