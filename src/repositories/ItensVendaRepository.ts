import ItemVendido from "../classes/ItemVendido";
import { conexao } from "../database/config";
import Commands from "../interfaces/Commands";

export default class ItemVendidoRepository implements Commands <ItemVendido>{
    Cadastrar(obj: ItemVendido): Promise<ItemVendido> {
        return new Promise((resolve, reject) => {
            conexao.query("INSERT INTO  itensvenda(id_venda,id_produto,quantidade) Values (?,?,?)", [
                obj.venda.id,
                obj.produto.id,
                obj.quantidade],
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
    Listar(): Promise<ItemVendido[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from itensvenda",(erro, result)=>{
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(result as ItemVendido[])
                }
            })
        })
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: ItemVendido): Promise<ItemVendido> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: string): Promise<ItemVendido> {
        throw new Error("Method not implemented.");
    }
   

}