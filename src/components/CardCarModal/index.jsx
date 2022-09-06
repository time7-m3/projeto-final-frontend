import { CarDiv } from "./styles";
import { RentContext } from "../../context/RentContext";
import { useContext, useEffect, useRef } from "react";

export const CardCar = ({ car }) => {
  const { setIsModalOpen, isModalOpen } = useContext(RentContext);
  const modalRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (!modalRef.current.contains(e.target)) {
        // setIsModalOpen(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [setIsModalOpen]);

  const closeModal = () => {
    console.log("erro");
    setIsModalOpen(false);
  };

  return (
    <>
      {/* BOTÃO DE FECHAR MODAL */}

      <CarDiv ref={modalRef}>
        <div className="carImageBox">
          <img src={car.imagem} alt={car.marca} className="carImage" />
        </div>
        <div className="carTitle">
          {" "}
          <h1>{car.marca}</h1>
          <h2>{car.localizacao}</h2>
        </div>
        <div className="carDetails">
          <div className="carOwner">
            <div className="Right">
              <p>Proprietário:</p> <span>{car.userId}</span>
            </div>
            <div className="Left">
              <p>Valor:</p> <span>R${car.valor},00</span>
            </div>
          </div>
        </div>
        <div className="carPeriod">
          <p>Período:</p>
          <span>
            {car.período[0]} a {car.período[1]}
          </span>
        </div>
        <div className="carDescription">
          <p>Descrição:</p>
          <span>{car.descricao}</span>
        </div>
        <button>Alugar</button>
      </CarDiv>
    </>
  );
};
