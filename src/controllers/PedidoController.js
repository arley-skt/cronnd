const Controller = require('./Controller.js');
const PedidoServices = require('../Services/PedidoServices.js');

const pedidoServices = new PedidoServices();

class PedidoController extends Controller {
  constructor() {
    super(pedidoServices);
  }

  async aCriar(req, res) {
    try {
      var novopedido = req.body;
      var listaDeRegistro = await this.entidadeService.aCriar(novopedido);
      return res.status(200).json(listaDeRegistro);
    } catch (erro) {
      // erro
    }
  }
}
module.exports = PedidoController;