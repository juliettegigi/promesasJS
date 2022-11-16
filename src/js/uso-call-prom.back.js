import './styles.css';
import {buscarHeroe as buscarHeroCallback} from './js/callback'
import {buscarHeroe} from './js/promesas'
// const heroeId="capi";
// buscarHeroe(heroeId,(err,heroe)=>{
//   if(err)
//     return console.error(err);
//   console.info(heroe);  
// })


 const heroeId1="capi2";
 const heroeId2="spider";
// buscarHeroe(heroeId1,(err,heroe1)=>{
//   if(err)
//     return console.error(err);
// buscarHeroe(heroeId2,(err,heroe2)=>{
//         if(err)
//     return console.error(err);
//     })


// });


// buscarHeroe(heroeId1).then(heroe1=>{ //then es cuando todo sucede correctamente...recibo a la promesa. las promesas se ejecutann al final, para no bloquear a la ejecución del programma
//    // console.log(`enviando a ${heroe1.nobre} a la mision`);
//    buscarHeroe(heroeId2).then(heroe2=>{
//          console.log(`enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la misión `);
//    })


// })


//EJECUTAR PROMESAS EN PARALELO
// mandamos cosas en el Promiseall...y hasta que no se resuelvan no se ejecuta lo de adentro
Promise.all([true,'hola',123]).then(arr=>{
    console.log('promise.all',arr);
});//recibe un arreglo de objetos

Promise.all([buscarHeroe(heroeId1),buscarHeroe(heroeId2)])
.then(arrHeroes=>{
    console.log(`enviando a ${arrHeroes[0].nombre} y a ${arrHeroes[1].nombre} a la misión `);
}).catch((retornoError)=>{
    alert(retornoError);
});



Promise.all([buscarHeroe(heroeId1),buscarHeroe(heroeId2)])
.then(([heroe1,heroe2])=>{
    console.log(`enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la misión `);
}).catch((retornoError)=>{
    alert(retornoError);
}).finally(()=>{
    console.log("me ejecuto siempre");
});



buscarHeroe("spider").then((retorno)=>{
  console.log(`lo que em retorna es ${retorno.nombre}`);
})

Promise.all

console.log('fin programa');