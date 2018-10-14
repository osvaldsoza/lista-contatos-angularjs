appListaContatos.provider("serialGenerator", function () {
    this.$get = function () {
        return {
            generate: function () {
                var serial = "";
                while (serial.length < 20) {
                    serial += String.fromCharCode(Math.floor(Math.random() * 60) + 32);
                }
                return serial;
            }
        };
    };
})