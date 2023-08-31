var somar = require("./modulos/somar");
var media = require("./modulos/media");
var multiplica = require ("./modulos/multiplica");
var divisao = require ("./modulos/divisao");
var mensagem = require ("./modulos/mensagem")

console.log("a soma de x e y é" + somar(20,90));
console.log("a media de x e y é" + media(20,90));
console.log("a multiplicação de x e y é" + multiplica(20,90));
console.log("a divisao é x e y é" + divisao(20,90));
console.log(mensagem + ("Alex"))