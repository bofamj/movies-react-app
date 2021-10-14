import React from 'react'

const Move = ({name,img,birthday,status,occupation,nickname}) => {
    return (
        <main className='charcMain'>
            <section className='characters'>
                <img src={img} alt={name} />
                
                <main className='discription'>
                    <p>{birthday}</p>
                    <p>{occupation}</p>
                    <p>{status}</p>
                    <p>{nickname}</p>
                </main>  
            </section>
            <h1 className='name'>{name}</h1>
        </main>
        
    )
}

export default Move
