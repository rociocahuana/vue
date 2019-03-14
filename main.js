const vm = new Vue({
    el:'main',

    data: {
        mensaje: 'hola mundo',
        condicion:false,
        persona:[
            {nombre:'rocio', prediccion:'alta'},
            {nombre:'laura', prediccion:'alta'},
            {nombre:'adelaida', prediccion:'bajo'}
        ],
        edad: 22,

    },

});