appListaContatos.filter("filterIniciais", function () {
    return function (input) {
        var nomes = input.split(" ");
        var inciaisNome = nomes.map(nome => {
            if (nome.length <= 3) return null;
            return nome.charAt(0).toUpperCase();
        });
        return inciaisNome.join("");
    }
})