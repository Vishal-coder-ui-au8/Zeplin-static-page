import React, { Component } from 'react';
import BG from "../images/bg.png";
import email from "../images/email-84.png";
import Oval from "../images/oval.png";
import Path from "../images/path.png";
import '../styles/container1.css';
class Header extends Component {
  render() {
    return (
     
      <header>
         <div className="bg-container1" >
                 <img src={BG} style={{ width: "101.09%", height: "789px", marginTop: "-8px", marginLeft:"-8px", marginRight:"0px"}}/> 
         </div>
         <div className="Omega">Omega</div>
         <div className="Demos">
               Demos 
         </div>
         <div className="Pages-Support">
              Pages Support
         </div>
         <div className="Bring-more-leads-for">
            Bring more leads for<br/> your business fast.   
         </div>
         <div className="Create-custom-landin">
         Create custom landing pages with Omega that convert more <br/>visitors than any website. With lots of unique blocks, you can<br/> easily build a page without coding.
         </div>
         <div className="Rectangle"></div>
         <div className="email-84">
            <img src={email}/>
         </div>
         <div className="Email-address">Email address</div>
         <div className="BG"></div>
         <div className="Get-Started">Get Started</div>
         <div className="Oval">
            <img src={Oval} style={{width: "179%"}}/>
         </div>
         <div className="Oval-Copy"></div>
         <div className="Up-Arrow"></div>
         <div className= "Path">
            <img src={Path}/>  
         </div>
         <div className="number">39%</div>
         <div className="Conversion">Conversion</div>
      </header>
      
    );
  } 
}

export default Header;