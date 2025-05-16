import {Request, Response} from "express";
import ItemVendidoRepository from "../repositories/ItensVendaRepository";
import ItemVendido from "../classes/ItemVendido";
import Produto from "../classes/Produto";
import Venda from "../classes/Venda";

export default class itensVendaService{

    ItemvenRepository = new ItemVendidoRepository()

    async listarItensVenda(req:Request, res:Response){
        try {
            const rs = await this.ItemvenRepository.Listar();
            return res.status(200).json(rs);
        } 
        catch (erro) {
            return res.status(500).json(erro)
        }
    }

    async cadastroItensVenda(req:Request, res:Response){
       
        const item:ItemVendido = new ItemVendido();
        
        item.quantidade = req.body.quantidade
        item.venda.id = req.body.venda
        item.produto.id = req.body.produto
        
        
       
        try{
            const rs = await this.ItemvenRepository.Cadastrar(item);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }       
    }
}