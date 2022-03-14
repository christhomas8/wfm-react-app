import React from 'react';
import './App.css';

//////////////////////////////////////////////
import TopHeader from './modules/TopHeader';
import Schedule from './modules/Schedule';
import News from './modules/News';
import Notes from './modules/Notes';
import Phone from './modules/Phone';
import LoginPage from './modules/LoginPage';
////////////////////////////////////////////

//Main App layout
class App extends React.Component {
    state = {
        auth: "",
        fName: "",
        lName: ""
    }

    //communicate with LoginPage component since it receives server feedback
    handleCallback = (loginData,loginData2,loginData3) => {
        this.setState({auth: loginData});
        this.setState({fName: loginData2});
        this.setState({lName: loginData3});
    }

    render() {
        const {auth} = this.state;
        const validator = auth;
        
        return (
            <div>
                <div>
                    {!validator ?  <LoginPage loginCallback={this.handleCallback}/> : 
                        <div><TopHeader firstName={this.state.fName} lastName={this.state.lName} /> 
                            <div id='row1'>
                            <div className='column'><Schedule /></div>
                            <div className='column'><Phone /></div>
                        </div>
                        <div id='row2'>
                            <div className='column'><News firstName={this.state.fName}/></div>
                            <div className='column'><Notes /></div>
                        </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default App;