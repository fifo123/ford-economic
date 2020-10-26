import React from "react";

import RelatoriosList from "../RelatoriosList";
import { LabelRelatorios } from "./styles";

const CorpoRelatorios: React.FC = () => {
  return (
    <>
      <LabelRelatorios>Relatórios</LabelRelatorios>
      <RelatoriosList />
    </>
  );
};

export default CorpoRelatorios;
