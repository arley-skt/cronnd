const { sequelize } = require('../models/index.js');
const Services = require('./Services.js');

class PedidoServices extends Services {
  constructor() {
    super('Pedido');
  }
  async novoPedido(dadosDoRegistro) {
    //const users = await sequelize.query("SELECT*FROM `pessoas´ ORDER BY id DESC LIMIT ´1;´", { type: QueryTypes.SELECT });
    // console.log(users);
     return await super.criaRegistro(dadosDoRegistro);
    //return users;
  }

  async aCriar(dadosDoRegistro) {
    //const users = await sequelize.query("SELECT*FROM `pessoas´ ORDER BY id DESC LIMIT ´1;´", { type: QueryTypes.SELECT });
    // console.log(users);
     return await super.criaRegistro(dadosDoRegistro);
    //return users;
  }

  async mercado(dadosDoRegistro) {
    //const users = await sequelize.query("SELECT*FROM `pessoas´ ORDER BY id DESC LIMIT ´1;´", { type: QueryTypes.SELECT });
    // console.log(users);
     return await super.criaRegistro(dadosDoRegistro);
    //return users;
  }


     //return pedidodobanco;

}
module.exports = PedidoServices;