appListaContatos.service("operadoraService", function ($http, config) {
    this.getOperadoras = function () {
        return $http.get( config.baseURL + "/operadoras");
    }
});