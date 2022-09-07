import btnClose from "../../assets/btnClose.svg";
import { RentContext } from "../../context/RentContext";
import { useContext, useEffect, useRef } from "react";
import { ModalBackground } from "../CardCarModal/styles";
import { PayDiv } from "./styles";
import group from "../../assets/group.svg";
import coin from "../../assets/bx_dollar-circle.svg";

export const PaymentModal = () => {
  const { setIsPayModal, setIsModalOpen, currentCar } = useContext(RentContext);
  const modalRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setIsPayModal(false);
        setIsModalOpen(true);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setIsPayModal]);

  const closeModal = () => {
    setIsPayModal(false);
    setIsModalOpen(true);
  };

  const doPay = (id) => {
    console.log(id);
    // setIsPayModal(false);
  };

  return (
    <>
      <ModalBackground />
      <PayDiv ref={modalRef}>
        <button
          className="btnCloseModal"
          onClick={() => {
            setIsModalOpen();
            closeModal();
          }}
        >
          <img src={btnClose} alt="close" />
        </button>
        <h1>QR CODE - PIX</h1>
        <div className="pixImageBox">
          <img src={group} alt="pix"></img>
        </div>
        <button className="btnPayment" onClick={() => doPay(currentCar.id)}>
          <img src={coin} alt="pagamento"></img>Pagamento efetuado
        </button>
      </PayDiv>
    </>
  );
};
