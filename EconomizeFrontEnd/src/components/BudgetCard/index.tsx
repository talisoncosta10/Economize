import { FaPiggyBank } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import GaugeChart from "../Charts/GaugeChart";
import { useState } from "react";
import { IOrcamento } from "../../pages/home";
import Modal from "../Modal";

interface BudgetCardProps {
  orcamento: IOrcamento;
}

export default function BudgetCard({ orcamento }: BudgetCardProps) {
  const [modal, setModal] = useState<boolean>(false);

  const handleModal = () => {
    setModal((prevState) => !prevState);
    console.log(modal);
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-Br", {
      currency: "BRL",
      style: "currency",
    });
  };

  return (
    <div>
      <div onClick={() => handleModal()} className="cursor-pointer">
        <div className=" flex justify-center items-center pt-5 bg-DarkMode w-80 h-52 rounded-t-md cursor-pointer">
          <GaugeChart />
        </div>
        <div className="bg-white w-80 h-auto rounded-b-md">
          <div className="p-2.5">
            <h1 className="text-base text-[#8995A1]">
              {orcamento.nome} • LIMITE DE GASTOS
            </h1>
            <span className="font-semibold text-2xl">
              {formatCurrency(orcamento.limiteGasto)}
            </span>
          </div>

          <hr />

          <div className="flex gap-3 py-4 px-3">
            <div className="flex flex-col justify-center items-center">
              <FaPiggyBank className="h-12 w-12 p-1.5 rounded-full border" />
              <p className="text-[#8995A1] text-base">restante</p>
              <small className="font-bold text-base">
                {formatCurrency(orcamento.restante)}
              </small>
            </div>

            <div className="flex flex-col justify-center items-center">
              <GiPayMoney className="h-12 w-12 p-1.5 rounded-full border" />
              <p className="text-[#8995A1] text-base">utilizado</p>
              <small className="font-bold text-base ">
                {formatCurrency(orcamento.utilizado)}
              </small>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={modal} setOpen={setModal} title={orcamento.nome} />
    </div>
  );
}
