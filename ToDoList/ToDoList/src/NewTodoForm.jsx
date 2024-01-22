import { useState } from "react";

import PropTypes from 'prop-types';

export function NewTodoForm( {onSubmit} ) {
    const [newItem,setNewItem] = useState("")
    const [id,setNewId] = useState(0)

    function handleSubmit(e) {
        e.preventDefault()

        if(newItem === "") return
    
        setNewId((prevId) => prevId + 1);
        
        onSubmit(newItem,id)
    
        setNewItem("")
    
      }
    return(
        <form onSubmit={handleSubmit} className='todos-form'>
        <label htmlFor="item">New Item</label>
        <input 
          type="text"
          value={newItem}
          onChange={e => setNewItem(e.target.value)} 
          id='item' 
          maxLength="88"
        />
        <button type="submit" className='btn add'>Add</button>
      </form>
    )
}

NewTodoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };