import { Navbar, Nav } from 'react-bootstrap'
import {
    Link
} from 'react-router-dom'

const NavBarMenu = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Customer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to='/'>Home</Link>&nbsp;&nbsp;
                        <Link to='/list'>List </Link>&nbsp;&nbsp;
                        <Link to='/create'>Create </Link>&nbsp;&nbsp;
                        <Link to='/search'>Search </Link>&nbsp;&nbsp;
                        <Link to='/update'>Update </Link>&nbsp;&nbsp;
                        {
                            localStorage.getItem('login') ?
                                <Link to='/logout'>Logout </Link>
                                :
                                <Link to='/login'>Login </Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBarMenu;