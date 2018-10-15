import React, { Component } from 'react';
import './index.css';
import Link from '../Components/Link'

class Navbar extends Component {
    render() {
        return (
            <header className="Header">
                <div className="Container">
                    <div className="Logo">QTemu</div>
                    <nav className="Menu-right">
                        <ul>
                            <li>
                                <Link href="">Create Meetup</Link>
                            </li>
                            <li>
                                <Link href="">Explore</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <ul>
                            <li>
                                <Link href="">Login</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Navbar