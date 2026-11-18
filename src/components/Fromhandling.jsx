import React, { useState } from 'react'

const Fromhandling = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")



    const vla = (s) => {
        s.preventDefault()
        console.log(name, email, password);
    }

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

            <div className="">
                <button>Dark</button>
            </div>

        </>





    )
}

export default Fromhandling