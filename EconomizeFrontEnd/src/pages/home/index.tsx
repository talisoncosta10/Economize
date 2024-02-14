import { useEffect, useState } from "react";
import BudgetCard from "../../components/BudgetCard";
import MonthFilter from "../../components/MonthFilter";
import OrcamentoService from "../../services/orcamento.service";

export interface IOrcamento {
  id: string;
  nome: string;
  descricao: string;
  data: string;
  limiteGasto: number;
  restante: number;
  utilizado: number;
}

export default function Home() {
  const [orcamento, setOrcamento] = useState<IOrcamento[]>([]);

  const getOrcamento = async () => {
    try {
      const { data } = await OrcamentoService.getOrcamentos();
      console.log(data);
      setOrcamento(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOrcamento();
  }, []);

  useEffect(() => {
    console.log(orcamento);
  }, [orcamento]);

  return (
    <div className="py-5">
      <div className="ml-4 mb-4">
        <MonthFilter />
      </div>

      <div className="flex items-center px-4 gap-6 w-full bg-slate-600 ">
        {orcamento.map((item, index) => (
          <BudgetCard key={index} orcamento={item} />
        ))}
      </div>
    </div>
  );
}
