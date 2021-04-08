import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';

class UserUpdate extends Component {
    constructor(){
        super();
        this.state={
            first_name:' ',
            last_name:' ',
            email:' ',
        }

    }
    componentDidMount(){
        fetch('https://reqres.in/api/users/'+this.props.match.params.id).then((response) => {
            response.json().then((result)=>{
                //console.warn(result)
                //this.setState({list:result.data})
                this.setState({first_name:result.data.first_name,
                    last_name:result.data.last_name,
                    email:result.data.email,
                    id:result.data.id,
                })
            })
        })
    }
    update(){
        fetch('https://reqres.in/api/users/'+this.state.id,{
            method: 'PUT',
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
                    'updatedAt:'+ res.updatedAt +'\n'+
                    '}'
                ]
                alert("User Updated \n Response:\n"+putT)
            })
        })
    }
    render() {
        //console.warn(this.props.match.params.id)
        return (
            <div>
                <NavBarMenu/>
                <h1>UserUpdate</h1>
                <div>
                    <input onChange={(event)=>{
                        this.setState({first_name: event.target.value})
                    }} placeholder='First Name' value={this.state.first_name} /> <br/> <br />
                    <input onChange={(event)=>{
                        this.setState({last_name: event.target.value})
                    }} placeholder='Last Name' value={this.state.last_name}/> <br/> <br />
                    <input onChange={(event)=>{
                        this.setState({email: event.target.value})
                    }} placeholder='Email' value={this.state.email}/> <br/> <br />

                    <button onClick={() => { this.update() }}>Update User</button>
                </div>
            </div>
        );
    }
}

export default UserUpdate;