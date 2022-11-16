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
}  // estó es como un clave valor...un conjunto de clave-valor


export const buscarHeroe=(heroeId, callback)=>{
     const heroe=heroes[heroeId];  // nos devuelve el valor de esa clave y si no la encuentra... heroe vale undefined
    if(!heroe)
        callback(`no existe ese id ${heroeId}`);
    else    
     callback(null,heroe);
}