import React from 'react';
import './index.css';
import AvatarUser from '../AvatarUser'
import Button from '../Button'

class EventDetail extends React.Component {
  render() {
    return (
        <section className="Profile">
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
                            <a href="#">
                                <Button>Join Us</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default EventDetail