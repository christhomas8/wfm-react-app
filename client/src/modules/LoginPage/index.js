import React from 'react';

import './index.css';

//Default page unless correct data submitted
class LoginPage extends React.Component {

    constructor() {
        super();
        this.state = {
            data: "", 
            auth: "", //used to toggle displays depending on state
            firstName: "",
            lastName: "",
            password:""
        };
        this.FN = React.createRef();//first name input reference
        this.LN = React.createRef();//last name input reference
        this.PW = React.createRef();//password input reference
    }


    /////////////////////////////////////////////////////////////////////
    //Check for server connection (Get Request)
    serverCheck() {
        this.callAPI()
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
    }

    callAPI = async () => {
        const response = await fetch('/check');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    //communicates with App component for display update
    onTrigger(auth,fName,lName) {
        return (this.props.loginCallback(auth,fName,lName));
    };

    //send post data to API for validation (POST Request)
    handleClick() {

        fetch('/api', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json; charset=UTF-8" },
            body: JSON.stringify({
                message: this.PW.current.value, 
                fName: this.FN.current.value, 
                lName: this.LN.current.value})
        })
        .then(res => res.json())
        .then((res) => {
            console.log(res.authenticated); 
            this.setState({auth: res.authenticated});
            if (this.state.auth ){
                this.setState({firstName: this.FN.current.value});
                this.setState({lastName: this.LN.current.value})
            }
            else{
                alert("Password Incorrect or Field Empty")
            }

            const auth = res.authenticated;
            const fName = this.state.firstName;
            const lName = this.state.lastName;            
            this.onTrigger(auth,fName,lName);
            
            return 0;
        })
    };
    /////////////////////////////////////////////////////////////////

    render() {
    document.body.style.backgroundColor = "#fff";
        return (
            <div>
                <div className="login-box">
                    <h1>Account Login</h1>
                    <div className="login-input">            
                        <label>
                            First Name: <input type="text" ref={this.FN} required/>
                        </label>
                        <br /><br />
                        <label>
                            Last Name: <input type="text" ref={this.LN} required/>
                        </label>
                        <br /><br />
                        <label>
                            Password: <input type="password" maxLength="8" ref={this.PW} required/>
                            <p><i>Hint: The password is password</i></p>
                        </label>
                        <br /><br />
                        <input type="submit" value="Submit" onClick={() => {this.handleClick();}} required/>
                        <button onClick = {() => {this.serverCheck();}}> 
                            Check Server
                        </button>
                        <p>{this.state.data} </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;