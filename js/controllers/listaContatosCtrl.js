appListaContatos.controller("listaContatosCtrl", function ($scope, contatoFactory, operadoraService, serialGenerator) {
  $scope.app = "Lista  de Contatos";
  $scope.dataHoje = new Date();
  $scope.contatos = [];
  $scope.operadoras = [];

  var carregarContatos = function () {
    contatoFactory.getContatos().then(function (response) {
      $scope.contatos = response.data;
    }, function (err) {
      console.log(err);
    });
  };

  var carregarOperadoras = function () {
    operadoraService.getOperadoras().then(function (response) {
      $scope.operadoras = response.data;
      console.log($scope.operadoras)
    }, function (err) {
      console.log(err);
    });
  };

  $scope.AdicionarContato = function (contato) {
    contato.serial = serialGenerator.generate();
    contatoFactory.saveContato(contato).then(function () {
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      carregarContatos();
    });
  };

  $scope.deletarContatos = function (contatos) {
    $scope.contatos = contatos.filter(function (contato) {
      if (!contato.selecionado) return contato
    });
  };

  $scope.isContatoSelecionado = function (contatos) {
    return contatos.some(function (contato) {
      return contato.selecionado;
    });
  };

  $scope.ordenarPor = function (campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
  };

  carregarContatos();
  carregarOperadoras();
});