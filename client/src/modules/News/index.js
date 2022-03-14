import React from 'react';
import './index.css';

//Section 3
class News extends React.Component {

    render(){
    //get and display image
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
                    <h2 style={{marginLeft: "20px",}}>News for : {this.props.firstName}</h2>
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
    );
    }
}

export default News;