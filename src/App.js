import Global from "./styles/Global";
import RoutesMain from "./routes";
import RegisterProvider from "./context/RegisterContext";

import "./App.css";
import LoginContext from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import CarContext from "./context/CarContext";
import RentProvider from "./context/RentContext";
import DashboardProvider from "./context/DashboardContext";

function App() {
  return (
    <div className="App">
      <LoginContext>
        <RegisterProvider>
          <CarContext>
            <RentProvider>
              <DashboardProvider>
                <Toaster />
                <Global />
                <RoutesMain />
              </DashboardProvider>
            </RentProvider>
          </CarContext>
        </RegisterProvider>
      </LoginContext>
    </div>
  );
}

export default App;
