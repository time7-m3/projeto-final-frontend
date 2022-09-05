import { useEffect, useState } from "react";
import api from "../../../services/api-city";
import { GrLocation } from "react-icons/gr";
import { SearchCity } from "./styles";
import Select from "react-select";

const SelectSearch = () => {
  const [cidade, setCidade] = useState([]);
  async function pegarCidades() {
    await api.get("/", {}).then(({ data }) => {
      setCidade(
        data.map((item) => {
          return {
            id: item.id,
            label: item.nome,
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
          options={cidade}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
          styles={styles}
          name="Onde gostaria de alugar?"
          placeholder="Onde gostaria de alugar?"
          noOptionsMessage={() => "Sem Opções!"}
          theme={(theme) => ({
            ...theme,
            borderRadius: 10,
            border: 0,
            colors: {
              ...theme.colors,
              primary25: "#F4F4F4",
              primary: "black",
            },
          })}
        />
      </div>
    </SearchCity>
  );
};

export default SelectSearch;
