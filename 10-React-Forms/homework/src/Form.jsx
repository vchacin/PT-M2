import React from 'react';

export default function  Form() {

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <form>
      <div>
        <label>Username:</label>
        <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
      </div>
      <input type="submit" value="Send" />
    </form>
  )
}
