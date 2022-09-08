import Global from "./styles/Global";
import RoutesMain from "./routes";
import RegisterProvider from "./context/RegisterContext";

import "./App.css";
import LoginContext from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import CarContext from "./context/CarContext";
import RentProvider from "./context/RentContext";
import DashboardProvider from "./context/DashboardContext";
import { UserProvider } from "./context/HeaderContext";
import ProfileProvider from "./context/ProfileContext";
//import UserProvider from "./context/HeaderContext";

function App() {
  return (
    <div className="App">
      <LoginContext>
        <RegisterProvider>
          <ProfileProvider>
            <CarContext>
              <RentProvider>
                <DashboardProvider>
                  <UserProvider>
                    <Toaster />
                    <Global />
                    <RoutesMain />
                  </UserProvider>
                </DashboardProvider>
              </RentProvider>
            </CarContext>
          </ProfileProvider>
        </RegisterProvider>
      </LoginContext>
    </div>
  );
}

export default App;
