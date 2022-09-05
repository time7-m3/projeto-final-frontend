
import "./App.css";
import Header from "./components/Dashboard/Header";
import { UserProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";


function App() {

  return (  
   
   <UserProvider>      
      <Header/>
      <Dashboard/>            
    </UserProvider>
  )
}

export default App;
