import React from 'react';
import './index.css';

function clearInput(){
    document.getElementById("note").value = "";
};

//Section 4
class Notes extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value: "",
            record: [],
        };
        this.notePad = React.createRef();
    }

    onUpdateNote = () => {
        this.setState(state => {
            const record = state.record.concat(this.notePad.current.value, " " );
            const spacer = state.record.concat(" ");
            return {
                record,
                spacer,
                value: this.notePad.current.value,
            }
        });
        
    };

    render() {
        
        return (
            <div className='notes'>
                <div className='sub-header'>
                    <h3>Notes</h3>
                </div>
            
                <div className='note-input'>
                    <input type="text" size="50" placeholder="write a note" id="note" defaultValue="" ref={this.notePad}></input>
                    <button onClick={() => {this.onUpdateNote();}}>Submit</button><button onClick={() => {clearInput();}}>Reset</button>
                </div>
                <div>
                    <h4 id="noteHeader">Note History</h4>
                
                    <ul id="theNote">
                        {this.state.record.map((record, id) => (
                            <li key={record.id}>{record}</li>
                        ))}
                    </ul>
                </div>
            </div>

        );
    }
}

export default Notes;