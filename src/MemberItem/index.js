import React, { Component, Fragment } from 'react';
import './index.css';
import Link from '../Components/Link'
import MemberList from '../MemberList'

class MemberItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            memberData: [
                {
                memberAvatar: "img/member.png",
                memberTitle: "Blibli Meetup",
                memberUser: "Hadyan Yusuf",
                memberGroup: 8
                },
                {
                memberAvatar: "img/member.png",
                memberTitle: "Hacktiv8 Meetup",
                memberUser: "Adhy Wiranata",
                memberGroup: 4
                }
            ]
        }
    }

    render() {
        const { memberData } = this.state

        return (
            <Fragment>
                <div className="Container">
                    <div className="Members-group">
                        <div className="Members-title">
                            <h2>Members</h2>
                        </div>
                        <div className="Members-see-all">
                            <Link href="">
                                <h4>See all</h4>
                            </Link>
                        </div>
                    </div>
                    <div className="Container">
                        {
                            memberData
                                .map((data, index) => (
                                <MemberList key={index}
                                memberTitle={data.memberTitle}
                                memberUser={data.memberUser}
                                memberGroup={data.memberGroup} 
                                />
                            ))
                        }
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default MemberItem
