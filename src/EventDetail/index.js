import React, { Component, Fragment } from 'react';
import './index.css';
import ImageUser from '../Components/ImageUser'
import Button from '../Components/Button'
  
class EventDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            joined: false
        }
    }

    handleClick = () => {
        this.setState(state => ({
            joined: !state.joined
        }))
    }
    
    componentWillUnmount() {
        console.log('Mati')
    }

    componentWillMount() {
        console.log('Sebelum Lahir')
    }

    componentDidMount() {
        console.log('Setelah Lahir')
    }

    render() {
        console.log('Lahir')
        const { eventTitle, eventLocation, eventMembers, eventOrganizers } = this.props

        return (
            <Fragment>
                <div className="Profile">
                    <div className="Container">
                        <div className="Profile-bg">
                            <div className="Profile-container">
                                <div className="Profile-image">
                                    <ImageUser className="Image-user" />
                                </div>
                                <div className="Profile-desc">
                                    <h2>{ eventTitle }</h2>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="Profile-desc-left">Location</td>
                                                <td className="Profile-desc-right">{ eventLocation }</td>
                                            </tr>
                                            <tr>
                                                <td className="Profile-desc-left">Members</td>
                                                <td className="Profile-desc-right">{ eventMembers }</td>
                                            </tr>
                                            <tr>
                                                <td className="Profile-desc-left">Organizers</td>
                                                <td className="Profile-desc-right">{ eventOrganizers }</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                        <Button
                                            
                                            onClick={ this.handleClick }
                                        >
                                            { this.state.joined ? "Joined" : "Join us" }
                                        </Button>
                                        
                                        { this.state.joined }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Next">
                    <div className="Container">
                        <div className="Meetup-title">
                            <h2>Next Meetup</h2>
                        </div>
                        <div className="Container">
                            <div className="Next-bg">
                                <div className="Next-container">
                                    <div className="Next-title">Awesome meetup and event</div>
                                    <div className="Next-date">25 January 2019</div>
                                    <div className="Next-content">
                                        <p>Hello, JavaScript & Node.js Ninjas!<br />
                                        Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018!<br />
                                        The meetup format will contain some short stories and technical talks.<br />
                                        If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.</p>
                                        <p>Remember to bring a photo ID to get through building security.</p>
                                        -----
                                        <p>See you there!</p>
                                        <p>Best, Hengki, Gioovani, Sofian, Riza, Agung The JakartaJS Organizers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="About">
                    <div className="Container">
                        <div className="Meetup-title">
                            <h2>About Meetup</h2>
                        </div>
                        <div className="Container">
                            <div className="About-bg">
                                <div className="About-container">
                                    <p className="About-line">Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.<br />
                                    Twitter: @JakartaJS and we use the hashtag #jakartajs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default EventDetail