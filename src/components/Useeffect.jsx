import React, { useEffect, useState } from 'react'
import hero from "../assets/hero.png"

const Useeffect = () => {

    const [counter, setCounter] = useState(0)

    useEffect(() => {

        document.title = counter


    }, [counter])

    const [dark, setdark] = useState(false)

    useEffect(() => {
        document.body.style.background = dark ? "#fff" : "#222"
        document.body.style.background = dark ? "#222" : "#fff"

    }, [dark])








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

            <div className={dark ? "text-white" : "text-black"}>
                <button onClick={() => setdark(!dark)}>{dark ? "light" : "dark"}</button>
            </div>

        </>

    )
}

export default Useeffect