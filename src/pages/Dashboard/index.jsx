import { FiSearch } from "react-icons/fi";
import { Car } from "./../../components/Dashboard/car";
import DatePicker from "./../../components/Dashboard/date";
import Filters from "./../../components/Dashboard/filters";
import SelectSearch from "./../../components/Dashboard/select-city";
import { Main } from "./styles";
import { BiCalendar } from "react-icons/bi";
import api from "./../../services/api";
import { useState, useEffect, useContext } from "react";
import { RentContext } from "../../context/RentContext";
import { CardCar } from "./../../components/CardCarModal";
import { DashboardContext } from "../../context/DashboardContext";

const Dashboard = () => {
  const { currentCar, isModalOpen } = useContext(RentContext);
  const [carros, setCarros] = useState([]);
  const { currentCity } = useContext(DashboardContext);
  async function getCarros() {
    await api.get("/cars", {}).then(({ data }) => {
      // console.log("carrros", data);
      setCarros(data);
    });
  }
  useEffect(() => {
    getCarros();
  }, []);

  const [carsFiltrados, setCarsFiltrados] = useState([]);

  return (
    <Main>
      <header>header</header>
      <div className="mainHeader">
        <div className="mainHeaderLocation">
          <SelectSearch />
        </div>
        <div className="mainHeaderFilters">
          <Filters />
        </div>
        <div className="mainHeaderDateSearch">
          <div className="mainHeaderDates">
            <div className="mainHeaderDatesIcon">
              <BiCalendar />
            </div>
            <span>De:</span>
            <DatePicker />
            <span>Até:</span>
            <DatePicker />
          </div>

          <div
            className="mainHeaderSearch"
            onClick={() => {
              setCarsFiltrados(
                carros.filter((elem) => {
                  //testes//

                  if (currentCity === "") {
                    return "";
                  } else {
                    // console.log(elem.localizacao === currentCity);
                    if (elem.localizacao === currentCity) {
                      return elem;
                    }
                  }
                  return "";
                })
              );
            }}
          >
            <FiSearch />
          </div>
        </div>
      </div>
      <main>
        {isModalOpen && <CardCar car={currentCar} />}
        <ul>
          {carsFiltrados.length > 0
            ? carsFiltrados.map((item) => <Car car={item} key={item.id} />)
            : carros.map((item) => <Car car={item} key={item.id} />)}
        </ul>
      </main>
      <div className="loadMore" onClick={() => alert("carregar mais")}>
        Carregar mais...
      </div>
    </Main>
  );
};
export default Dashboard;
