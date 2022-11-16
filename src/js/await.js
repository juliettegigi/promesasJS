import{buscarHeroeAsync} from './promesas'
const heroesIdes=["capi","iron","spider"];

/* con estos id quiero llamar a buscarHeroeAsync y 
retornar un arreglo con c/u de esos heroes... 
*buscarHeroes retorna promesas
*Esto tiene mmás sentido cuando trabbajamos con peticiones http 
porq las peticiones http pueden demorar
*en nuestro caso estamos haciendo unnna peticion q mediante una prommesa
me regresa informacion del heroe respectivo en bbase al id

*/

export const obtenerHeroesArr= async ()=>{
    const heroesArr=[];
    for(const id of heroesIdes){
        const heroe= await buscarHeroeAsync(id);
        heroesArr.push(heroe);
    } 
    
    return heroesArr;
}