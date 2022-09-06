import { Card } from "./styles";
import { BiCalendar } from "react-icons/bi";
import { useContext } from "react";
import { RentContext } from "../../../context/RentContext";
export const Car = ({ car }) => {
  const { setIsModalOpen, setCurrentCar } = useContext(RentContext);
  return (
    <Card>
      <li className="cardMain" key={car.id}>
        <img src={car.imagem} alt="Img Card" />
        <div className="cardInfos">
          <div className="cardInfosCar">
            <div className="cardInfosCarName">{car.modelo}</div>
            <div className="cardInfosCarYear">{car.ano}</div>
            <div className="cardInfosCarPrice">R$ {car.valor}</div>
          </div>
          <div
            className="cardDate"
            onClick={() => {
              setCurrentCar(car);
              setIsModalOpen(true);
            }}
          >
            <BiCalendar />
          </div>
        </div>
      </li>
    </Card>
  );
};
