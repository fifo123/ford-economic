import styled from "styled-components";

export const DivSelecaoCarro = styled.div`
  grid-area: SC;

  display: grid;

  grid-template-columns: 56px auto 56px;
  grid-template-rows: auto;

  grid-template-areas: "RS IM LS";
`;

export const ImagemCarroSelecionado = styled.img`
  grid-area: IM;

  display: flex;
  align-items: center;

  height: 192px;
  border-radius: 24px;
`;

export const Seletor = styled.img`
  grid-area: LS, RS;

  display: flex;

  margin-top: 77px;

  width: 30px;
  height: 50px;

  flex-direction: column;
  align-items: center;
`;
