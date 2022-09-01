import Global from "./styles/Global";
import RoutesMain from "./routes";
import RegisterProvider from "./context/RegisterContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <RegisterProvider>
        <Global />
        <RoutesMain />
      </RegisterProvider>
    </div>
  );
}

export default App;
