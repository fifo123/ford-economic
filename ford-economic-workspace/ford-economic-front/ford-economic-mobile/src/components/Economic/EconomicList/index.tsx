import React, { useEffect, useState } from "react";
import {
  EconomicDropDown,
  EconomicImage,
  EconomicItem,
  EconomicListItems,
  EconomicText,
} from "./styles";

import Dropdown from "../../../assets/play.svg";
import EconomicDetails from "../EconomicDetails";
import api from "../../../services";
import { FeatureEconomic } from "../economic.interface";

const EconomicList: React.FC = () => {
  const [economic, setEconomic] = useState<FeatureEconomic[]>([]);

  useEffect(() => {
    api
      .get(`/pages/economic/${localStorage.getItem("carroId")}`)
      .then((response) => {
        const sensoresDisponiveis = response.data.filter((valor: any) => {
          if (valor != null) {
            return valor;
          }
        });
        setEconomic(sensoresDisponiveis);
      });
  }, []);

  useEffect(() => {
    setInterval(() => {
      api
        .get(`/pages/economic/${localStorage.getItem("carroId")}`)
        .then((response) => {
          const sensoresDisponiveis = response.data.filter((valor: any) => {
            if (valor != null) {
              return valor;
            }
          });
          setEconomic(sensoresDisponiveis);
        });
    }, 5000);
  }, []);

  function animateCollapseExpand(divID: string) {
    const element = document.getElementById(divID) as HTMLElement;
    const dropDown = document.getElementById(divID + "DD") as HTMLElement;

    if (element.style.height == "0px" || !element.style.height) {
      dropDown.style.transform = "matrix(0, -1, -1, 0, 0, 0)";
      element.style.height = "250px";
    } else {
      dropDown.style.transform = "matrix(0, 1, 1, 0, 0, 0)";
      element.style.height = "0px";
    }
  }

  return (
    <EconomicListItems>
      {economic.map((economic) => (
        <>
          <EconomicItem>
            <EconomicText>{economic.nomeSensor}</EconomicText>
            <EconomicImage
              src={`http://localhost:3000/get-image/?imagem=${economic.iconeSensor}`}
              width="24px"
              height="24px"
            />
            <EconomicDropDown
              id={economic.nomeSensor + "DD"}
              src={Dropdown}
              onClick={() => animateCollapseExpand(economic.nomeSensor)}
            />
          </EconomicItem>
          <EconomicDetails divID={economic.nomeSensor} itens={economic.valor} />
        </>
      ))}
    </EconomicListItems>
  );
};

export default EconomicList;
