import React from 'react';
import './App.css';
import PropTypes from 'prop-types'
import AvatarMember from './AvatarMember'
import Button from './Button'
import Link from './Link'
import Separator from './Separator'
import Navbar from './NavBar'
import EventDetail from './EventDetail'

class App extends React.Component {
  render() {
    return (
      <div class="App">
        <Navbar />
        <EventDetail />
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