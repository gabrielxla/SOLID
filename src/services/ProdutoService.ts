import {Request, Response} from "express";
import Produto from "../classes/Produto";
import ProdutoRepository from "../repositories/ProdutoRepository";

export default class FuncionarioService{

    prodRepository = new ProdutoRepository

    async listarFuncionarios(req:Request, res:Response){
        try {
            const rs = await this.prodRepository.Listar();
            return res.status(200).json(rs);
        } 
        catch (erro) {
            return res.status(500).json(erro)
        }
    }

    async cadastroProd(req:Request, res:Response){
        const prod:Produto = new Produto();
        prod.nome = req.body.nome;
        prod.descricao = req.body.descricao;
        prod.preco = req.body.preco;
        prod.foto1 = req.body.foto1;
        prod.foto2 = req.body.foto2;
        prod.foto3 = req.body.foto3;
       
        try{
            const rs = await this.prodRepository.Cadastrar(prod);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }       
    }
    async listarProdutoMaisvendidos(req:Request, res:Response){
        try {
            const rs = await this.prodRepository.ListarMaisvendidos();
            return res.status(200).json(rs);
        } 
        catch (erro) {
            return res.status(500).json(erro)
        }
    }
}