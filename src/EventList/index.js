import React from 'react';
import './index.css';
import PropTypes from 'prop-types'
import Link from '../Link'
import Button from '../Button'
import Separator from '../Separator'

class EventItem extends React.Component {
  render() {
    return (
        <section className="EventList">
            <div className="Event-panel">
                <div className="Event-container">
                    <div className="Event-desc">
                        <div className="Event-desc-title">27 November 2017</div>
                        <Separator />
                        <div className="Event-desc-content">#39 JakartaJS April Meetup with Kumparan</div>
                        <div className="Event-desc-people">139 <span className="Event-desc-people-span">Went</span></div>
                        <Link href="">
                            <Button>View</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="Event-panel">
                <div className="Event-container">
                    <div className="Event-desc">
                        <div className="Event-desc-title">27 October 2017</div>
                        <Separator />
                        <div className="Event-desc-content">#39 JakartaJS April Meetup with Blibli</div>
                        <div className="Event-desc-people">139 <span className="Event-desc-people-span">Went</span></div>
                        <Link href="">
                            <Button>View</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="Event-panel">
                <div className="Event-container">
                    <div className="Event-desc">
                        <div className="Event-desc-title">27 September 2017</div>
                        <Separator />
                        <div className="Event-desc-content">#39 JakartaJS April Meetup with Hacktiv8</div>
                        <div className="Event-desc-people">139 <span class="Event-desc-people-span">Went</span></div>
                        <Link href="">
                            <Button>View</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default EventItem