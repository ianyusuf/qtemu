import React from 'react';
import './index.css';
import AvatarMember from '../AvatarMember'
  
class MemberList extends React.Component {
    render() {
        return (
            <section className="Members-list">
                <div className="Members-container">
                    <div className="Members-image">
                        <AvatarMember />
                    </div>
                    <div className="Members-desc">
                        <h3>Hacktiv8 Meetup</h3>
                        <table>
                            <tr>
                                <td className="Members-left">Adhy Wiranata</td>
                                <td className="Members-right">4 others</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
        );
    }
}

export default MemberList