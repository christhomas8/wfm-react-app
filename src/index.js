import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//handles data to login and access App contents
function Login() {
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let password = document.getElementById("password").value;

    if (password === "password" && firstName !== "" && lastName !== "") {
        document.getElementById("error").innerHTML = "";
        ReactDOM.render(<AppLayout firstName={firstName} lastName={lastName}/>, document.getElementById('root'));
    }
    else {
        document.getElementById("error").innerHTML = "<br>Wrong Password or Fields Empty";
    }
    return ;
}

//Default page unless correct data submitted
class LoginPage extends React.Component { 
    render() {
        document.body.style.backgroundColor = "#fff";
        return (
            <div className="login-box">
            <h1>Account Login</h1>
            <div className="login-input">
                <h4>First Name</h4>
                <input type="text" maxLength="50" size="50" id="fName"required/>
                <h4>Last Name</h4>
                <input type="text" maxLength="50" size="50" id="lName" required/>
                <h4>Password</h4>
                <input type="password" maxLength="8" size="50" id="password" required />
                <p><i>Hint: The Password is password</i></p>
                <div className="login-button">
                    <button onClick={() => {Login()} }>Login</button>
                    <p id="error"></p>
                </div>
            </div>
        </div>
        )
    }
}

//Main App layout
class AppLayout extends React.Component {
    render() {
        let firstName = this.props.firstName;
        let lastName = this.props.lastName;
        return (
            (<div className='app'>
                <Header firstName={firstName} lastName={lastName}/>
                <div id='row1'>
                    <div className='column'><Schedule /></div>
                    <div className='column'><Phone /></div>
                </div>
                <div id='row2'>
                    <div className='column'><News firstName={firstName} lastName={lastName}/></div>
                    <div className='column'><Notes /></div>
                </div>

            </div>)
        )
    }
}

//Top of the App
class Header extends React.Component {
    render() {
        return(
            <div className='header'>
                <ul className='headlist'>
                    <li><h1>Work Force Management</h1></li>
                    <li id="list-special"><button id="signout" onClick={() => {ReactDOM.render(<LoginPage />, document.getElementById('root'));} }>Sign Out</button></li>
                    <li id="list-special">|</li>
                    <li id="list-special"><button onClick={() => {document.body.style.backgroundColor = "#fff";document.getElementById("row1").style = 'background-color: #fff';document.getElementById("row2").style = 'background-color: #fff';}} >Light Theme</button></li>
                    <li id="list-special"><button onClick={() => {document.body.style.backgroundColor = "black";document.getElementById("row1").style = 'background-color: black';document.getElementById("row2").style = 'background-color: black';} }>Dark Theme</button></li>
                    <li id="list-special">|</li>
                    <li id="list-special"><h3>Signed in as: {this.props.firstName} {this.props.lastName}</h3></li>
                </ul>            
            </div>
        )
    }
}

//Section 1
class Schedule extends React.Component {
    /*generate a schedule*/
    createEvent() {
        var event = ["Meeting","On-Call","Open"];
        var item = event[Math.floor(Math.random()*event.length)];
        return (item);
    }

