import React, { useState } from 'react';
import NavBarMenu from './NavBarMenu';

const UsertCreate = () => {

    const [first_name,setFirstName] = useState('');
    const [last_name,setLastName] = useState('');
    const [email,setMail] = useState('');

    const create = async () => {
        //console.warn(this.state)
        fetch('https://reqres.in/api/users',{
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                first_name:first_name,
                last_name:last_name,
                email:email
            })
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

    const handelUserinputFirstName = (event) => {
        setFirstName(event.target.value);
    };
    const handelUserinputLastName = event => {
        setLastName(event.target.value);
    };
    const handelUserinputMail = (event) => {
        setMail(event.target.value);
    };
    
        return (
            <div>
                <NavBarMenu/>
                <h1>userCreate</h1>
                <div>
                    <input onChange={handelUserinputFirstName} placeholder='First Name' /> <br/> <br />
                    <input onChange={handelUserinputLastName} placeholder='Last Name' /> <br/> <br />
                    <input onChange={handelUserinputMail} placeholder='Email' /> <br/> <br />

                    <button onClick={() => { create() }}>Add User</button>
                </div>
            </div>
        );
    }

export default UsertCreate;