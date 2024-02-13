class Controller {
    constructor(entidadeService) {
      this.entidadeService = entidadeService;
    }
  
    async pegaTodos(req, res) {
      try {
        var listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
        return res.status(200).json(listaDeRegistro);
      } catch (erro) {
        // erro
      }
    }
  
    // async pegaUmPorId(req, res) {
    //   const { id } = req.params;
    //   try {
    //     const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id));
    //     return res.status(200).json(umRegistro);
    //   } catch (erro) {
    //     // erro
    //   }
    // }
  
    async criaNovo(req, res) {
      const dadosParaCriacao = req.body;
      try {
        const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
        console.log(novoRegistroCriado);
        return res.status(200).json(novoRegistroCriado);
      } catch (erro) {
        console.log(erro);
        return res.status(200).json(dadosParaCriacao);
      }
    }
  

     async criaCron(req, res) {
      const dadosParaCriacao = req.body;      
      console.log(obj);
      try {
        const novoRegistroCriado = await this.entidadeService.criaRegistrocron(dadosParaCriacao);
        console.log("deu certo"+novoRegistroCriado);
        return res.status(200).json(novoRegistroCriado);
      } catch (erro) {
        console.log(erro);
        return res.status(200).json(dadosParaCriacao);
      }
    }

    async atualiza(req, res) {
      const { id } = req.params;
      const dadosAtualizados = req.body;
      try {
        //isUpdated
        const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
        if (!foiAtualizado) {
          return res.status(400).json({ mensagem: 'registro não foi atualizado' });
        }
        return res.status(200).json({ mensagem: 'Atualizado com sucesso' });
      } catch (erro) {
        // erro
      }
    }
  
    async retornadown(req, res){

      try{

        var {...prm} = req.params;
        var teste = JSON.stringify(req.params);
        console.log(req.params.nome,req.query.nome);
        var retornodasvc = await this.entidadeService.retornadownn(req.query.nome );
    var teste = JSON.stringify(retornodasvc);
        return res.status(200).json( retornodasvc);//JSON.stringify(retornodasvc));
      }
      catch(erro)      
      {
        return res.status(400).json({mensagem: erro.message})
      }
     

    }

    
    // async exclui(req, res) {
    //   const { id } = req.params;
    //   try {
    //     await this.entidadeService.excluiRegistro(Number(id));
    //     return res.status(200).json({ mensagem: `id ${id} deletado` });
  
  
    //   } catch (error) {
    //     return res.status(500).json(error.message);
    //   }
    // }
  }
  
  module.exports = Controller;