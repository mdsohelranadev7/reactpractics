import React, { useState } from 'react'

const Newid = () => {

  const [count, setcount] = useState(0)
  const [countt, setcountt] = useState(false)



  const sk = () => {
    setcount(count + 1)
    setcountt(true)

  }

  const de = () => {

    const ne = count - 1
    setcount(ne)
    setcountt(ne > 0)

  }

  const re = () => {

    setcount(0)
    setcountt(false)

  }

  return (
    <>
      <div className="">
        <h3>{count}</h3>
        <button onClick={sk}>increment</button>
        <button onClick={de}>Decrement</button>
        <button onClick={re}>reset</button>

        <div className=" w-20 h-20 border mt-20 relative">
          {
            countt && <span className='absolute top-0 right-0'>{count}</span>
          }
          <h3>sohel</h3>
        </div>
      </div>
    </>
  )
}

export default Newid