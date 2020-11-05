import styled from "styled-components";

export const YourFordFinalizacaoGrid = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 75px 90px 59px 247px 120px;

  grid-template-areas:
    "HD"
    "LB"
    "NF"
    "IC"
    "FC";

  width: 100%;
  height: 100%;

  text-align: center;
  align-items: center;
  font-size: 13px;
  font-family: "Roboto Condensed";
  font-weight: lighter;
  background-color: var(--lightlblue);
`;

export const DivNomeCriado = styled.div`
  grid-area: NF;

  display: flex;

  justify-content: center;
  align-items: center;

  margin: 0 auto;

  height: 59px;
  width: 313px;

  font-size: 30px;
  color: var(--darkblue);
  font-family: "Roboto Condensed";
  font-weight: bold;

  font-style: italic;

  border-radius: 3px;
`;

export const CaixaDeTexto = styled.input`
  border-bottom: 5px solid var(--darkblue);
  width: 100%;
  font-size: 30px;
  margin-left: 20px;
  color: var(--darkblue);
  font-weight: bold;
  text-align: center;
  background-color: transparent;
`;

export const ImagemCarroFinalizacao = styled.div`
  grid-area: IC;

  justify-content: center;
  align-items: center;

  margin: 0 auto;

  height: 247px;
  width: 313px;

  border-radius: 24px;
`;

export const ContainerFinalizacao = styled.div`
  grid-area: FC;
  width: 313px;
  margin: 0 auto;
  height: 120px;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const CaracteristicasContainerFinalizacao = styled.div`
  width: 217px;
  height: 120px;
  background-color: var(--white);
  border-radius: 12px;
  display: flex;
`;

export const BotaoCadastrarYourFord = styled.button`
  width: 90px;
  height: 120px;
  background-color: var(--darkblue);
  color: var(--white);
  font-size: 18px;
  margin: 0 auto;
  border-radius: 12px;
  margin-left: 5px;
  font-weight: lighter;
`;

export const DivCaracteristicas = styled.div`
  width: 70%;
  height: 100%;
`;

export const DivUsos = styled.div`
  width: 30%;
  height: 100%;
  padding-top: 14px;
`;

export const DivCaracteristicaPrincipal = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
`;

export const DivCaracteristicaSecundaria = styled.div`
  width: 40px;
  height: 40px;
  display: inline-block;
  margin-left: 10px;
  margin-top: 10px;
`;

export const DivUsoCarro = styled.div`
  width: 40px;
  height: 40px;
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
`;
