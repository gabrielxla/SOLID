import  express  from "express";
import cors from "cors";
import ClienteServise from "./services/ClienteService";
import AutorService from "./services/AutorService";
import FuncionarioService from "./services/FuncionarioService";
import ProdutoService from "./services/ProdutoService";
import VendaService from "./services/VendaService";
import itensVendaService from "./services/ItensVendaService";
import PagamentoService from "./services/PagamentoService";

const app = express();
app.use(express.json());
app.use(cors());

const cli = new ClienteServise();
const aut = new AutorService();
const fun = new FuncionarioService();
const prod = new ProdutoService();
const ven = new VendaService();
const item = new itensVendaService()
const pag = new PagamentoService()

app.get("/api/v1/cliente/listar",(req,res)=>{
    cli.listarClientes(req,res);
})

app.get("/api/v1/autor/listar",(req,res)=>{
    aut.listarAutor(req,res);
})

app.get("/api/v1/funcionario/listar",(req,res)=>{
    fun.listarFuncionarios(req,res);
})
app.get("/api/v1/produto/listar",(req,res)=>{
    prod.listarFuncionarios(req,res);
})
app.get("/api/v1/venda/listar",(req,res)=>{
    ven.listarVenda(req,res);
})
app.get("/api/v1/itemvenda/listar",(req,res)=>{
    item.listarItensVenda(req,res);
})
app.get("/api/v1/pagamento/listar",(req,res)=>{
    pag.listarpagamento(req,res);
})


app.post("/api/v1/pagamento/cadastro",(req,res)=>{
    pag.cadastropagamento(req,res);
})
app.post("/api/v1/itemvenda/cadastro",(req,res)=>{
    item.cadastroItensVenda(req,res);
})
app.post("/api/v1/cliente/cadastro",(req,res)=>{
    cli.cadastroCliente(req,res);
})
app.post("/api/v1/venda/cadastro",(req,res)=>{
    ven.cadastroVenda(req,res);
})

app.post("/api/v1/autor/cadastro",(req,res)=>{
    aut.cadastroAutor(req,res);
})
app.post("/api/v1/produto/cadastro",(req,res)=>{
    prod.cadastroProd(req,res);
})
app.post("/api/v1/funcionario/cadastro",(req,res)=>{
    fun.cadastroFun(req,res);
})
app.listen(5000,()=>{
    console.log(`Online em: http://127.0.0.1:5000`)
})

