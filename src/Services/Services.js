const dataSource = require('../models');
const { QueryTypes } = require('sequelize');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async retornadownn (nome){

    try{
    const x = await dataSource[this.model].findOne({where : {nome}});

    return x;
    }catch(erro){

    }
     //return pessoadobanco;
   }

  async pegaTodosOsRegistros () {
    return dataSource[this.model].findAll();
  }

  // async pegaUmRegistroPorId(id) {
  //   return dataSource[this.model].findByPk(id);
  // }

  async criaRegistro(dadosDoRegistro) {
    //const users = await sequelize.query("SELECT*FROM `pessoas´ ORDER BY id DESC LIMIT ´1;´", { type: QueryTypes.SELECT });
    // console.log(users);
     return dataSource[this.model].create(dadosDoRegistro);
    //return users;
  }

    async criaRegistrocron(dadosDoRegistro) {
      var Id = dataSource[this.model]
      var obj ='{"id":9,"nome":"Joao Estudante","email":"joao@email.com","cpf":"63058133022","ativo":true,"role":"engenheiro","createdAt":"2024-02-04T04:20:00.794Z","updatedAt":"2024-02-04T18:01:08.392Z"}'
    return dataSource[this.model].create(dadosDoRegistro);
  }
  async atualizaRegistro(dadosAtualizados, id) {
    const listadeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizados, {
      where: { id: id }
    });
    if (listadeRegistrosAtualizados[0] === 0) { 
      return false;
    }
    return true;
  }

  // async excluiRegistro(id) {
  //   return dataSource[this.model].destroy({ where: { id: id } });
  // }
}

module.exports = Services;