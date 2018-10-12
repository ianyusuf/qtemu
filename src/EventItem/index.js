import React from 'react';
import './index.css';
import PropTypes from 'prop-types'
import Link from '../Link'
import Button from '../Button'
import Separator from '../Separator'
import EventList from '../EventList'

class EventItem extends React.Component {
  render() {
    return (
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
                    <EventList />
                </div>
            </div>
            <div className="Container">
                <Separator />
            </div>
        </section>
    );
  }
}

export default EventItem