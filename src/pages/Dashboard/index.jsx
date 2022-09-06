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
import { PaymentModal } from "../../components/PaymentModal";
import { DashboardContext } from "../../context/DashboardContext";
import Header from "./../../components/Dashboard/Header";

const Dashboard = () => {
  const [carros, setCarros] = useState([]);
  const {
    currentCar,
    setCurrentCar,
    isModalOpen,
    setIsModalOpen,
    isPayModal,
    setIsPayModal,
  } = useContext(RentContext);
  const {
    currentMarcaCar,
    setMarcaCurrentCar,
    currentModeloCar,
    setModeloCurrentCar,
    currentAnoCar,
    setAnoCurrentCar,
    currentCity,
    setCity,
    currentDateFrom,
    setCurrentDateFrom,
    currentDateTo,
    setCurrentDateTo,
  } = useContext(DashboardContext);

  async function getCarros() {
    await api.get("/cars", {}).then(({ data }) => {
      setCarros(
        data.filter((item) => {
          if (item.alugado === false) {
            return item;
          }
        })
      );
    });
  }
  useEffect(() => {
    getCarros();
  }, []);
  const [carsFiltrados, setCarsFiltrados] = useState([]);
  return (
    <Main>
      <Header />
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
            <DatePicker />
          </div>
          <div
            className="mainHeaderSearch"
            onClick={() => {
              setCarsFiltrados(
                carros.filter((elem) => {
                  //testes/
                  if (currentCity === "") {
                    return "";
                  } else {
                    if (elem.localizacao === currentCity) {
                      return elem;
                    }
                  }
                  return "";
                })
              );
              //setCity("");
            }}
          >
            <FiSearch />
          </div>
        </div>
      </div>
      <main>
        {isModalOpen && <CardCar car={currentCar} />}
        {isPayModal && <PaymentModal />}
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
