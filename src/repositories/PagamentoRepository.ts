import Pagamento from "../classes/Pagamento";
import Venda from "../classes/Venda"
import { conexao } from "../database/config";
import Commands from "../interfaces/Commands";
import CommandsVenda from "../interfaces/CommandsVenda";

export default class PagamentoRepository implements Commands <Pagamento>{
    Cadastrar(obj: Pagamento): Promise<Pagamento> {
        return new Promise((resolve, reject) => {
            conexao.query("INSERT INTO  pagamento(id_venda,total_pagar) Values (?,?)", [
                obj.venda,
                obj.total_pagar,],
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
    Listar(): Promise<Pagamento[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from pagamento",(erro, result)=>{
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(result as Pagamento[])
                }
            })
        })
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Pagamento): Promise<Pagamento> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: string): Promise<Pagamento> {
        throw new Error("Method not implemented.");
    }
    
    
}