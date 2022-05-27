// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {
    const [error, setError] = React.useState(null)
    const [username, setUsername] = React.useState('')

    const handleSubmit = e => {
        e.preventDefault()
        console.dir(e.target)
        onSubmitUsername(username)
    }

    const changeHandler = e => {
        const { value } = e.target
        const isValid = value === value.toLowerCase()

        setError(isValid ? null : 'Username must be lower case')
        setUsername(value.toLowerCase())
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={changeHandler}
                />
                <div role="alert" style={{ color: 'red' }}>
                    {error}
                </div>
            </div>
            <button type="submit" disabled={Boolean(error)}>
                Submit
            </button>
        </form>
    )
}

function App() {
    const onSubmitUsername = username => alert(`You entered: ${username}`)
    return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
