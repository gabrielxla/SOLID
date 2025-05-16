import Produto from "./Produto";
import Venda from "./Venda";

export default class ItemVendido {
    id!: number;
    venda: Venda;  // Remover a asserção ! e garantir a inicialização
    produto: Produto;  // Remover a asserção ! e garantir a inicialização
    quantidade!: number;

    constructor() {
        this.venda = new Venda();  // Inicializando aqui
        this.produto = new Produto();  // Inicializando aqui
    }
}
