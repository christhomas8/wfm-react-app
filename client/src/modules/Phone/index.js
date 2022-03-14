import React from "react";

import './index.css';

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
            
        );
    }
}


export default Phone;