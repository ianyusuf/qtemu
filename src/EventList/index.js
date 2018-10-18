import React, { Component } from 'react';
import './index.css';
import Button from '../Components/Button'
import Separator from '../Components/Separator'

class EventList extends Component {
    render() {
        // const { eventDate, eventTitle, eventUser, eventLink } = this.props
        const { movieTitle, movieDate, movieDesc, movieMember } = this.props
        
        return (
            <section className="Event-panel">
                <div className="Event-container">
                    <div className="Event-desc">
                        <div className="Event-desc-title">{ movieTitle }
                            <span className="Event-desc-date">{ movieDate }</span>
                        </div>
                        <Separator />
                        <div className="Event-desc-content">{ movieDesc }</div>
                        <div className="Event-desc-people">{ movieMember } <span className="Event-desc-people-span">Went</span></div>
                        <Button>View</Button>
                    </div>
                </div>
            </section>
        );
    }
}

export default EventList