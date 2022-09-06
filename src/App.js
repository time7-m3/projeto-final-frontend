import Global from "./styles/Global";
import RoutesMain from "./routes";
import RegisterProvider from "./context/RegisterContext";

import "./App.css";
import LoginContext from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import CarContext from "./context/CarContext";

function App() {
  return (
    <div className="App">
      <LoginContext>
        <RegisterProvider>
          <CarContext>
            <Toaster />
            <Global />
            <RoutesMain />
          </CarContext>
        </RegisterProvider>
      </LoginContext>
    </div>
  );
}

export default App;
