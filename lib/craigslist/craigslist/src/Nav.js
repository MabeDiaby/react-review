import React from 'react';

function Nav(props) {
    return (
        <div>
            <nav className="nav">
                <ul>
                    <li>Craiglist</li>
                    <li>help</li>
                    <li>safety</li>
                    <li>privacy</li>
                    <li>feedback</li>
                    <li>term</li>
                    <button className="post">post</button>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;