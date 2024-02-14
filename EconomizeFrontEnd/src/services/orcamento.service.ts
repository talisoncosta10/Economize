import api from "./api";

class OrcamentoService {
  public static async getOrcamentos() {
    return await api.get("orcamento");
  }
}

export default OrcamentoService;
