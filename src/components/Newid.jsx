import React, { useState } from 'react'

const Newid = () => {
    const [inc, setinc] = useState(0)
    const [bl, setbl] = useState(false)


    const sks = () => {

        setinc(inc + 1)
        setbl(true)
        if (inc + 1 === 10) {
            sks(false)
        }


    }
    const skss = () => {

        setinc(inc - 1)
        setbl(true)
        if (inc - 1 === 0) {
            skss(false)
        }

    }




    return (

        <>

            <div className=" flex gap-x-2">
                <h3>{inc}</h3>
                <button onClick={sks} disabled={bl} className='cursor-pointer' >Increment</button>
                <button onClick={skss} disabled={bl} className='cursor-pointer'>Decrement</button>
                <button onClick={() => setinc(0)} className='cursor-pointer'>reset</button>
            </div>


        </>
    )
}

export default Newid