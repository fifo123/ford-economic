import React from "react";

import { LabelMenu } from "./styles";

const LabelTitulo: React.FC<{
  name: string;
  fontSize?: any;
  fontWeight?: any;
}> = (props) => {
  return (
    <LabelMenu
      style={{ fontSize: props.fontSize, fontWeight: props.fontWeight }}
    >
      {props.name}
    </LabelMenu>
  );
};

export default LabelTitulo;
