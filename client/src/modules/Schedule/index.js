import React from "react";

import './index.css';


/*generate a schedule*/
function createEvent() {
    var event = ["Meeting","On-Call","Open"];
    var item = event[Math.floor(Math.random()*event.length)];
    return (item);
}

/*Get date */
function TodayDate() {
    let today = new Date();
    let todayDate = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
    return todayDate;
}

/*Get Time */
function Time() {
    let today = new Date();
    let time = today.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
    return time;
}

class Schedule extends React.Component {
    render() {
        return (
            <div className='schedule'>
                <div className='sub-header'>
                    <h3>Today's Schedule [{<TodayDate />}]</h3>
                </div>
                
                <div className='scroller'>
                <h4 id="clock">Loaded at: {<Time />}</h4>
                <div>
                    <div className='timeEvents'><p>6:00 AM</p> </div>
                    <div className='events'> {createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>7:00 AM</p> </div>
                    <div className='events'> {createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>8:00 AM</p> </div>
                    <div className='events'> {createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>9:00 AM</p> </div>
                    <div className='events'> {createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>10:00 AM</p> </div>
                    <div className='events'> {createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>11:00 AM</p> </div>
                    <div className='events'> {createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>12:00 PM</p> </div>
                    <div className='events'> {createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>1:00 PM</p> </div>
                    <div className='events'> {createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>2:00 PM </p></div>
                    <div className='events'> {createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>3:00 PM </p></div>
                    <div className='events'> {createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>4:00 PM</p> </div>
                    <div className='events'> {createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>5:00 PM</p> </div>
                    <div className='events'> {createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>6:00 PM</p> </div>
                    <div className='events'> {createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>7:00 PM</p> </div>
                    <div className='events'> {createEvent()}</div>
                </div>
                </div>
            </div>
        );
    }
}



export default Schedule;