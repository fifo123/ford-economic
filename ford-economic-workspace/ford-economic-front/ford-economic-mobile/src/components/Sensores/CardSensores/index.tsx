import React from "react";
import {
  ContainerSensores,
  DivSensoresNome,
  DivStatusSensor,
  LabelStatus,
  LiSensores,
  UlSensores,
} from "./styles";

import ArCondicionadoLogo from "../../../assets/arcondicionado.svg";
import QuilmetragemLogo from "../../../assets/quilometragem.svg";
import CombustivelLogo from "../../../assets/combustivel.svg";
import FrenagemLogo from "../../../assets/frenagem.svg";
import GasesLogo from "../../../assets/gases.svg";
import MotorLogo from "../../../assets/motor.svg";

const CardSensores: React.FC = () => {
  return (
    <ContainerSensores>
      <UlSensores>
        <LiSensores>
          <div>
            <img src={ArCondicionadoLogo} width="30px" height="30px" />
          </div>
          <DivSensoresNome>Ar-Condicionado</DivSensoresNome>
          <div>
            <DivStatusSensor colorStatus="var(--darkred)" />
            <LabelStatus>Status</LabelStatus>
          </div>
        </LiSensores>
        <LiSensores>
          <div>
            <img src={QuilmetragemLogo} width="30px" height="30px" />
          </div>
          <DivSensoresNome>Quilometragem</DivSensoresNome>
          <div>
            <DivStatusSensor colorStatus="var(--yellow)" />
            <LabelStatus>Status</LabelStatus>
          </div>
        </LiSensores>
        <LiSensores>
          <div>
            <img src={CombustivelLogo} width="30px" height="30px" />
          </div>
          <DivSensoresNome>Combustível</DivSensoresNome>
          <div>
            <DivStatusSensor colorStatus="var(--orange)" />
            <LabelStatus>Status</LabelStatus>
          </div>
        </LiSensores>
        <LiSensores>
          <div>
            <img src={FrenagemLogo} width="30px" height="30px" />
          </div>
          <DivSensoresNome>Frenagem</DivSensoresNome>
          <div>
            <DivStatusSensor colorStatus="var(--darkgreen)" />
            <LabelStatus>Status</LabelStatus>
          </div>
        </LiSensores>
        <LiSensores>
          <div>
            <img src={GasesLogo} width="30px" height="30px" />
          </div>
          <DivSensoresNome>Gases</DivSensoresNome>
          <div>
            <DivStatusSensor colorStatus="var(--darkred)" />
            <LabelStatus>Status</LabelStatus>
          </div>
        </LiSensores>
        <LiSensores>
          <div>
            <img src={MotorLogo} width="30px" height="30px" />
          </div>
          <DivSensoresNome>Motor</DivSensoresNome>
          <div>
            <DivStatusSensor colorStatus="var(--yellow)" />
            <LabelStatus>Status</LabelStatus>
          </div>
        </LiSensores>
      </UlSensores>
    </ContainerSensores>
  );
};

export default CardSensores;
