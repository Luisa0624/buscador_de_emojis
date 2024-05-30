import React from 'react'
import { useState } from 'react';

const Form = ({setValueEmoji}) => {

    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const handleSearch = e =>{
        e.preventDefault();
        if(value=== ''){
            setError(true);
            setTimeout(() => setError(false), 3000);
            return;
        }
        setValueEmoji(value);
        console.log(value);
    }
    const allEmojis = () => {
        setValueEmoji('');
    }

  return (
    <section className='form'>
        <form onSubmit={handleSearch}>
            <input 
                type='text' 
                placeholder='Palabra para buscar emoji'
                onChange={e => setValue(e.target.value)}
            />
            <button type="button" onClick={allEmojis}>
                Todos
            </button>
        </form>
        { error && <p className='error'>Campo Vacio</p> }
        
    </section>
  )
}

export default Form