import Global from "./styles/Global";
import RoutesMain from "./routes";
import RegisterProvider from "./context/RegisterContext";

import "./App.css";
import LoginContext from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import RentProvider from "./context/RentContext";

function App() {
  return (
    <div className="App">
      <LoginContext>
        <RegisterProvider>
          <RentProvider>
            <Toaster />
            <Global />
            <RoutesMain />
          </RentProvider>
        </RegisterProvider>
      </LoginContext>
    </div>
  );
}

export default App;
