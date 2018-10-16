import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './NavBar'
import EventDetail from './EventDetail'
import MemberItem from './MemberItem'
import EventItem from './EventItem'
import Footer from './Footer'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movie: [],
            people: [],            
            memberData: [
                {
                    memberImage: "img/member.png",
                    memberTitle: "Blibli Meetup",
                    memberUser: "Hadyan Yusuf",
                    memberGroup: 8
                },
                {
                    memberImage: "img/member.png",
                    memberTitle: "Hacktiv8 Meetup",
                    memberUser: "Adhy Wiranata",
                    memberGroup: 4
                }
            ]
        }
    }

    componentDidMount() {
        // fetch data members
        console.log('start fetching')
        axios.get('https://swapi.co/api/people/')
        .then(response => response.data.results)
        .then(peopleData => {
            this.setState({ 
                people: peopleData
                    .slice(0,3)
                    .map(people => ({
                    title: people.name,
                    birth: people.birth_year,
                    eye: people.eye_color
                }))
            })
        })
        axios.get('https://swapi.co/api/movies/')
        .then(response => response.data.results)
        .then(movieData => {
            this.setState({ 
                movie: movieData
                    .slice(0,3)
                    .map(movie => ({
                    date: movie.release_date,
                    title: movie.title,
                    desc: movie.opening_crawl,
                    member: movie.episode_id
                }))
            })
        })
    }

    render() {
        const { members } = this.state

        return (
            <Fragment className="App">
                <Navbar />
                <EventDetail
                    eventTitle="Hacktiv8 Meetup"
                    eventLocation="Jakarta, Indonesia"
                    eventMembers={ 1.078 }
                    eventOrganizers="Adhy Wiranata"
                />
                <MemberItem peopleData={ this.state.people } />
                <EventItem movieData={ this.state.movie }  />
                <Footer />
            </Fragment>
        );
    }
}

export default App