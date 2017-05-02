const request = require('request');
const _ = require('lodash')
const vow = require('vow');
const cheerio = require("cheerio");

module.exports = function () {
    return new vow.Promise(function (resolve, reject) {
        url = 'http://www.sismologia.cl/links/ultimos_sismos.html';
        request(url, function (err, response, body) {
            if (err) {
                reject(err);     
            }
            try {
                if (body) {
                    var $ = cheerio.load(body);
                    var sismos = [];
                    var th = ["fecha_local", "fecha_utc", "latitud", "longitud", "profundidad", "magnitud", "agencia", "referencia_geografica"]
                    $('tbody  > tr').each(function (index) {
                        if (index>0){
                            var cells = $(this).children();
                            var sismo = {};                        
                            for (i = 0; i < cells.length; i++) {
                                if (th.length < (cells.length)) {
                                    reject(new Error('El numero de columnas es mayor al formato especificado | ¿El sitio fue actualizado?'));                               
                                } else {
                                    sismo[th[i]] = cells.eq(i).text();
                                }
                            }
                        }
                        if (!_.isEmpty(sismo)) {
                            sismos.push(sismo);
                        }
                    });
                    resolve(sismos);
                } else {
                    reject(body);
                }
            } catch (e) {
                reject(e);
            }
        })
    });
}

