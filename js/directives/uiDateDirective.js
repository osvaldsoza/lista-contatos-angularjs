appListaContatos.directive("uiDate", function ($filter) {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            var _formatDate = date => {
                date = date.toString().replace(/[^0-9]+/g, "");
                if(date.length > 2){
                    date = date.substring(0,2) + "/" + date.substring(2);
                }
                if(date.length > 5){
                    date = date.substring(0,5) + "/" + date.substring(5,9);
                }
                return date;
            };

            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                ctrl.$render();
            });

            //data para milisegundos
            ctrl.$parsers.push(value => {
                if(value.length === 10){
                    var dataArray = value.split("/");
                    return new Date(dataArray[2],dataArray[1],dataArray[0]).getTime();
                }
            });

            //milisegundos para data
            ctrl.$formatters.push(value => {
                return $filter("date")(value, "dd/MM/yyyy");
            });
        }
    };
});