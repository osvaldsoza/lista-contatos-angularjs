appListaContatos.filter("filterName", function () {
    return function (input) {
        var listaDeNomes = input.split(" ");
        var listaDeNomesFormatada = listaDeNomes.map(nome => {
           if (nome.length <= 3) return null;
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
        });
        return listaDeNomesFormatada.join(" ");
    };
});