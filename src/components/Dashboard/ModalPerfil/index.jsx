import { PerfilMain } from "./styles";
import btnClose from "../../../assets/btnClose.svg";
import removeIcon from "../../../assets/removeIcon.svg";

const ModalPerfil = ({ user }) => {
  return (
    <PerfilMain>
      <button className="btnCloseModal">
        <img src={btnClose} alt="" />
      </button>
      <button className="btnImagePerfil">
        {/* <img src={user.imagem} alt={user.name} /> */}
      </button>
      <h1>Perfil</h1>
      <form className="userInputs">
        <input
          type="text"
          // value={user.name}
          placeholder="{user.name}"
        />
        <input
          type="text"
          // value={user.email}
          placeholder="{user.email}"
        />
        <input
          type="password"
          //   value={user.password}
          placeholder="{user.password}"
        />
        <input
          type="number"
          //   value={user.telefone}
          placeholder="{user.telefone}"
        />
        <p>Meus carros:</p>
        <div className="listaCarros">
          <div className="itemCarro">
            <img />
            <button className="btnRemoveCarro">
              <img src={removeIcon} />
            </button>
          </div>
          <div className="itemCarro">
            <img />
            <button className="btnRemoveCarro">
              <img src={removeIcon} />
            </button>
          </div>
          <div className="itemCarro">
            <img />
            <button className="btnRemoveCarro">
              <img src={removeIcon} />
            </button>
          </div>
          {/* {user.carrosCadastrados.map((elem) => (
            <div className="itemCarro">
            <img scr={elem.imagem}/>
            <button className="btnRemoveCarro">
              <img src={removeIcon} />
            </button>
          </div>
          ))} */}
        </div>
        <button className="btnSalvar">Salvar</button>
      </form>
    </PerfilMain>
  );
};
export default ModalPerfil;
