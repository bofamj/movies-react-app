import React from 'react'
import {useGlobalContext} from '../context';

const SerchBar = () => {
    const {text,setText,getQuery,handleSubmit}= useGlobalContext()
        
    return (
        <form className='search' onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" placeholder="search..." value={text} onChange={(e)=>setText(e.target.value)}/>
        </form>
    )
}

export default SerchBar
