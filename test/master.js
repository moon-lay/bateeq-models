var validate = require('../src/validator').master;

it("#01. Item should valid", function(){
    var Item = require('../src/master/item');
    validate.item(new Item());
})

it("#02. FinishedGoods should valid", function(){
    var FinishedGoods = require('../src/master/finished-goods');
    validate.finishedGoods(new FinishedGoods());
})

it("#03. Material should valid", function(){
    var Material = require('../src/master/material');
    validate.material(new Material());
})
 
it("#04. Component should valid", function(){
    var Component = require('../src/master/component');
    validate.component(new Component());
})
 