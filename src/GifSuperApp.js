import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifSuperApp = () => {

  const [ categories, setCategories ] = useState(['One Punch'])

  return (   
     <> 
       <h3>GifSuperApp</h3>
       <hr />
      
          <AddCategory  setCategories={ setCategories } />

         <ol>
              {
                categories.map( category => (
                    <GifGrid 
                      key={ category }
                      category={ category }
                    /> 
                  
                  ))
                       
                }
          </ol>   
    </>
  ) 
 
}
