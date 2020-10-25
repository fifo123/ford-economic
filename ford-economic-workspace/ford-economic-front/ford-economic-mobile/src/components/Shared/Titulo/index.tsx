import React from "react";

import { LabelMenu } from "./styles";

const LabelTitulo: React.FC<{ name: string }> = (props) => {
  return <LabelMenu>{props.name}</LabelMenu>;
};

export default LabelTitulo;
