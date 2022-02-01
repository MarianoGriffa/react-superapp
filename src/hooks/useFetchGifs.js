import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'; 

export const useFetchGifs = ( category ) => {

    const [ current, setCurret ] =  useState({
      data: [],
      loading: true
    })
     
    //Solo se dispara cuando cambia la categoria
    useEffect(() => { 

      getGifs(category)
        .then( imgs => { 
           
            setCurret({
             data: imgs, 
             loading: false
           }) 
      })

    }, [ category ])

    return current;
   
  };
  