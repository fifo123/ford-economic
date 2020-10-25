import React from "react";

import { LabelMenu } from "./styles";

const LabelTitulo: React.FC<{ name: string; fontSize?: any }> = (props) => {
  return (
    <LabelMenu style={{ fontSize: props.fontSize }}>{props.name}</LabelMenu>
  );
};

export default LabelTitulo;
