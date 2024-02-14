import { useEffect, useState } from "react";
import "./index.css";

const monthList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; //Array que guarda os meses do ano em número sendo o 0 o mês de Janeiro.

export default function MonthFilter() {
  const [menu, setMenu] = useState<boolean>(false); //Estado deve iniciar com false para que não abra a lista de meses
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [yearList, setYearList] = useState<number[]>([]);
  const [starYear, setStartYear] = useState<number>(2019);

  //Função que lista as opções de mês e ano
  const toggleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  const handleMonth = (month: number) => {
    setMonth(month);
  };

  const formatMonth = (month: number, type: "short" | "long") => {
    const monthName = new Date(2024, month, 1).toLocaleString("default", {
      month: type,
    });
    return monthName;
  };

  const handleListYear = () => {
    let yearList: number[] = [];
    let year = starYear;
    for (let x = 0; x < 10; x++) {
      year = year + 1;
      yearList.push(year);
    }
    setYearList(yearList);
  };

  const handleYear = (year: number) => {
    setYear(year);
  };

  const handleIncreaseYear = () => {
    const lastYear = yearList[yearList.length - 1];
    const newYearList = Array.from(
      { length: 10 },
      (_, index) => lastYear + index + 1
    );
    setYearList(newYearList);
    setStartYear(lastYear);
  };

  const handleDecreaseYear = () => {
    const firstYear = yearList[0];
    const newYearList = Array.from(
      { length: 9 },
      (_, index) => firstYear - index - 3
    ).reverse();
    setYearList(newYearList);
    setStartYear(newYearList[0]);
  };

  const handleMonthYear = () => {
    if (month === 11) {
      setMonth(0);
      setYear((prevState) => prevState + 1);
    } else {
      setMonth((prevState) => prevState + 1);
    }

    if (year === starYear + 10) {
      handleIncreaseYear();
    }
  };

  const handleDecreaseMonthYear = () => {
    if (month === 0) {
      setMonth(11);
      setYear((prevState) => prevState - 1);
    } else {
      setMonth((prevState) => prevState - 1);
    }

    if (year === starYear + 1) {
      handleDecreaseYear();
    }
  };

  useEffect(() => {
    handleListYear();
  }, [starYear]);

  return (
    <div className="relative ">
      <div className="flex items-center gap-3">
        <button title="Mês Anterior" onClick={() => handleDecreaseMonthYear()}>
          <img src="src\assets\VectorEsquerda.png" alt="Seta Esquerda" />
        </button>

        <button
          title="Selecionar Mês"
          className="calendario items-center rounded-md leading-6 flex justify-between"
          onClick={() => toggleMenu()}
        >
          <div className="w-80">
            <span className="mx-3 my-3 text-lg">
              {formatMonth(month ?? 0, "long")} - {year}
            </span>
          </div>
          <div className="iconeSetaBaixo rounded-r-md">
            <img src="src\assets\Vector.svg" alt="Seta para baixo" />
          </div>
        </button>

        <button onClick={() => handleMonthYear()} title="Próximo Mês">
          <img src="src\assets\VectorDireita.png" alt="Seta para Direita" />
        </button>
      </div>

      {menu && (
        <div className="flex gap-5 absolute bg-white w-90 left-6 rounded-md p-6 justify-center mt-1 shadow-md z-10">
          <ul className="grid grid-cols-3 gap-2 content-around border-r pr-4">
            {monthList.map((item, index = 0) => (
              <li
                className={`flex items-center justify-center rounded-md hover:cursor-pointer border border-white hover:border-gray-300 ${
                  month === item && "bg-blue-950 text-white"
                }`}
                key={index}
                onClick={() => handleMonth(item)}
              >
                <a className="p-2">{formatMonth(item, "short")}</a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col">
            <ul className="grid grid-cols-2 gap-4 ">
              {yearList.map((item, index) => (
                <li
                  className={`flex items-center justify-center rounded-md hover:cursor-pointer border border-white hover:border-gray-300 p-1 ${
                    year === item && "bg-blue-950 text-white"
                  }`}
                  key={index}
                  onClick={() => handleYear(item)}
                >
                  <a>{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <button title="Ano Anterior" onClick={() => handleDecreaseYear()}>
              <img src="src\assets\VectorCima.svg" alt="Seta para cima" />
            </button>
            <button title="Próximo Ano" onClick={() => handleIncreaseYear()}>
              <img src="src\assets\VectorBaixo.svg" alt="Seta para baixo" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
