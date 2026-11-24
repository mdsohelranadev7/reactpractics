import React, { useEffect, useRef, useState } from 'react'
import Useeffect from './Useeffect'

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


    const [productt, setproductt] = useState([])

    useEffect(() => {
        const ala = async () => {

            const api = await fetch("https://dummyjson.com/products")
            const data = await api.json()

            console.log(data);

            setproductt(data.products)

        }
        ala()

    }, [])



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


    const persons = [
        { id: 1, name: "sohelsdfsdfdsf rana", active: true, price: 383 },
        { id: 3, name: "milon", active: false, price: 480 },
        { id: 2, name: "shamim", active: true, price: 520 },
        { id: 3, name: "firoz", active: false, price: 490 },
        { id: 4, name: "rayhan", active: true, price: 4150 },
        { id: 2, name: "sakil", active: true, price: 4450 },
    ]



    return (
        <>

            <div className="">
                {persons.filter((s) => s.active).map((f) => {
                    return (
                        <div className="" key={f.id}>
                            <h4>{f.name}</h4>
                        </div>
                )
                })
                }
            </div>




            {/* <button onClick={sls}>{change}</button> */}
            <h2>{ince}</h2>
            <button onClick={sks} disabled={block}>increment</button>
            <button onClick={sa} disabled={mi}>increment</button>
            <button onClick={sae}>reset</button>



            <div className="">
                {productt.map((it) => {
                    return (

                        <div className="" key={it.id}>
                            <h2>{it.price}</h2>
                        </div>
                    )

                })}



            </div>
        </>


    )
}

export default Items