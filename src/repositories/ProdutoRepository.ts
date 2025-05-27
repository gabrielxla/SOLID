import Produto from "../classes/Produto";
import { conexao } from "../database/config";
import Commands from "../interfaces/Commands";

export default class ProdutoRepository implements Commands<Produto>{
    
    Listar(): Promise<Produto[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from produto",(erro, result)=>{
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(result as Produto[])
                }
            })
        })
    }
    ListarMaisvendidos(): Promise<Produto[]> {
        return new Promise((resolve,reject)=>{
            conexao.query(`select produto.nome, produto.foto1, itensvenda.quantidade
from produto inner join itensvenda 
on produto.id = itensvenda.id_produto 
order by itensvenda.quantidade desc
limit 0,10`,(erro, result)=>{
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(result as Produto[])
                }
            })
        })
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Produto): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: string): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Produto): Promise<Produto> {

        return new Promise((resolve, reject) => {
            conexao.query("INSERT INTO  produto (nome,descricao,preco,foto1,foto2,foto3) Values (?,?,?,?,?,?)", [
                obj.nome,
                obj.descricao,
                obj.preco,
                obj.foto1,
                obj.foto2,
                obj.foto3    
            ],
                (erro,end: any)=>{
                if (erro) {
                    return reject(erro);
                }
                else {
                    return resolve(obj)
                }
            })
        })
    }
} 