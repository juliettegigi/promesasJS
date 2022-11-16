const heroes= {
    capi:{nombre:"capitan américa",
          poder:"aguantar inyeccionnes sin morir",
         },
    iron:{ nombre: "iron carter",
    poder:"culiar",

    },
    spider:{nombre:"Peter",
    poder:"tejer telas",
   },
}

export const buscarHeroe=(id)=>{
    const heroe=heroes[id];

    return new Promise((resolve,reject)=>{  //un callback de argumento, q se va a ejecutar en un tiempo determinado , es la funcion q queremos ejecutar resolve es cuando se resuelve, lo hace correctamente...reject cuando no se cumple la promesa
        if(heroe)
          resolve(heroe);  // lo que quiero regresar a la funcion q llama a la promesa
        else reject(`no existe ${id}`); 
    });  
}

export const buscarHeroe2=(id)=>{
    const heroe=heroes[id];

    return new Promise((resolve,reject)=>{  //un callback de argumento, q se va a ejecutar en un tiempo determinado , es la funcion q queremos ejecutar resolve es cuando se resuelve, lo hace correctamente...reject cuando no se cumple la promesa
        if(heroe){
           setTimeout(()=>resolve(heroe),0);
        } else reject(`no existe ${id}`); 
    });  
}

export const buscarHeroeAsync= async(id)=>{
    const heroe=heroes[id];

     if(heroe)return heroe;  // lo que quiero regresar a la funcion q llama a la promesa
        else throw`no existe ${id}`; 

}






const promesaLenta=new Promise( (resolve,reject)=>{
    setTimeout( ()=> resolve('Promesa lenta'),2000 );// recibbe un callbback y los milisegubndos
} );

const promesaMedia=new Promise( (resolve,reject)=>{// en resolve va lo que retornamos
    setTimeout( ()=> resolve('Promesa media'),1500);
} );

const promesaRapida=new Promise( (resolve,reject)=>{
    setTimeout( ()=> resolve('Promesa rapida'),1000);//un segunndo
} );

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}


