import React from 'react';
import './index.css';

//Top of the App
class TopHeader extends React.Component {
    render() {  
        return(
        <div className='header'>
            <ul className='headlist'>
                <li><h1>Workforce Management</h1></li>
                <li id="list-special"><button id="signout" onClick={() => {console.log("Signing out");window.location.reload();} }>Sign Out</button></li>
                <li id="list-special">|</li>
                <li id="list-special"><button onClick={() => {document.body.style.backgroundColor = "#fff";document.getElementById("row1").style = 'background-color: #fff';document.getElementById("row2").style = 'background-color: #fff';}} >Light Theme</button></li>
                <li id="list-special"><button onClick={() => {document.body.style.backgroundColor = "black";document.getElementById("row1").style = 'background-color: black';document.getElementById("row2").style = 'background-color: black';} }>Dark Theme</button></li>
                <li id="list-special">|</li>
                <li id="list-special"><h3>Signed in as: {this.props.firstName}  {this.props.lastName}</h3></li>
            </ul>            
        </div>
        );
    }
}

export default TopHeader;