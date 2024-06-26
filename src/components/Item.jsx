import React from 'react'
import { useState } from 'react';

const Item = ( {title, emoji}) => {

  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    setCopy(true);
    navigator.clipboard.writeText(emoji);
    setTimeout(() => setCopy(false), 3000);
  }
  return (
   <article className='card-emoji'>
        <p className='emoji-icon' onClick={handleCopy}>{emoji}</p>
        <h4>{title}</h4>
        {
          copy && <p className="copied">Copiado</p>
        }
        
   </article>
  )
}

export default Item