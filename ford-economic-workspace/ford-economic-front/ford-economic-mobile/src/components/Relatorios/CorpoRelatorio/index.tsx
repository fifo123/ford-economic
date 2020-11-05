import React, { useEffect, useState } from "react";
import api from "../../../services";
import { FeatureSensores } from "../../Sensores/sensores.interface";
import { ContainerChart, ContainerSeletor, DivSelected } from "./styles";
import Chart from "react-google-charts";

const CorpoRelatorio: React.FC = () => {
  const pieOptions = {
    title: "",
    pieHole: 0.6,
    slices: [
      {
        color: "#2BB673",
      },
      {
        color: "#d91e48",
      },
      {
        color: "#007fad",
      },
      {
        color: "#e9a227",
      },
    ],
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 14,
      },
    },
    tooltip: {
      showColorCode: true,
    },
    chartArea: {
      left: 40,
      top: 10,
      width: "80%",
      height: "80%",
    },
    fontName: "Roboto",
  };

  var opened = 0;
  const [size, setSize] = useState<number>(2);
  const [sensores, setSensores] = useState<FeatureSensores[]>([]);
  const [dataGoogle, setDataGoogle] = useState<{ data: any[]; type: string }>({
    data: [
      ["a", "b"],
      ["a", 1],
    ],
    type: "PieChart",
  });
  const [relatorio, setRelatorio] = useState<number>();
  const [geral, setGeral] = useState<boolean>(true);

  useEffect(() => {
    api
      .get<FeatureSensores[]>(
        `/pages/sensores/${localStorage.getItem("carroId")}`
      )
      .then((response) => {
        setSensores(response.data);
        setSize(response.data.length + 2);
        console.log(size);
        console.log(response.data);
      });
  }, []);

  useEffect(() => {
    api
      .get<any[]>(`/pages/relatorios/${localStorage.getItem("carroId")}`)
      .then((response) => {
        setDataGoogle({ data: response.data, type: "PieChart" });
        console.log(response.data);
      });
  }, []);

  useEffect(() => {
    api
      .get<any[]>(`/pages/relatorios/${localStorage.getItem("carroId")}`)
      .then((response) => {
        setDataGoogle({ data: response.data, type: "PieChart" });
        console.log(response.data);
      });
  }, [geral]);

  useEffect(() => {
    api
      .get<any[]>(
        `/pages/relatorios/${localStorage.getItem("carroId")}/${relatorio}`
      )
      .then((response) => {
        setDataGoogle({ data: response.data, type: "Bar" });
        console.log(response.data);
      });
  }, [relatorio]);

  const [selected, setSelected] = useState<{ id: string; nome: string }>({
    id: "0",
    nome: "Geral",
  });
  function handleSelect() {
    if (opened == 0) {
      const elementSeletor = document.getElementById("Seletor") as HTMLElement;
      const elementSelected = document.getElementById(
        "Selected"
      ) as HTMLElement;
      elementSelected.style.borderRadius = "12px 12px 0px 0px";
      console.log(size);

      elementSeletor.style.height = `${size * 41}px`;
      opened = 1;
    } else {
      const elementSeletor = document.getElementById("Seletor") as HTMLElement;
      const elementSelected = document.getElementById(
        "Selected"
      ) as HTMLElement;
      elementSeletor.style.height = `41px`;

      setTimeout(() => {
        elementSelected.style.borderRadius = "12px";
      }, 1000);
      opened = 0;
    }
  }
  function selectOption(e: any) {
    const elementOldSelected = document.getElementById(
      selected.id
    ) as HTMLElement;
    elementOldSelected.style.backgroundColor = "var(--gray)";
    const elementSelected = document.getElementById(
      e.currentTarget.id
    ) as HTMLElement;
    elementSelected.style.backgroundColor = "var(--darkgray)";

    setSelected({ id: e.currentTarget.id, nome: e.target.textContent });
    console.log(e.currentTarget.id == "0");

    if (e.currentTarget.id == "0") {
      setGeral(!geral);
    } else {
      setRelatorio(e.currentTarget.id);
    }
  }
  return (
    <>
      <ContainerSeletor id="Seletor" onClick={handleSelect}>
        <DivSelected
          id="Selected"
          style={{ borderRadius: "12px", backgroundColor: "var(--darkgray)" }}
        >
          {selected.nome}
        </DivSelected>
        {sensores.map((sensor) => (
          <DivSelected
            onClick={selectOption}
            id={sensor.id}
            style={{ backgroundColor: "var(--gray)" }}
          >
            {sensor.nome}
          </DivSelected>
        ))}
        <DivSelected
          style={{
            borderRadius: "0px 0px 12px 12px",
            backgroundColor: "var(--darkgray)",
          }}
          id="0"
          onClick={selectOption}
        >
          Geral
        </DivSelected>
      </ContainerSeletor>
      <ContainerChart>
        <Chart
          chartType={dataGoogle.type == "PieChart" ? "PieChart" : "Bar"}
          data={dataGoogle.data}
          options={{
            backgroundColor: "transparent",
            ...pieOptions,
            title: "Ocorrências",
          }}
          graph_id="GoogleChart"
          width={"347px"}
          height={"246px"}
          legend_toggle
        ></Chart>
      </ContainerChart>
    </>
  );
};

export default CorpoRelatorio;
