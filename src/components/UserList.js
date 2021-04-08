import React, { Component } from 'react';
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import NavBarMenu from './NavBarMenu';

class UserList extends Component {
    constructor(){
        super();
        this.state={
            list:null,
        }
    }
    componentDidMount(){
      this.getList()
    }
    getList(){
        fetch("https://reqres.in/api/users").then((response) => {
            response.json().then((result)=>{
                //console.warn(result)
                this.setState({list:result.data})
            })
        })
    }
    delete(id){
        fetch('https://reqres.in/api/users/'+id,{
            method: 'DELETE',
        }).then((res)=>{
            //result.json().then((res)=>{
               // console.warn(res)
                alert("User Deleted\n Response Status: "+res.status);
                this.getList()
            })
    }
    
    render() {
        //console.warn(this.state)
        return (
            <div>
                <NavBarMenu />
                <h1>userList</h1>
                {
                    this.state.list?
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                        {this.state.list.map((item)=>
                        // <div key={item.id} className="list-wrapper">
                        // <span >{item.first_name}</span>
                        // <span >{item.last_name}</span>
                        // <span >{item.email}</span>
                        // </div>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td><Link to={'/update/'+item.id}>Edit | </Link>
                            <span onClick={()=>this.delete(item.id)}>Delete</span></td>
                            
                        </tr>
                        )}
                         </tbody>
                        </Table>
                    :<p>Loading...</p>
                }
            </div>
        );
    }
}

export default UserList;