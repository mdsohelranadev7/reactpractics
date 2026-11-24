
import React from 'react'

const Mapitem = () => {
    const newitem = [
        { name: "iphone", price: 80000, camera: "40mp" },
        { name: "samsang", price: 18000, camera: "40mp" },
        { name: "vivo", price: 500, camera: "40mp" },
        { name: "redmi", price: 9000, camera: "40mp" },
    ]
    return (
        <>
            {
                newitem.map((s) => {
                    return (
                        <div className="" key={s.name}>
                            <h3>{s.price}</h3>
                        </div>
                    )
                })
            }
        </>


    )
}

export default Mapitem