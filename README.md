# sismos-cl

Obtiene la información de los sismos en Chile cuya magnitud es igual o superior a 3.0 desde [sismologia.cl](http://www.sismologia.cl/links/ultimos_sismos.html)

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Test Travis][travis-image]][travis-url]


## Instalación:
```
$npm install sismos-cl
```

## Uso:

```javascript
var sismos = require('sismos-cl');

sismos().then(function (sismos) {
 		console.log(sismos);
});
```

## Respuesta:

```javascript
[ { 'fecha_local': '2017/02/07 08:49:54',
    'fecha_utc': '2017/02/07 11:49:54',
    'latitud': '-30.176',
    'longitud': '-72.048',
    'profundidad': '31.8',
    'magnitud': '3.1 Ml',
    'agencia': 'GUC',
    'referencia_geografica': '54 km al O de Tongoy' },
    ....
]
```

## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/sismos-cl.svg
[npm-url]: https://www.npmjs.com/package/sismos-cl
[downloads-image]: https://img.shields.io/npm/dt/sismos-cl.svg
[downloads-url]: https://www.npmjs.com/package/sismos-cl
[travis-image]: https://api.travis-ci.org/iformas/sismos-cl.svg?branch=master
[travis-url]: https://travis-ci.org/iformas/sismos-cl