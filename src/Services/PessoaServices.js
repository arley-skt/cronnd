const { sequelize } = require('../models/index.js');
const Services = require('./Services.js');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
  }

  async retornadown (nome){

    try{
    const x = await super.dataSource[this.model].findOne({where : {...nome}, logging: console.log});

    return x;
    }catch(erro){

    }
     //return pessoadobanco;
   }
   
}



module.exports = PessoaServices;