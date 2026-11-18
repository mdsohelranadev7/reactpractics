import { useEffect, useState } from 'react'

const Fatchdata = () => {

    const [product, setproduct] = useState([])
    useEffect(() => {
        const ad = async () => {
            const api = await fetch("https://dummyjson.com/products")
            const data = await api.json()
            console.log(data);
            setproduct(data.products)
        }
        ad()
    }, [])

    return (
        <>
            <div >
                {product.map((s) => {
                    return (

                        <div className="" key={s.id}>
                            <h3>{s.price}</h3>
                        </div>
                    )

                })}

            </div>
        </>
    )
}

export default Fatchdata