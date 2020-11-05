import React, { useEffect, useState } from "react";
import {
  ContainerSensores,
  DivSensoresNome,
  DivStatusSensor,
  LabelStatus,
  LiSensores,
  UlSensores,
} from "./styles";

import api from "../../../services";
import { FeatureSensores } from "../sensores.interface";

const CardSensores: React.FC = () => {
  const [sensores, setSensores] = useState<FeatureSensores[]>([]);

  useEffect(() => {
    api.get("/pages/sensores/2").then((response) => {
      setSensores(response.data);
    });
  }, []);

  useEffect(() => {
    setInterval(() => {
      api.get("/pages/sensores/2").then((response) => {
        setSensores(response.data);
      });
    }, 5000);
  }, []);

  return (
    <ContainerSensores>
      <UlSensores>
        {sensores.map((sensor) => (
          <LiSensores>
            <div>
              <img
                src={`http://localhost:3000/get-image/?imagem=${sensor.icone}`}
                width="30px"
                height="30px"
              />
            </div>
            <DivSensoresNome>{sensor.nome}</DivSensoresNome>
            <div>
              <DivStatusSensor
                colorStatus={
                  sensor.ligado ? "var(--darkgreen)" : "var(--darkred)"
                }
              />
              <LabelStatus>Status</LabelStatus>
            </div>
          </LiSensores>
        ))}
      </UlSensores>
    </ContainerSensores>
  );
};

export default CardSensores;
