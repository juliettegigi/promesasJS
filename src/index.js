

/*
import './styles.css';
import { promesaLenta,promesaMedia,promesaRapida } from './js/promesas';


//promesaLenta.then((retorno)=>console.log(retorno));
promesaLenta.then(console.log);
promesaMedia.then(console.log);
promesaRapida.then(console.log);

//Promise.race ...le pasamos un conjunto de promesas .then ... y nos retorna la q se resolvió más rápido

Promise.race([promesaLenta,promesaRapida,promesaMedia])
.then(retorno=>console.log("la promesa es " , retorno)).catch(console.warn);




import { buscarHeroe,buscarHeroeAsync } from "./js/promesas";

buscarHeroe('capi').then(console.log);
buscarHeroeAsync('spider').then(console.log);

console.log("quiero ver q me retorna: ",buscarHeroeAsync('spider').then((retorno)=>{
 console.log("asi se retorna ", retorno.nombre);
}));

*/


import {  obtenerHeroesAwait,obtenerHeroesArr2,heroesCiclo } from "./js/await2";
/*
//obtenerHeroesArr()[0].then((heroe)=>console.log(heroe));

//obtenerHeroesArr2().then(console.table);
console.time('await');
obtenerHeroesAwait('capi3')// este  método me controla si ocurre un erro,pero me retorna un hero
.then(heroes=>{
    console.table(heroes);
    console.timeEnd('await');
}).catch(
    console.log(error) );


    */

console.log('---------------------------');
heroesCiclo();