import React from 'react';
import './index.css';
import Link from '../Link'
import MemberList from '../MemberList'
  
class MemberItem extends React.Component {
    render() {
        return (
            <section className="Members">
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
                        <MemberList />
                    </div>
                </div>
            </section>
        );
    }
}

export default MemberItem