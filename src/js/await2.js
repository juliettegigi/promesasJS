import{buscarHeroeAsync,buscarHeroe2, buscarHeroe} from './promesas'
const heroesIdes=["capi","iron","spider"];
const heroesPromesas=heroesIdes.map(buscarHeroe);

export const obtenerHeroesArr1= async ()=>{
   return  await Promise.all(heroesIdes.map(buscarHeroe2));
    // const heroesArr=[];
    // for(const id of heroesIdes){
       
    //     heroesArr.push(buscarHeroe2(id));
    // } 
    
    // return await Promise.all(heroesArr);
}


// otra forma
export const obtenerHeroesArr2= async ()=>await Promise.all(heroesIdes.map(buscarHeroe2));
  


//manejo de errores

export const obtenerHeroesAwait=async (id)=>{
    try{const hero=await buscarHeroeAsync(id);//esto me retorna un error o el hero
    return   hero;
} catch(error){
    console.log(error);
    return({
        nombre:'sin nombre',
        poder:'sin poder',  //  o throw(error); ==> el q invoque va a tener q manejar al error
    });
}
}

export const heroesCiclo=async ()=>{
    console.time('heroesCiclo');

for await(const heroe of heroesPromesas){
      console.log(heroe);
}
    // //const heroesPromesas=heroesIdes.map(buscarHeroe);
// console.log('hola');
// console.log(await heroesPromesas);
// const heroes = await Promise.all(heroesPromesas);// le aplicó el await a todos
// heroes.forEach(console.log);
// console.log(heroes);
console.timeEnd('heroesCiclo');
}