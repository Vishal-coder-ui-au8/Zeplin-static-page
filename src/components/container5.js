import React, { Component } from 'react';
import '../styles/container5.css';
import float from "../images/containerl.png";
import loader from "../images/oval-container5.png";
import emailcon from "../images/email-84.png";
import tweet from "../images/twitter.png";
import poster from "../images/fb.png";
import sis from "../images/google-2-x.png";
class Bottom extends Component {
  render() {
    return (
         <bottom>
             <div className="container5"></div>
             <div className="img5">
               <img src={float}/>
             </div>
             <div className="Oval-Container5">
               <img src={loader} style={{width:"18%"}}/>
             </div>
             <div className="Get-started-now">
               Get started now
             </div>
             <div className="Create-custom-landin-container5">
             Create custom landing pages with Omega that converts<br/> more visitors than any website. With lots of unique blocks,<br/> you can easily build a page without coding.
             </div>
             <div className="Rectangle-container5"></div>
             <div className="email-container5">
               <img src={emailcon}/>
             </div>
             <div className="Email-address-container5">
               Email address
             </div>
             <div className="get-started-container5"></div>
             <div className="Get-Started-write">Get Started</div>
             <div className="footer"></div>
             <div className="Omega-li">Omega</div>
             <div className="With-lots-of-unique-pi">
             With lots of unique blocks,<br/> you can easily build a page<br/> without coding.
             </div>
             <div className="Oval-fk"></div>
             <div className="twitter2x">
                <img src={tweet}/>
             </div>
             <div className="Oval-twi"></div>
             <div className="fb2x">
                <img src={poster}/>
             </div>
             <div className="Oval-sis"></div>
             <div className="sis2x">
                <img src={sis}/>
             </div>
             <div className="About-hr">About</div>
             <div className="Our-mission-Our-stor">
             Our mission<br/>
             Our story<br/>
             Team Members
             </div>
             <div className="Learn-ra">Learn</div>
             <div className="Tutorials-How-it-wor">
             Tutorials<br/>
             How  it works<br/>
             F.A.Q
             </div>
             <div className="Stories-tell">Stories</div>
             <div className="Blog-Tech-stories">
             Blog<br/>
             Tech stories
             </div>
             <div className="Contact-us">Contact us</div>
             <div className="supportuxthemenet">
             support@uxtheme.net<br/>
             +133-394-3439-1435
             </div>
         </bottom>
      
    );
  } 
}

export default Bottom;