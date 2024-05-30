import React from 'react'
import { searchEmoji } from '../helpers/searchEmoji'
import Item from './Item';

const Result = ({ valueEmoji }) => {

    const arrayEmojis = searchEmoji(valueEmoji);
    console.log(arrayEmojis)

  return (
    <section className='container results'>
        {
            arrayEmojis && arrayEmojis.map(item => (
                <Item
                     key={item.title} 
                     title={item.title}   
                     emoji={item.symbol}           
                />
            ))
        }
    </section>
  )
}

export default Result