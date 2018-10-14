appListaContatos.filter("abre", function () {
    return function (input, size) {
        if (input === null || input === " ") {
            return " ";
        } else {
            if (input.length <= size) return input;
            var output = input.substring(0, size || 3) + "...";
            return output;
        }
    };
});