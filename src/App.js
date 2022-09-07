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
import "./App.css"
//import UserProvider from "./context/HeaderContext";

function App() {
  return (
    <div className="App">
      <LoginContext>
        <RegisterProvider>
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
        </RegisterProvider>
      </LoginContext>
    </div>
  );
}

export default App;
