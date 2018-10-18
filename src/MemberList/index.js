import React, { Component, Fragment } from 'react';
import './index.css';
// import ImageMember from '../Components/ImageMember'
  
class MemberList extends Component {
    render() {
        // const { memberImage, memberTitle, memberUser, memberGroup } = this.props
        const { peopleTitle, peopleBirth, peopleEye } = this.props

        return (
            <Fragment>
                <div className="Members-list">
                    <div className="Members-container">
                        <div className="Members-image-container">
                            {/* <ImageMember memberImg={ memberImage } className="Members-image"/> */}
                            <img src="img/member.png" className="Members-image"/>
                        </div>
                        <div className="Members-desc">
                            {/* <h3>{ memberTitle }</h3> */}
                            <h3>{ peopleTitle }</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        {/* <td className="Members-left">{ memberUser }</td>
                                        <td className="Members-right">{ memberGroup }</td> */}
                                        <td className="Members-left">{ peopleBirth }</td>
                                        <td className="Members-right">{ peopleEye }</td>
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