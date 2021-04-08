import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';

class UsertCreate extends Component {
    constructor(){
        super();
        this.state={
            first_name:null,
            last_name:null,
            email:null,
        }
    }
    create(){
        //console.warn(this.state)
        fetch('https://reqres.in/api/users',{
            method: 'Post',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((res)=>{
                //console.warn(res)
                let putT = [
                    '{\n'+
                    'id:'+res.id+'\n'+
                    'first_name:'+ res.first_name +'\n'+
                    'last_name:'+ res.last_name +'\n'+
                    'email:'+ res.email +'\n'+
                    'createdAt:'+ res.createdAt +'\n'+
                    '}'
                ]
                alert("User Added \n Response:\n"+putT)
            })
        })
    }
    render() {
        return (
            <div>
                <NavBarMenu/>
                <h1>userCreate</h1>
                <div>
                    <input onChange={(event)=>{
                        this.setState({first_name: event.target.value})
                    }} placeholder='First Name' /> <br/> <br />
                    <input onChange={(event)=>{
                        this.setState({last_name: event.target.value})
                    }} placeholder='Last Name' /> <br/> <br />
                    <input onChange={(event)=>{
                        this.setState({email: event.target.value})
                    }} placeholder='Email' /> <br/> <br />

                    <button onClick={() => { this.create() }}>Add User</button>
                </div>
            </div>
        );
    }
}

export default UsertCreate;