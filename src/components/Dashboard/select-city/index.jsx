import { useContext, useEffect, useState } from "react";
import api from "../../../services/api";
import { GrLocation } from "react-icons/gr";
import { SearchCity } from "./styles";
import Select from "react-select";
import { DashboardContext } from "../../../context/DashboardContext";

const SelectSearch = () => {
  const {
    currentMarcaCar,
    setMarcaCurrentCar,
    currentModeloCar,
    setModeloCurrentCar,
    currentAnoCar,
    setAnoCurrentCar,
    currentCity,
    setCity,
    currentDateFrom,
    setCurrentDateFrom,
    currentDateTo,
    setCurrentDateTo,
  } = useContext(DashboardContext);
  const [cidade, setCidade] = useState([]);

  async function pegarCidades() {
    await api.get("/cars", {}).then(({ data }) => {
      //  console.log(data);
      setCidade(
        data.map((item) => {
          return {
            id: item.userId,
            label: item.localizacao,
          };
        })
      );
    });
  }
  useEffect(() => {
    pegarCidades();
  }, []);

  const styles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#F4F4F4",
      border: "0 !important",
      boxShadow: "0 !important",
      "&:hover": {
        border: "0 !important",
        backgroundColor: "#F4F4F4",
      },
    }),
  };

  return (
    <SearchCity>
      <div className="icon">
        <GrLocation />
      </div>
      <div className="select">
        <Select
          defaultInputValue={currentCity}
          options={cidade}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
          styles={styles}
          placeholder="Onde gostaria de alugar?"
          onChange={(e) => {
            setCity(e.label);
          }}
          noOptionsMessage={() => "Sem Opções!"}
          theme={(theme) => ({
            ...theme,
            borderRadius: 10,
            border: 0,
            colors: {
              ...theme.colors,
              primary25: "#F4F4F4",
              primary: "#9e9e9e",
            },
          })}
        />
      </div>
    </SearchCity>
  );
};

export default SelectSearch;
