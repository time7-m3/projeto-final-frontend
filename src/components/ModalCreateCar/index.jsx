import { Container } from "./styles";
import image from "../../assets/cadastro.jpg";
import Form from "./Form";

const ModalCreateCar = () => {
  return (
    <Container>
      <div className="box">
        <div className="div-image">
          <img src={image} alt="" />
        </div>
        <div className="div-form">
          <p>Cadastro de automóvel</p>
          <Form />
        </div>
      </div>
    </Container>
  );
};

export default ModalCreateCar;
