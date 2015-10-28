var assert = require("assert");
empresas_app = require(__dirname+"/../app.js");

describe('Empresas', function(){
    describe('Carga', function(){
        it('Debe cargar el programa web sin problemas', function(){
            assert(empresas_app, "El programa se ha cargado sin problemas");
        });
    });
});
