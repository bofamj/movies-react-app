import React from 'react'
import SerchBar from './combonet/SerchBar'
import Logo from './logo.png'

const Nave = () => {
    return (
        <main className='nave-bar'>
            <div className='photo'>
                <img src={Logo} alt="breking bad" className='hero'/>
            </div>
            
            <section className='search-section'>
                <SerchBar />
            </section>
            
        </main>
    )
}

export default Nave
