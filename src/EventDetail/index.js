import React, { Component, Fragment } from 'react';
import './index.css';
import ImageUser from '../Components/ImageUser'
import Button from '../Components/Button'
import Link from '../Components/Link'
  
class EventDetail extends Component {
    render() {
        return (
            <Fragment>
                <div className="Profile">
                    <div className="Container">
                        <div className="Profile-bg">
                            <div className="Profile-container">
                                <div className="Profile-image">
                                    <ImageUser />
                                </div>
                                <div className="Profile-desc">
                                    <h2>Hacktiv8 Meetup</h2>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="Profile-desc-left">Location</td>
                                                <td className="Profile-desc-right">Jakarta, Indonesia</td>
                                            </tr>
                                            <tr>
                                                <td className="Profile-desc-left">Members</td>
                                                <td className="Profile-desc-right">1,078</td>
                                            </tr>
                                            <tr>
                                                <td className="Profile-desc-left">Organizers</td>
                                                <td className="Profile-desc-right">Adhy Wiranata</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <Link href="">
                                        <Button>Join Us</Button>
                                    </Link>
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