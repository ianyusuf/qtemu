import React from 'react';
import './App.css';
import PropTypes from 'prop-types'
import Navbar from './NavBar'
import EventDetail from './EventDetail'
import MemberItem from './MemberItem'
import EventItem from './EventItem'
import Footer from './Footer'

class App extends React.Component {
  render() {
    return (
        <section class="App">
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