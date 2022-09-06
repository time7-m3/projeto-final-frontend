import { PerfilMain } from "./styles";
import btnClose from "../../../assets/btnClose.svg";
import removeIcon from "../../../assets/removeIcon.svg";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";

import { editUserSchema } from "../../../validator/editUserSchema";
import { ProfileContext } from "../../../context/ProfileContext";

const ModalPerfil = () => {
  const user = {
    carrosAlugados: [],
    carrosCadastrados: [
      { id: 1, marca: "ford", modelo: "kenzie" },
      { id: 2, marca: "ford", modelo: "kenzie" },
    ],
    confirmPassword: "123456",
    email: "bruno@gmail.com",
    id: 6,
    imagem: "https://static-cse.canva.com/blob/759723/DrobotDeanCanva.jpg",
    name: "Bruno Sergio",
    telefone: "12985444785",
  };

  const { editUser, closeModal, deleteCar } = useContext(ProfileContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editUserSchema),
  });

  return (
    <PerfilMain>
      <button className="btnCloseModal" onClick={closeModal}>
        <img src={btnClose} alt="" />
      </button>
      <button className="btnImagePerfil">
        <img src={user.imagem} alt={user.name} />
      </button>
      <h1>Perfil</h1>
      <h2>Nome</h2>
      <p>{user.name}</p>
      <h2>E-mail</h2>
      <p>{user.email}</p>
      <h2>Telefone</h2>
      <p>{user.telefone}</p>
      <form className="userInputs" onSubmit={handleSubmit(editUser)}>
        {/* <h2>
          Imagem
          <button className="btnEdit" onClick={editName}>
            {name}
          </button>
        </h2>
        {editableImage && (
          <>
            <input
              type="text"
              // value={name}
              placeholder="Digite um novo nome"
              // onChange={(e) => setName(e.target.value)}
              {...register("name")}
            />
            <span className="errorsSpan">{errors.name?.message}</span>
          </>
        )} */}

        {user.carrosCadastrados.length > 0 && (
          <>
            <p>Meus carros:</p>
            <div className="listaCarros">
              {user.carrosCadastrados.map((elem) => (
                <div className="itemCarro">
                  <img scr={elem.imagem} />
                  <button className="btnRemoveCarro" onClick={deleteCar}>
                    <img src={removeIcon} />
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
        <button type="submit" className="btnSalvar">
          Salvar
        </button>
      </form>
    </PerfilMain>
  );
};
export default ModalPerfil;
