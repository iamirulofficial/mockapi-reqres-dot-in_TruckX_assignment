import React from 'react';
import { Table} from 'react-bootstrap'
import NavBarMenu from './NavBarMenu';
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const UserSearch = (props) => {
    const [list, setList] = useState([]);
    const [key, setKey] = useState('');

    useEffect(() => {
        getList();
    }, []);
    const getList = async () => {
        try {
            const response = await fetch("https://reqres.in/api/users");
            const result = await response.json();
            //console.warn(result.data)
            setList(result.data);
            //console.warn(list);
        } catch (err) {
            console.log(err);
        }
    }
    const deleteItem =(id)=>{
        try
        {
            fetch('https://reqres.in/api/users/'+id,{
            method: 'DELETE',}).then((res)=>{
            //result.json().then((res)=>{
               // console.warn(res)
                alert("User Deleted\n Response Status: "+res.status);
                getList()
            })
        }
        catch (err)
        {
            console.log(err);
        }
        
    }
    const updateInput = async (e) => {
        setKey(e.target.value);
        if (key.length > 2) {
            const filtered = list.filter(i => {
                return i.first_name.toLowerCase().includes(key.toLowerCase()) || i.last_name.toLowerCase().includes(key.toLowerCase()) || i.email.toLowerCase().includes(key.toLowerCase())
            })
            //setKey(key);
            setList(filtered);
            //console.log(list)
        }
    }

    return (
        <>
            <NavBarMenu />
            <div>
                <h1>UserSearch</h1>
                <input
                    value={key}
                    placeholder='Search...'
                    onChange={updateInput} />
                    <br />

                {
                    list ?
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list && list.map((item) =>
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
                            <span onClick={()=> deleteItem(item.id)}>Delete</span></td>

                                    </tr>
                                )}
                            </tbody>
                        </Table>
                        : <p>Loading...</p>
                }
            </div>
        </>
    );
}

export default UserSearch;