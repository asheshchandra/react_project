import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const [username, setUsername] = userState("")
    const [password, setPassword] = userState("")

    const {setUser} = userContext(UseContext)

    const handleSubmit= (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>login</h2>
        <input type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username' />
        <input type="text" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Profile