    render() {
        /*get today's date and time*/
        let today = new Date();
        let todayDate = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
        let time = today.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});

        return (
            <div className='schedule'>
                <div className='sub-header'>
                    <h3>Today's Schedule [{todayDate}]</h3>
                </div>
                
                <div className='scroller'>
                <h4 id="clock">Loaded at: {time}</h4>
                <div>
                    <div className='timeEvents'><p>6:00 AM</p> </div>
                    <div className='events'> {this.createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>7:00 AM</p> </div>
                    <div className='events'> {this.createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>8:00 AM</p> </div>
                    <div className='events'> {this.createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>9:00 AM</p> </div>
                    <div className='events'> {this.createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>10:00 AM</p> </div>
                    <div className='events'> {this.createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>11:00 AM</p> </div>
                    <div className='events'> {this.createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>12:00 PM</p> </div>
                    <div className='events'> {this.createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>1:00 PM</p> </div>
                    <div className='events'> {this.createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>2:00 PM </p></div>
                    <div className='events'> {this.createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>3:00 PM </p></div>
                    <div className='events'> {this.createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>4:00 PM</p> </div>
                    <div className='events'> {this.createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>5:00 PM</p> </div>
                    <div className='events'> {this.createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>6:00 PM</p> </div>
                    <div className='events'> {this.createEvent()}</div>
                </div>
                <div>
                    <div className='timeEvents'><p>7:00 PM</p> </div>
                    <div className='events'> {this.createEvent()}</div>
                </div>
                </div>
            </div>
        )
    }
}

//Handles buttons pressed on dial pad
function Dial(num) {
    let currentScreen = document.getElementById("call").innerHTML;

    if ((num === "1" || num === "2" || num === "3" || num === "4" || num === "5" || 
    num === "6" || num === "7" || num === "8" || num === "9" || num === "0" || 
    num === "*" || num === "#" ) && 
    (document.getElementById("call").innerHTML !== "Calling" && document.getElementById("call").innerHTML !== "Call Ended") ) {
        document.getElementById("call").innerText = currentScreen + num;
    }
    else {
        document.getElementById("call").innerHTML = "";
    }

    if (num === "CALL" ) {
        document.getElementById("call").innerHTML = "";
        document.getElementById("call").innerHTML = "Calling";
    }
    if (num === "DEL") {
        document.getElementById("call").innerHTML = "";
    }
    if (num === "END") {
        document.getElementById("call").innerHTML = "Call Ended";
        document.getElementById("call").innerHTML = "";
    }
}

//Section 2
class Phone extends React.Component {
    render() {
        return (
            <div className='phone'>
                <div className='sub-header'>
                    <h3>Telephone</h3>
                </div>
                    <div className='phone-screen'>
                        <p id="call"></p>
                    </div>
                    <div className='phone-pad'>
                        <div className='phone-row'>
                            <button className='number' onClick={() => {Dial("1")} }>1</button>
                            <button className='number' onClick={() => {Dial("2")} }>2</button>
                            <button className='number' onClick={() => {Dial("3")} }>3</button>
                        </div>
                        <div className='phone-row'>
                            <button className='number' onClick={() => {Dial("4")} }>4</button>
                            <button className='number' onClick={() => {Dial("5")} }>5</button>
                            <button className='number' onClick={() => {Dial("6")} }>6</button>
                        </div>
                        <div className='phone-row'>
                            <button className='number' onClick={() => {Dial("7")} }>7</button>
                            <button className='number' onClick={() => {Dial("8")} }>8</button>
                            <button className='number' onClick={() => {Dial("9")} }>9</button>
                        </div>
                        <div className='phone-row'>
                            <button className='number' onClick={() => {Dial("*")} }>*</button>
                            <button className='number' onClick={() => {Dial("0")} }>0</button>
                            <button className='number' onClick={() => {Dial("#")} }>#</button>
                        </div>
                        <div className='phone-row'>
                            <button className='number' onClick={() => {Dial("END")} }>END</button>
                            <button className='number' onClick={() => {Dial("CALL")} }>CALL</button>
                            <button className='number' onClick={() => {Dial("DEL")} }>DEL</button>
                        </div>

                    </div>

            </div>
            
        )
    }
}

//Section 3
class News extends React.Component {
    render() {
        let img1 = "images/stocks.jpg";
        const imageStyle = {
            margin: "5px auto",
            height: "200px"
        };

        return (
            <div className='news'>
                <div className='sub-header'>
                    <h3>News</h3>
                </div>

                <div style={{width:"100%",}}> 
                    <div>
                        <h2 style={{marginLeft: "20px",}}>News for {this.props.firstName}:</h2>
                        <h4 style={{textAlign: "center", borderBottom: "solid black 2px", width: "90%", margin: "2px auto"}}>Stock prices for Company XYZ on the Rise!</h4>
                    </div>
                    <div style = {imageStyle}>
                        <img src={img1} alt={"Stock Market"} width={"30%"} style = {{display: "inline-block",marginLeft: "10px",}}/>
                        <p style={{width: "60%", marginLeft: "10px",display: "inline-block",backgroundColor: "lightgray",padding: "3px"}}>
                        At the heart of Stockopedia are over 2300 Stock Reports covering every company listed on the Stock Exchange Main Market, AIM and PLUS markets. 
                        These pages have been designed from the ground up to give the modern investor the essential information he needs to make his decisions.
                        Among the key stock market indexes is Company XYZ. It is one of the most widely-recognized stock market indices.
                            <br /><br /><a href="https://finance.yahoo.com/" target="_blank" rel="noopener noreferrer" style={{marginLeft: "20px",}}>Click here to find out more...</a>
                            </p>
                    </div>
                                        
                </div> 
            </div>
        )
    }
}

//Handles notes data and keeps track of history
function SubmitNote() { 
    let note = document.getElementById("note").value;
    let history = document.getElementById("theNote").innerText;
    let format = history + "<br><br>";
    document.getElementById("theNote").innerHTML = format + note;
    document.getElementById("note").value = "";
    return ;
}

//Section 4
class Notes extends React.Component {
    render() {
        return (
            <div className='notes'>
                <div className='sub-header'>
                    <h3>Notes</h3>
                </div>
            
                <div className='note-input'>
                    <input type="text" size="50" placeholder="write a note" id="note"></input>
                    <button onClick={() => {SubmitNote()} }>Submit</button>
                </div>
                <div>
                    <h4 id="noteHeader">Note History</h4>
                    <p id="theNote"></p>
                </div>
            </div>

        )
    }
}

ReactDOM.render(<LoginPage />, document.getElementById('root'));
