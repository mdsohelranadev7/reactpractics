import React, { useEffect, useState } from 'react'

const Fromhandling = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")



    const vla = (s) => {
        s.preventDefault()
        console.log(name, email, password);
    }


    const [dark, setdark] = useState(false)

    useEffect(() => {

        document.body.style.background = dark ? "#fff" : "#111"
        document.body.style.background = dark ? "#111" : "#fff"



    }, [dark])










    return (
        <>
            <form onSubmit={vla}>
                <div className="">
                    name:-<input className='border rounded-2xl mt-1' type="text" value={name} onChange={(s) => setname(s.target.value)} /> <br />
                </div>
                <div className="">
                    email:-<input className='border rounded-2xl mt-1' type="email" value={email} onChange={(s) => setemail(s.target.value)} /><br />
                </div>
                <div className="">
                    password:-<input className='border rounded-2xl mt-1' type="password" value={password} onChange={(s) => setpassword(s.target.value)} />
                </div>
                <input type="submit" value={"submit"} />
            </form>

            <div className={dark ? "text-white" : "text-black"}>
                <button onClick={() => setdark(!dark)}>{dark ? "light" : "dark"}</button>
            </div >

        </>





    )
}

export default Fromhandling