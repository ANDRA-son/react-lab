import React, { useState } from 'react'

function Registeration() {
    let [user, setUser] = useState({ username: '', password: '' })
    let { username, password } = user;
    let handleChange = (e) => {
        let { name, value } = e.target
        setUser({ ...user, username: 'trisha' })//username:'revathi',password:''
        //setUser({..user,age:44});
        // username,password,age
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }
    return (
        <form onSubmit={handleSubmit}>

            Username:<input type="text" name="username" onChange={handleChange} /><br />
            Password:<input type="text" name="password" onChange={handleChange} /><br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Registeration
