class Controller {
    constructor(entidadeService) {
      this.entidadeService = entidadeService;
    }
  
    async pegaTodos(req, res) {
      try {
        const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
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
      var obj ='{"id":9,"nome":"Joao Estudante","email":"joao@email.com","cpf":"63058133022","ativo":true,"role":"engenheiro","createdAt":"2024-02-04T04:20:00.794Z","updatedAt":"2024-02-04T18:01:08.392Z"}'
      console.log(obj);
      try {
        const novoRegistroCriado = await this.entidadeService.criaRegistrocron(dadosParaCriacao);
        console.log(novoRegistroCriado);
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