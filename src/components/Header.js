import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import UserList from './UserList'
import UserSearch from './UserSearch'
import UserUpdate from './UserUpdate'
import UserCreate from './UsertCreate'
import Login from './Login'
import Logout from './Logout';
import Protected from './Protected'


class Header extends Component {
    render() {
        return (
            <>
                <Router>
               
                   
                <Route path="/logout">
          <Logout />
        </Route> 
        
        {/*  */}
        <Route path="/login"
        render={props=>(
      <Login {...props} />
        )}
        >
        </Route>
        {/*  */}
        
        <Protected exact path="/update/:id" component={UserUpdate} />
        <Protected exact path="/search" component={UserSearch} />
        <Protected exact path="/create" component={UserCreate} />
        <Protected exact path="/list" component={UserList} />
    
        <Protected exact path="/" component={Home} />

                    
                </Router>
                
            </>
        );
    }
}

export default Header;