import Global from "./styles/Global";
import RoutesMain from "./routes";
import RegisterProvider from "./context/RegisterContext";

import "./App.css";
import LoginContext from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import CarContext from "./context/CarContext";
import RentProvider from "./context/RentContext";

function App() {
  return (
    <div className="App">
      <LoginContext>
        <RegisterProvider>
          <CarContext>
            <RentProvider>
              <Toaster />
              <Global />
              <RoutesMain />
            </RentProvider>
          </CarContext>
        </RegisterProvider>
      </LoginContext>
    </div>
  );
}

export default App;
