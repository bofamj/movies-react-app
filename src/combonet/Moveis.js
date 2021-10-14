import React from 'react';
import Move from './Move';
import {useGlobalContext} from '../context';
import Spinner from '../spinner.gif'

const Moveis = () => {
    const {carcter,loading} = useGlobalContext()
    if(loading){
        return(
            <img src={Spinner} alt="loading..." className="loading"/>
        )
    }
    return (
        <main className="mai-continer">
            <section className='mov-section'>
                {carcter.map((carc)=>{
                    return <Move key={carc.char_id} {...carc}/>
                })}
            </section>
            
        </main>
    )
}

export default Moveis
