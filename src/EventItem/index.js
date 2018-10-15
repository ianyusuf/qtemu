import React, { Component, Fragment } from 'react';
import './index.css';
import Link from '../Components/Link'
import Separator from '../Components/Separator'
import EventList from '../EventList'

class EventItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            eventData: [
                {
                    eventDate: "27 November 2017",
                    eventTitle: "#39 JakartaJS April Meetup with Kumparan",
                    eventUser: 433,
                    eventLink: ""
                },
                {
                    eventDate: "27 October 2017",
                    eventTitle: "#38 JakartaJS April Meetup with Blibli",
                    eventUser: 245,
                    eventLink: ""
                },
                {
                    eventDate: "27 September 2017",
                    eventTitle: "#37 JakartaJS April Meetup with Hacktiv8",
                    eventUser: 114,
                    eventLink: ""
                }
            ]
        }
    }

    render() {
        const { eventData } = this.state

        return (
            <Fragment className="EventItem">
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
                            eventData
                                .map((data, index) => (
                                <EventList key={index}
                                eventDate={data.eventDate}
                                eventTitle={data.eventTitle}
                                eventUser={data.eventUser} 
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="Container">
                    <Separator />
                </div>
            </Fragment>
        );
    }
}

export default EventItem