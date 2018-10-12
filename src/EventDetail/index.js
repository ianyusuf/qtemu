import React from 'react';
import './index.css';
import AvatarUser from '../AvatarUser'
import Button from '../Button'
import Link from '../Link'

class EventDetail extends React.Component {
  render() {
    return (
        <section className="Event-detail">
            <div class="Profile">
                <div className="Container">
                    <div className="Profile-bg">
                        <div className="Profile-container">
                            <div className="Profile-image">
                                <AvatarUser />
                            </div>
                            <div className="Profile-desc">
                                <h2>Hacktiv8 Meetup</h2>
                                <table>
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
                                </table>
                                <Link href="">
                                    <Button>Join Us</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Next">
                <div class="Container">
                    <div class="Meetup-title">
                        <h2>Next Meetup</h2>
                    </div>
                    <div class="Container">
                        <div class="Next-bg">
                            <div class="Next-container">
                                <div class="Next-title">Awesome meetup and event</div>
                                <div class="Next-date">25 January 2019</div>
                                <div class="Next-content">
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
            <div class="About">
                <div class="Container">
                    <div class="Meetup-title">
                        <h2>About Meetup</h2>
                    </div>
                    <div class="Container">
                        <div class="About-bg">
                            <div class="About-container">
                                <p class="About-line">Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.<br />
                                Twitter: @JakartaJS and we use the hashtag #jakartajs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default EventDetail