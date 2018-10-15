import React from 'react';
import './App.css';
import Navbar from './NavBar'
import EventDetail from './EventDetail'
import MemberItem from './MemberItem'
import EventItem from './EventItem'
import Footer from './Footer'

class App extends React.Component {
  render() {
    return (
        <section className="App">
            <Navbar />
            <EventDetail />
            <MemberItem />
            <EventItem />
            <Footer />
        </section>
    );
  }
}

export default App