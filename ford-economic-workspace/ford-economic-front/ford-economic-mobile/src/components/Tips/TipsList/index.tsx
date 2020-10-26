import React from "react";
import SymbolTips from "../SymbolTips";

import {
  ContainerTipsList,
  DarkBackgroundTip,
  GridInnerItem,
  GridListTips,
  LightBackgroundTip,
  TextContainer,
} from "./styles";

const TipsList: React.FC = () => {
  return (
    <ContainerTipsList>
      <GridListTips>
        <LightBackgroundTip>
          <GridInnerItem>
            <SymbolTips />
            <TextContainer>
              Percebemos que você mantem o ar-condicionado ligado durante 93% do
              uso do carro. Procure utilizar por mais tempo os vidros abertos!
              Além de economizar, nada como um vento fresquinho!
            </TextContainer>
          </GridInnerItem>
        </LightBackgroundTip>
        <DarkBackgroundTip>
          <GridInnerItem>
            <SymbolTips />
            <TextContainer>
              Altas rotações consomem maior quantidade de combustível! Vimos que
              você poderia trocar as marchas ao alcançar menores rotações para
              que tivesse uma boa economia de combustível!
            </TextContainer>
          </GridInnerItem>
        </DarkBackgroundTip>
        <LightBackgroundTip>
          <GridInnerItem>
            <SymbolTips />
            <TextContainer>
              Fazer revisões frequentes pode te ajudar a manter todas as peças
              do seu carro em ordem! As vezes é melhor trocar uma peça ao invés
              de uma danificar outras, e o custo de manuntenção ser maior!
            </TextContainer>
          </GridInnerItem>
        </LightBackgroundTip>
        <DarkBackgroundTip>
          <GridInnerItem>
            <SymbolTips />
            <TextContainer>
              A sua velocidade média durante a passagem de lombadas está alta
              demais! Isso pode causar precocemente o desgaste em alguns
              componentes do seu Ford! Fique atento!
            </TextContainer>
          </GridInnerItem>
        </DarkBackgroundTip>
      </GridListTips>
    </ContainerTipsList>
  );
};
export default TipsList;
