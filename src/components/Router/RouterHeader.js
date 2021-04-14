//Router Integration
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//import Home from '../Home'
import UserList from '../pages/UserList'
import UserSearch from '../pages/UserSearch'
import UserUpdate from '../pages/UserUpdate'
import UserCreate from '../pages/UsertCreate'
import Login from '../Auth/Login'
import Logout from '../Auth/Logout';
import Protected from '../Router/ProtectedRoute'
import Home from '../pages/Home';


class RouterHeader extends Component {
    render() {
        return (
            <>
                <Router>


                    <Route path="/logout">
                        <Logout />
                    </Route>

                    {/*  */}
                    <Route path="/login"
                        render={props => (
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

export default RouterHeader;