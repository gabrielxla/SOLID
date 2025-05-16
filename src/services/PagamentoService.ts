import {Request, Response} from "express";
import Produto from "../classes/Produto";
import VendaRepository from "../repositories/VendaRepository";
import Venda from "../classes/Venda";
import Cliente from "../classes/Cliente";
import Funcionario from "../classes/Funcionario";
import PagamentoRepository from "../repositories/PagamentoRepository";
import Pagamento from "../classes/Pagamento";

export default class PagamentoService{

    pagRepository = new PagamentoRepository ()

    async listarpagamento(req:Request, res:Response){
        try {
            const rs = await this.pagRepository.Listar();
            return res.status(200).json(rs);
        } 
        catch (erro) {
            return res.status(500).json(erro)
        }
    }

    async cadastropagamento(req:Request, res:Response){
       
        const pag:Pagamento = new Pagamento();
        pag.venda = new Venda()
        pag.venda = req.body.venda
        pag.total_pagar = req.body.total_pagar;
        
       
        try{
            const rs = await this.pagRepository.Cadastrar(pag);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }       
    }
}