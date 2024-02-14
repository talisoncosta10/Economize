interface IModal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  title: string;
}

export default function Modal({ isOpen, setOpen, title }: IModal) {
  if (isOpen) {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-70 ">
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md bg-white text-gray-900 w-3/6">
          <div className="flex items-center p-4">
            <h2 className="">{title} • Histórico de transações</h2>
          </div>
          <hr />
          <div className="p-2">
            <div className="border border-gray-200 rounded-md gap-4 p-2 w-1/2 ">
              <table className="text-left w-full">
                <thead>
                  <tr>
                    <th className="py-2">Transação</th>
                    <th>Descrição</th>
                    <th>Data</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody className="border-t-2 uppercase">
                  <tr className="border-b-2">
                    <td className="py-1">pizza</td>
                    <td className="py-1">n/a</td>
                    <td className="py-1">14/02/2024</td>
                    <td className="py-1 text-red-500">-1,000</td>
                  </tr>
                  <tr className="border-b-2">
                    <td className="py-1">pizza</td>
                    <td className="py-1">n/a</td>
                    <td className="py-1">14/02/2024</td>
                    <td className="py-1 text-red-500">-1,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <hr />
          <div className="flex p-3 justify-end items-center">
            <button
              type="submit"
              onClick={() => setOpen(!isOpen)}
              className="border border-gray-500 rounded-md py-1 px-2 font-bold text-md"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
