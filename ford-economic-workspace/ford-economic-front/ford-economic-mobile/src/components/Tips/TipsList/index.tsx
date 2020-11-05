import React, { useEffect, useState } from "react";
import api from "../../../services";
import SymbolTips from "../SymbolTips";
import { FeatureTips } from "../tips.interface";

import {
  BackgroundTip,
  ContainerTipsList,
  GridInnerItem,
  TextContainer,
} from "./styles";

const TipsList: React.FC = () => {
  const [tips, setTips] = useState<string[]>([]);

  useEffect(() => {
    api.get("/pages/tips/2").then((response) => {
      setTips(response.data);
    });
  }, []);

  return (
    <ContainerTipsList>
      {tips.map((tip, i) => (
        <BackgroundTip
          fundoCor={i % 2 == 0 ? "var(--white)" : "var(--darkblue)"}
          fontCor={i % 2 != 0 ? "var(--white)" : "var(--darkblue)"}
        >
          <GridInnerItem>
            <SymbolTips lampColor={i % 2 == 0} />
            <TextContainer>{tip}</TextContainer>
          </GridInnerItem>
        </BackgroundTip>
      ))}
    </ContainerTipsList>
  );
};
export default TipsList;
