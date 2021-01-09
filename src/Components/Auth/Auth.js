import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import Link from '@material-ui/core/Link'

function Auth(){
    const [isRegistered,setIsRegistered] = useState(false)
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    function changeView(){
        Array.from(document.querySelectorAll('Input')).forEach(Input => (Input.value = ''))
        setUsername('')
        setPassword('')
        setConfirmPassword('')
        setIsRegistered(!isRegistered)
    }

    return(
        <>
        {isRegistered === false ? (
            <div>
                <h1>Login</h1>
                <Input 
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username'
                />
                <Input
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                />
                <Button 
                    onClick={() => console.log(username,password)}>
                        Login
                </Button>
                <p>Not registered? Click <Link
                    onClick={() => changeView()}
                    type='reset'
                    defaultValue='reset'>here.</Link></p>
            </div>
        ):(
            <div>
                <h1>Register</h1>
                <Input 
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username'
                />
                <Input
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                />
                <Button 
                    onClick={() => console.log(username,password)}>
                        Register
                </Button>
                <p>Already registered? Click <Link
                    onClick={() => changeView()}
                    type='reset'
                    defaultValue='reset'>here.</Link></p>
            </div>
        )}
        </>
    )
}

export default Auth
