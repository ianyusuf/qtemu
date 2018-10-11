import React from 'react';
import './App.css';
import PropTypes from 'prop-types'
import AvatarMember from './AvatarMember'
import Button from './Button'
import Separator from './Separator'
import Navbar from './NavBar'
import EventDetail from './EventDetail'

class App extends React.Component {
  render() {
    return (
      <div class="App">
        <Navbar />
        <EventDetail />
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
        <div class="Members">
            <div class="Container">
                <div class="Members-group">
                    <div class="Members-title">
                        <h2>Members</h2>
                    </div>
                    <div class="Members-see-all">
                        <a href="#">
                            <h4>See all</h4>
                        </a>
                    </div>
                </div>
                <div class="Container">
                    <div class="Members-bg">
                        <div class="Members-container">
                            <div class="Members-image">
                                <AvatarMember />
                            </div>
                            <div class="Members-desc">
                                <h3>Hacktiv8 Meetup</h3>
                                <table>
                                    <tr>
                                        <td class="Members-left">Adhy Wiranata</td>
                                        <td class="Members-right">4 others</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Past">
            <div class="Container">
                <div class="Past-group">
                    <div class="Past-title">
                        <h2>Past Meetups</h2>
                    </div>
                    <div class="Past-see-all">
                        <a href="#">
                            <h4>See all</h4>
                        </a>
                    </div>
                </div>
                <div class="Past-panel">
                    <div class="Past-container">
                        <div class="Past-desc">
                            <div class="Past-desc-title">27 November 2017</div>
                            <div class="Line-separator" />
                            <div class="Past-desc-content">#39 JakartaJS April Meetup with Kumparan</div>
                            <div class="Past-desc-people">139 <span class="Past-desc-people-span">Went</span></div>
                            <a href="#">
                                <Button>View</Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="Past-panel">
                    <div class="Past-container">
                        <div class="Past-desc">
                            <div class="Past-desc-title">27 October 2017</div>
                            <div class="Line-separator" />
                            <div class="Past-desc-content">#39 JakartaJS April Meetup with Blibli</div>
                            <div class="Past-desc-people">139 <span class="Past-desc-people-span">Went</span></div>
                            <a href="#">
                                <Button>View</Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="Past-panel">
                    <div class="Past-container">
                        <div class="Past-desc">
                            <div class="Past-desc-title">27 September 2017</div>
                            <div class="Line-separator" />
                            <div class="Past-desc-content">#39 JakartaJS April Meetup with Hacktiv8</div>
                            <div class="Past-desc-people">139 <span class="Past-desc-people-span">Went</span></div>
                            <a href="#">
                                <Button>View</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Separator />
        <div class="Copyright">
            <div class="Container">
                <div class="Copyright-content">
                    <h4>Copyright Hacktiv8 2018</h4>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default App