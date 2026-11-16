import React from 'react'

const Filter = () => {


    const persons = [
        { id: 1, name: "sohel rana", active: true , price: 383 },
        { id: 3, name: "milon", active: false, price: 480 },
        { id: 2, name: "shamim", active: true, price: 520 },
        { id: 3, name: "firoz", active: false, price: 490 },
        { id: 4, name: "rayhan", active: true, price: 4150 },
        { id: 2, name: "sakil", active: true, price: 4450 },
    ]

    return (
        <>
            {
                persons.filter((data) => data.active)
                    .map((item) => {
                        return (
                            <div className="" key={item.id}>
                                <h3>{item.name}</h3>
                                <h3>{item.price}</h3>

                            </div>
                        )
                    })
            }
        </>
    )
}

export default Filter