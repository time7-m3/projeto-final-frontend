import { FiSearch } from "react-icons/fi";
import { IoReload } from "react-icons/io5";
import { Car } from "./../../components/Dashboard/car";
import DatePicker from "./../../components/Dashboard/date";
import Filters from "./../../components/Dashboard/filters";
import SelectSearch from "./../../components/Dashboard/select-city";
import { Main } from "./styles";
import { BiCalendar } from "react-icons/bi";
import api from "./../../services/api";
import { useState, useEffect, useContext, useMemo } from "react";
import { RentContext } from "../../context/RentContext";
import { CardCar } from "./../../components/CardCarModal";
import { PaymentModal } from "../../components/PaymentModal";
import { DashboardContext } from "../../context/DashboardContext";
import Header from "./../../components/Dashboard/Header";
import CarContext, { AuthCarContext } from "../../context/CarContext";
import ModalCreateCar from "../../components/ModalCreateCar";
import { AuthContext } from "../../context/AuthContext";
import ModalLogin from "../../components/ModalLogin";
import { toast } from "react-hot-toast";
const Dashboard = () => {
  const [carros, setCarros] = useState([]);
  const { isModalCar } = useContext(AuthCarContext);
  const { isModalLogin } = useContext(AuthContext);
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
  const filtrando = (obj) => {
    const newCarsFilters = obj.filter((elem) => {
      console.log(elem.city === currentCity);
      console.log(elem.city, currentCity);
      if (elem.localizacao === currentCity) {
        return elem;
      }
      return;
    });
    console.log("filtro", newCarsFilters);
    if (newCarsFilters.length === 0) {
      toast.error("Indisponível");
    } else if (newCarsFilters.length == 1) {
      toast.success("Carro disponível");
    } else {
      toast.success("Carros disponíveis");
    }
    return newCarsFilters;
  };
  async function getCarros() {}
  useEffect(() => {
    api.get("/cars", {}).then(({ data }) => {
      setCarros(
        data.filter((item) => {
          if (item.alugado === false) {
            return item;
          }
        })
      );
    });
  }, [carros]);
  const [carsFiltrados, setCarsFiltrados] = useState([]);
  const [numItem, setNumItem] = useState(6);
  const showMore = () => {
    if (numItem + 1 <= carros.length) {
      setNumItem(numItem + 1);
    } else {
      setNumItem(carros.length);
      toast.error("Todos os carros disponíveis já foram carregados!");
    }
  };
  const itemsToShow = useMemo(() => {
    return carsFiltrados.length > 0
      ? carsFiltrados
          .slice(0, numItem)
          .map((item) => <Car car={item} key={item.id} />)
      : carros
          .slice(0, numItem)
          .map((item) => <Car car={item} key={item.id} />);
  }, [carros, carsFiltrados, numItem]);
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
              console.log(
                currentCity,
                currentMarcaCar,
                currentModeloCar,
                currentAnoCar
              );
              setCarsFiltrados(filtrando(carros));
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
        {isModalCar && <ModalCreateCar />}
        {isModalLogin && <ModalLogin />}
        <ul>
          {itemsToShow.length ? (
            itemsToShow
          ) : (
            <IoReload onClick={(e) => e.preventDefault()} />
          )}
        </ul>
        {/* <ul>
          {carsFiltrados.length > 0
            ? carsFiltrados.map((item) => <Car car={item} key={item.id} />)
            : carros.map((item) => <Car car={item} key={item.id} />)}
        </ul> */}
      </main>
      <div className="loadMore" onClick={() => showMore()}>
        Carregar mais...
      </div>
    </Main>
  );
};
export default Dashboard;
