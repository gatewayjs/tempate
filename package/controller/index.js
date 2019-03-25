const { Http, Controller } = require('@gatewayjs/gateway');

@Controller
class Index {
  @Http.GET
  async Home() {
    return 'Hello world!';
  }
}

module.exports = Index;