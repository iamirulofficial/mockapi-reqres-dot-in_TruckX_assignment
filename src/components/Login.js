import NavBarMenu from './NavBarMenu';
import { useState } from 'react'

const Login = (props) => {

    const [email, setMail] = useState('');
    const [password, setPass] = useState('');

    const login = () => {
        try {
            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    email,
                    password
                })
            }).then((response) => {
                response.json().then((result) => {
                    console.warn(result)
                    //this.setState({list:result.data})
                    if (response.status === 200) {
                        localStorage.setItem('login', response)
                        console.warn(props.history.push('list'))
                    }
                    else {
                        alert("Please Check Mail/Password")
                    }
                })
            })
        } catch (err) {
            console.log(err);
        }

    }

    const handelUsermail = event => {
        setMail(event.target.value);
    };

    const handelPassword = event => {
        setPass(event.target.value);
    };

    return (
        <div>
            <NavBarMenu />
            <h1>Login</h1>
            <input type='text' name="email" onChange={handelUsermail} placeholder='email' /> <br /> <br />
            <input type='password' name='password' onChange={handelPassword} placeholder='password' /> <br /> <br />
            <button onClick={() => login()}>Login</button>

        </div>
    );
}

export default Login;