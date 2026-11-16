import React, { useEffect, useState } from 'react'
import Useeffect from './components/Useeffect'

const Fatchdata = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const fare = async () => {
            const api = await fetch("https://dummyjson.com/products")
            const data = await api.json()
            // console.log(data);
            setProduct(data.products)
        }
        fare()

    }, [])



    useEffect(() => {
        const ra = async () => {
            const api = await fetch("link")
            const data = await api.json()
            setProduct(data)
        }

        ra()
    }, [])


    return (
        <div>{product.map((item) => (
            <div className="" key={item.id}>
                <h2>{item.title}</h2>
                <h3>{item.price}</h3>
            </div>
        )

        )}</div>
    )
}

export default Fatchdata