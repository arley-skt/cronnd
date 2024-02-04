const Controller = require('./Controller.js');
const PessoaServices = require('../Services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }
}

module.exports = PessoaController;