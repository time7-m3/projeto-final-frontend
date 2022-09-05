import { useState, useEffect } from "react";
import fipe from "../../../services/api-fipe";
import Select from "./components/select";
import { Filter } from "./styles";
import db from "./../../../services/db";
export default function Filters() {
  const [marca, setMarca] = useState([]);
  const [idMarca, setIdMarca] = useState(1);
  const [modelo, setModelo] = useState([]);
  const [idModelo, setIdModelo] = useState(1);
  const [anos, setAnos] = useState([]);
  const data = db.map((item) => {
    return { name: item.marca };
  });

  useEffect(() => {
    fipe.get("", {}).then(({ data }) => {
      //console.log(data);
      setMarca(data);
    });
  }, []);
  useEffect(() => {
    fipe.get(`${idMarca}/models`, {}).then(({ data }) => {
      //console.log(data);
      setModelo(data);
    });
  }, [idMarca]);

  useEffect(() => {
    fipe.get(`${idMarca}/models/${idModelo}/years`, {}).then(({ data }) => {
      //console.log(data);
      setAnos(data);
    });
  }, [idMarca, idModelo]);
  return (
    <Filter>
      <Select name="Marca" obj={marca} setObj={setIdMarca} />

      <Select name="Modelo" obj={modelo} setObj={setIdModelo} />

      <Select name="Ano" obj={anos} />
    </Filter>
  );
}
