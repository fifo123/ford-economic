import React from "react";
import {
  EconomicDropDown,
  EconomicImage,
  EconomicItem,
  EconomicListItems,
  EconomicText,
} from "./styles";
import Car from "../../../assets/car.svg";
import Gas from "../../../assets/gas_station.svg";
import Frenagem from "../../../assets/frenagem.svg";
import Embreagem from "../../../assets/settings.svg";
import Acelerando from "../../../assets/acelerando.svg";
import ArCondicionado from "../../../assets/arcondicionado.svg";
import Gases from "../../../assets/gases.svg";
import Motor from "../../../assets/motor.svg";
import Dropdown from "../../../assets/play.svg";
import EconomicDetails from "../EconomicDetails";

const EconomicList: React.FC = () => {
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

  const usoGeral = "usoGeral";
  const combustivel = "combustivel";
  const frenagem = "frenagem";
  const embreagem = "embreagem";
  const acelerando = "acelerando";
  const arcondicionado = "arcondicionado";
  const gases = "gases";
  const motor = "motor";

  return (
    <>
      <EconomicListItems>
        <EconomicItem>
          <EconomicText>Uso geral</EconomicText>
          <EconomicImage src={Car} width="24px" height="24px" />
          <EconomicDropDown
            id={usoGeral + "DD"}
            src={Dropdown}
            onClick={() => animateCollapseExpand(usoGeral)}
          />
        </EconomicItem>
        <EconomicDetails divID={usoGeral} />
        <EconomicItem>
          <EconomicText>Combusível</EconomicText>
          <EconomicImage src={Gas} width="24px" height="24px" />
          <EconomicDropDown
            src={Dropdown}
            id={combustivel + "DD"}
            onClick={() => animateCollapseExpand(combustivel)}
          />
        </EconomicItem>
        <EconomicDetails divID={combustivel} />
        <EconomicItem>
          <EconomicText>Sistema de frenagem</EconomicText>
          <EconomicImage src={Frenagem} width="24px" height="24px" />
          <EconomicDropDown
            src={Dropdown}
            id={frenagem + "DD"}
            onClick={() => animateCollapseExpand(frenagem)}
          />
        </EconomicItem>
        <EconomicDetails divID={frenagem} />
        <EconomicItem>
          <EconomicText>Sistema de embreagem</EconomicText>
          <EconomicImage src={Embreagem} width="24px" height="24px" />
          <EconomicDropDown
            src={Dropdown}
            id={embreagem + "DD"}
            onClick={() => animateCollapseExpand(embreagem)}
          />
        </EconomicItem>
        <EconomicDetails divID={embreagem} />
        <EconomicItem>
          <EconomicText>Controle de aceleração</EconomicText>
          <EconomicImage src={Acelerando} width="24px" height="24px" />
          <EconomicDropDown
            src={Dropdown}
            id={acelerando + "DD"}
            onClick={() => animateCollapseExpand(acelerando)}
          />
        </EconomicItem>
        <EconomicDetails divID={acelerando} />
        <EconomicItem>
          <EconomicText>Ar-condicionado</EconomicText>
          <EconomicImage src={ArCondicionado} width="24px" height="24px" />
          <EconomicDropDown
            src={Dropdown}
            id={arcondicionado + "DD"}
            onClick={() => animateCollapseExpand(arcondicionado)}
          />
        </EconomicItem>
        <EconomicDetails divID={arcondicionado} />
        <EconomicItem>
          <EconomicText>Liberação de gases</EconomicText>
          <EconomicImage src={Gases} width="24px" height="24px" />
          <EconomicDropDown
            src={Dropdown}
            id={gases + "DD"}
            onClick={() => animateCollapseExpand(gases)}
          />
        </EconomicItem>
        <EconomicDetails divID={gases} />
        <EconomicItem>
          <EconomicText>Motor</EconomicText>
          <EconomicImage src={Motor} width="24px" height="24px" />
          <EconomicDropDown
            src={Dropdown}
            id={motor + "DD"}
            onClick={() => animateCollapseExpand(motor)}
          />
        </EconomicItem>
        <EconomicDetails divID={motor} />
      </EconomicListItems>
    </>
  );
};

export default EconomicList;
