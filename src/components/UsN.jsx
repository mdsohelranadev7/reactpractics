import React, { useEffect, useState } from 'react'


const UsN = () => {

    const [producta, setproducta] = useState([])
    useEffect(() => {
        const api = async () => {

            const data = await fetch("https://dummyjson.com/products")
            const ak = await data.json()

            setproducta(ak.products)
            console.log(ak.products);
        }
        api()

    }, [])



    return (
        <>
            <div className="">
                {producta.map((s) => {
                    return (
                        <div className="" key={s.id}>
                            <h1>{s.category}</h1>
                        </div>
                    )
                })}
            </div>



        </>
    )
}

export default UsN