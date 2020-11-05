import React from "react";

import { LabelRelatorios } from "./styles";
import CorpoRelatorio from "../CorpoRelatorio";

const CorpoRelatorios: React.FC = () => {
  return (
    <>
      <LabelRelatorios>Relatórios</LabelRelatorios>
      <CorpoRelatorio />
    </>
  );
};

export default CorpoRelatorios;
