import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className='container'>
            <a className="navbar-brand" href="/">KissanApp</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Contact List</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/messages">Message List</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;
