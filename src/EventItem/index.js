import React, { Component, Fragment } from 'react';
import './index.css';
import Link from '../Components/Link'
import Separator from '../Components/Separator'
import EventList from '../EventList'

class EventItem extends Component {
    render() {
        // const { eventData } = this.state
        const { movieData } = this.props

        return (
            <Fragment>
                <section className="EventItem">
                    <div className="Container">
                        <div className="Event-group">
                            <div className="Event-title">
                                <h2>Past Meetups</h2>
                            </div>
                            <div className="Event-see-all">
                                <Link href="">
                                    <h4>See all</h4>
                                </Link>
                            </div>
                        </div>
                        <div className="Event-list">
                            {
                                movieData.length <= 0 ?
                                "Loading..."
                                :
                                movieData
                                    .map((data, index) => (
                                    <EventList key={index}
                                    movieTitle={data.title}
                                    movieDate={data.release}
                                    movieDesc={data.desc} 
                                    movieMember={data.member}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="Container">
                        <Separator />
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default EventItem