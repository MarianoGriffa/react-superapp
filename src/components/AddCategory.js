import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  
  const [ inputValue, setInputValue ] = useState('')
    
    const handleInputOnChange = ({ target }) => { 
      setInputValue( target.value );
    }

    const handleOnSubmit = ( e ) => {  
      e.preventDefault();
       
       if (inputValue.trim().length > 2)
        setCategories( cats => [  inputValue, ...cats, ] );
        setInputValue(''); 
    }
 
  return (  
      <form onSubmit={ handleOnSubmit }>  
         <input 
           placeholder='Categoria'
           type="text" 
           value={ inputValue }
           onChange={ handleInputOnChange }
          />
       </form>
       )

       }


  AddCategory.propTypes = {
    setCategories:  PropTypes.func.isRequired
  }     

