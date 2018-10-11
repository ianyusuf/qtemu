import React from 'react';
import './index.css';

class Navbar extends React.Component {
  render() {
    return (
        <header className="Header">
            <div className="Container">
                <div className="Logo">QTemu</div>
                <nav className="Menu-right">
                    <ul>
                        <li><a href="#">Create Meetup</a></li>
                        <li><a href="#">Explore</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
  }
}

export default Navbar