import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './NavBar'
import EventDetail from './EventDetail'
import MemberItem from './MemberItem'
import EventItem from './EventItem'
import Footer from './Footer'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

const myTheme = createMuiTheme({
    palette: {
        primary: red,
        secondary: {
            main: '#edb625'
        }
    },
    typography: {
        fontSize: 12
    },
    spacing: {
        unit: 10
    }
})

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
            ],
            eventData: [
                {
                    eventDate: "27 November 2017",
                    eventTitle: "#39 JakartaJS April Meetup with Kumparan",
                    eventUser: 433,
                    eventLink: ""
                },
                {
                    eventDate: "27 October 2017",
                    eventTitle: "#38 JakartaJS April Meetup with Blibli",
                    eventUser: 245,
                    eventLink: ""
                },
                {
                    eventDate: "27 September 2017",
                    eventTitle: "#37 JakartaJS April Meetup with Hacktiv8",
                    eventUser: 114,
                    eventLink: ""
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
        axios.get('https://swapi.co/api/films/')
        .then(response => response.data.results)
        .then(movieData => {
            this.setState({ 
                movie: movieData
                    .slice(0,3)
                    .map(movie => ({
                    title: movie.title,
                    release: movie.release_date,
                    desc: movie.opening_crawl,
                    member: movie.episode_id
                }))
            })
        })
    }

    render() {
        return (
            <Fragment>
                <MuiThemeProvider theme={myTheme}>
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
                </MuiThemeProvider>
            </Fragment>
        );
    }
}

export default App