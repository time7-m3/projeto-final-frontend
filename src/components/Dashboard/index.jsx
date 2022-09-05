import { FiSearch } from "react-icons/fi";
import { Car } from "./components/car";
import DatePicker from "./components/date";
import Filters from "./components/filters";
import SelectSearch from "./components/select-city/index";
import { Main } from "./style";
import { BiCalendar } from "react-icons/bi";
import api from "../../services/api";
import { useState, useEffect, useContext } from "react";
import { RentContext } from "../../context/RentContext";
import { CardCar } from "./../CardCarModal";

export default function Dashboard() {
  const [carros, setCarros] = useState([]);
  const { currentCar, setCurrentCar, isModalOpen, setIsModalOpen } =
    useContext(RentContext);
  async function getCarros() {
    await api.get("/cars", {}).then(({ data }) => {
      // console.log("carrros", data);
      setCarros(data);
    });
  }
  useEffect(() => {
    getCarros();
  }, []);
  //console.log("asfdfa", carros);
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
        <div className="mainHeaderDates">
          <div className="mainHeaderDatesIcon">
            <BiCalendar />
          </div>
          <span>De:</span>
          <DatePicker />
          <span>Até:</span>
          <DatePicker />
        </div>
        <div className="mainHeaderSearch">
          <FiSearch />
        </div>
      </div>
      <main>
        {isModalOpen && <CardCar car={currentCar} />}
        <ul>
          {carros.map((item) => (
            <Car car={item} />
          ))}
        </ul>
      </main>
    </Main>
  );
}
