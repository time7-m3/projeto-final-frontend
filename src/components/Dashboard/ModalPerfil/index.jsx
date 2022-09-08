import { PerfilMain } from "./styles";
import btnClose from "../../../assets/btnClose.svg";
import btnDownOpen from "../../../assets/btnDownOpen.svg";
import removeIcon from "../../../assets/removeIcon.svg";
import { useContext, useRef, useState, useEffect } from "react";
import { ProfileContext } from "../../../context/ProfileContext";
import { AuthContext } from "../../../context/AuthContext";

const ModalPerfil = () => {
  const { setIsProfileOpen, closeModalProfile, deleteCar, editUser } =
    useContext(ProfileContext);
  const { user } = useContext(AuthContext);
  const [newImage, setNewImage] = useState(user.imagem);
  const [editableImage, setEditableImage] = useState(false);

  const editImage = (e) => {
    e.preventDefault();
    setEditableImage(!editableImage);
  };

  const modalRef = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (!modalRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setIsProfileOpen]);

  return (
    <PerfilMain>
      <div className="modalInfosDiv">
        <button className="btnCloseModal" onClick={closeModalProfile}>
          <img src={btnClose} alt="icone fechar modal" />
        </button>
        <button className="btnImagePerfil">
          <img src={user.imagem} alt={user.name} />
        </button>
        <h1>Perfil</h1>
        <h2>Nome:</h2>
        <p>{user.name}</p>
        <h2>E-mail:</h2>
        <p>{user.email}</p>
        <h2>Telefone:</h2>
        <p>{user.telefone}</p>
        <div className="divImagem">
          <h2>
            Imagem:
            <button className="btnEdit" onClick={(e) => editImage(e)}>
              <img src={btnDownOpen} alt="icone abrir edit" />
            </button>
          </h2>
          {editableImage && (
            <form
              className="userInputs"
              onSubmit={(e) => editUser(e, newImage)}
            >
              <input
                type="text"
                value={newImage}
                placeholder="Cole a URL da sua imagem aqui"
                onChange={(e) => setNewImage(e.target.value)}
              />
              <button className="btnSalvarImagem">Salvar</button>
            </form>
          )}
        </div>
        <>
          {user.carrosCadastrados.length > 0 ? (
            <>
              <p>Meus carros:</p>
              <ul className="listaCarros">
                {user.carrosCadastrados.map((elem) => (
                  <li key={elem.id} className="itemCarro">
                    <img scr={elem.imagem} />
                    <button
                      className="btnRemoveCarro"
                      onClick={() => deleteCar(elem.id)}
                    >
                      <img src={removeIcon} />
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <></>
          )}
        </>
      </div>
    </PerfilMain>
  );
};
export default ModalPerfil;
