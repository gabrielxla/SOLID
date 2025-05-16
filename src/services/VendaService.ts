import {Request, Response} from "express";
import Produto from "../classes/Produto";
import VendaRepository from "../repositories/VendaRepository";
import Venda from "../classes/Venda";
import Cliente from "../classes/Cliente";
import Funcionario from "../classes/Funcionario";

export default class FuncionarioService{

    venRepository = new VendaRepository

    async listarVenda(req:Request, res:Response){
        try {
            const rs = await this.venRepository.Listar();
            return res.status(200).json(rs);
        } 
        catch (erro) {
            return res.status(500).json(erro)
        }
    }

    async cadastroVenda(req:Request, res:Response){
       
        const ven:Venda = new Venda();
        ven.cliente = new Cliente();
        ven.funcionario = new Funcionario();
        ven.cliente.id = req.body.id_cliente;
        ven.funcionario.id= req.body.id_funcionario;
        
       
        try{
            const rs = await this.venRepository.Cadastrar(ven);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }       
    }
}