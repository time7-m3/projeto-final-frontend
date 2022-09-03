import { ContainerForm } from "./styles";
import down from "../../../assets/down.png";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ContainerForm onSubmit={handleSubmit(onSubmit)}>
      <div className="selects">
        <select
          name="marca"
          id=""
          required
          style={{
            backgroundImage: `url(${down})`,
            backgroundRepeat: "no-repeat",
          }}
          {...register("marca")}
        >
          <option>Marca</option>
          <option value="Fiat">Fiat</option>
          <option value="Renault">Renault</option>
          <option value="Audi">Audi</option>
        </select>
        <select
          name="modelo"
          id=""
          required
          style={{
            backgroundImage: `url(${down})`,
            backgroundRepeat: "no-repeat",
          }}
          {...register("modelo")}
        >
          <option>Modelo</option>
          <option value="Toro">Toro</option>
          <option value="Kwid">Kwid</option>
          <option value="A3">A3</option>
        </select>
        <select
          name="ano"
          id=""
          required
          style={{
            backgroundImage: `url(${down})`,
            backgroundRepeat: "no-repeat",
          }}
          {...register("ano")}
        >
          <option>Ano</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
        </select>
      </div>
      <div className="div-dates-money">
        <div className="dates">
          <p className="texto-de">De:</p>
          <input
            className="input-date"
            type="date"
            name=""
            id=""
            {...register("data1")}
          />
          <p className="texto-ate">Até:</p>
          <input
            className="input-date"
            type="date"
            name=""
            id=""
            {...register("data2")}
          />
        </div>
        <div className="money">
          <p className="texto-money">R$</p>
          <input
            className="input-money"
            type="number"
            placeholder="00.00"
            {...register("valor")}
          />
        </div>
      </div>
      <input
        type="text"
        className="url"
        placeholder="Cole aqui a url da imagem"
        {...register("imagem")}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Digite uma descrição..."
        {...register("descricao")}
      ></textarea>
      <button className="button-form" type="submit">
        Cadastrar
      </button>
    </ContainerForm>
  );
};

export default Form;
