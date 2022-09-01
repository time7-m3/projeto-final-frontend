import { RegContainer } from "./styles";
import imageRegister from "../../assets/imageRegister.jpg";

import { registerSchema } from "../../validators/registerSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const navigate = useNavigate();

  return (
    <RegContainer>
      <div className="divImage">
        <img src={imageRegister} />
      </div>
      <div className="registerInputs">
        <h1>Cadastre-se</h1>
        <form handleSubmit={handleSubmit}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome completo"
            {...register("name")}
          />
          <span className="errorsSpan">{errors.name?.message}</span>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Digite seu email"
            {...register("email")}
          />
          <span className="errorsSpan">{errors.email?.message}</span>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <span className="errorsSpan">{errors.password?.message}</span>
          <label htmlFor="confirmPassword">Confirmas senha</label>
          <input
            type="password"
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
          />
          <span className="errorsSpan">{errors.confirmPassword?.message}</span>
          <label htmlFor="telefone">Telefone</label>
          <input
            type="number"
            placeholder="Digite seu telefone"
            {...register("telefone")}
          />
          <span className="errorsSpan">{errors.telefone?.message}</span>
          <button>Cadastrar</button>
        </form>
        <div className="divUserExist">
          <span>Já tem cadastro?</span>
          <button className="btnBack" onClick={() => navigate("/dashboard")}>
            Voltar
          </button>
        </div>
      </div>
    </RegContainer>
  );
};

export default Register;
