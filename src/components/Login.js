import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';

class Login extends Component {
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
        }
    }
    login(){
        let data = {
            email:this.state.email,
            password:this.state.password,
        }
        console.log(data)
        fetch('https://reqres.in/api/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(data)
        }).then((response) => {
            response.json().then((result)=>{
                console.warn(result)
                //this.setState({list:result.data})
                if(response.status === 200){
                    localStorage.setItem('login',response)
                    console.warn(this.props.history.push('list'))
                }
                else{
                    alert("Please Check Mail/Password")
                }
            })
        })

        }
    render() {
        return (
            <div>
                <NavBarMenu/>
                <h1>Login</h1>
                <input type='text' name="email" onChange={(event)=>this.setState({email:event.target.value})} placeholder='email'/> <br /> <br />
                <input type='password' name='password' onChange={(event)=>this.setState({password:event.target.value})} placeholder='password' /> <br /> <br />
                <button onClick={()=>this.login()}>Login</button>

            </div>
        );
    }
}

export default Login;