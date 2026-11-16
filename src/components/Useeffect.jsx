import React, { useEffect, useState } from 'react'
import hero from "../assets/hero.png"

const Useeffect = () => {

    const [counter, setCounter] = useState(0)

    useEffect(() => {

        document.title = counter


    }, [counter])


    return (
        <>
            <h3>{counter}</h3>
            <button onClick={() => setCounter(counter + 1)}>incriment</button>
            <button onClick={() => setCounter(counter - 1)}>Decriment</button>

            <div className="border w-50 relative">
                <img src={hero} alt="heropng" />

                {counter !== 0 && (

                    <h3 className='bg-red-500 text-white w-10 absolute top-0 right-0'>{counter}</h3>
                )}
            </div>

        </>

    )
}

export default Useeffect