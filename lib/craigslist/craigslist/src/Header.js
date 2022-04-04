import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import Nav from './Nav';

function Header(props) {
    return (
        <div className="header">
            <h1 className="logo">Craiglist</h1>
            <Nav />
        </div>
    );
}

export default Header;