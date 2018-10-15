import React, { Component, Fragment } from 'react';
import './index.css';
import ImageMember from '../Components/ImageMember'
  
class MemberList extends Component {
    render() {
        const { memberImage, memberTitle, memberUser, memberGroup } = this.props

        return (
            <Fragment>
                <div className="Members-list">
                    <div className="Members-container">
                        <div className="Members-image-container">
                            <ImageMember memberImage={ memberImage } />
                        </div>
                        <div className="Members-desc">
                            <h3>{ memberTitle }</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="Members-left">{ memberUser }</td>
                                        <td className="Members-right">{ memberGroup } others</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default MemberList