import React, { useRef, useState } from 'react'

const Items = () => {

    // const [change, setchange] = useState("hello")

    // const sls = () => {

    //     // if (change === "hello") {
    //     //     setchange("sohel rana")
    //     // }
    //     // else {
    //     //     setchange("hello")
    //     // }

    //     change === "hello" ? setchange("sohel") : setchange("hello")




    // }
    const [ince, setince] = useState(0)
    const [block, setblock] = useState(false)
    const [mi, setmi] = useState(false)

    const sks = () => {
        setince(ince + 1)
        setmi(false)
        if (ince + 1 === 10) {
            setblock(true)
        }

    }

    const sa = () => {
        setince(ince - 1)
        setblock(false)
        if (ince - 1 === 0) {
            setmi(true)
        }

    }


    const sae = () => {
        setince(0)
    }



    return (
        <>
            {/* <button onClick={sls}>{change}</button> */}
            <h2>{ince}</h2>
            <button onClick={sks} disabled={block}>increment</button>
            <button onClick={sa} disabled={mi}>increment</button>
            <button onClick={sae}>reset</button>
        </>
    )
}

export default Items