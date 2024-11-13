// Tehtävän 8 js-koodi

'use strict';

// Kysytään käyttäjältä tarvittavat lähtötiedot numeroina
const alku = +prompt("Anna aloitusvuosi: ")
const loppu = +prompt("Anna loppuvuosi: ")

// Käydään kaikki vuodet läpi yksitellen alkuvuodesta loppuvuoden asti
// Muuttuja 'vuosi' saa yksitellen kaikki em. arvot
for (let vuosi = alku; vuosi <= loppu; vuosi++) {
    // Onko vuosi karkausvuosi?
    // 'vuosi' on jaollinen 400:lla TAI 'vuosi' on jaollinen 4:lla ja EI ole jaollinen 100
    if( (vuosi % 400 == 0) || (vuosi % 4 == 0 && vuosi % 100 != 0) ){
        document.querySelector('#tulosAlue').innerHTML +=
            `vuosi ${vuosi} on karkausvuosi <br>`
    }
}