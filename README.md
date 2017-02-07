# sismos-cl

Obtiene la información de los sismos en Chile cuya magnitud es igual o superior a 3.0 desde [sismologia.cl](http://www.sismologia.cl/links/ultimos_sismos.htm)



### Utilización:

```javascript
var sismos = require('sismos-cl');

sismos().then(function (sismos) {
 		console.log(sismos);
});
```

### Respuesta:

```javascript
[ { 'Fecha Local': '2017/02/07 08:49:54',
    'Fecha UTC': '2017/02/07 11:49:54',
    Latitud: '-30.176',
    Longitud: '-72.048',
    'Profundidad [Km]': '31.8',
    Magnitud: '3.1 Ml',
    Agencia: 'GUC',
    'Referencia Geográfica': '54 km al O de Tongoy' },
    ...
]
```