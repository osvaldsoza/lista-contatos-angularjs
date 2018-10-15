appListaContatos.directive("uiAlert", function () {
    return {
        templateUrl: 'view/alert.html',
       //template:"<p>Mensagem: {{info}}</p>",
        replace: false,
        restrict: "AE",
        scope:{
            info: "@"
        },
        transclude: true
    };
});