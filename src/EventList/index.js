import React, { Component } from 'react';
import './index.css';
import Link from '../Components/Link'
import Button from '../Components/Button'
import Separator from '../Components/Separator'

class EventList extends Component {
    render() {
        const { eventDate, eventTitle, eventUser, eventLink } = this.props
        
        return (
            <section className="Event-panel">
                <div className="Event-container">
                    <div className="Event-desc">
                        <div className="Event-desc-title">{ eventDate }</div>
                        <Separator />
                        <div className="Event-desc-content">{ eventTitle }</div>
                        <div className="Event-desc-people">{ eventUser } <span className="Event-desc-people-span">Went</span></div>
                        <Link href={ eventLink }>
                            <Button>View</Button>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default EventList