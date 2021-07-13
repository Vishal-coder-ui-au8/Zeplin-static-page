import React, { Component } from 'react';
import '../styles/container2.css';
import untitled from '../images/bg-untitled.png';
import cont from "../images/oval32.png";
import layout from "../images/layout-11-red.png";
import red from "../images/sidebar.png";
import wardrobe from "../images/message.png";
class Top extends Component {
  render() {
    return (
      
      <top>
           <div className="BG2"></div>
           <div className="BG3"></div>
           <div className="BG4"></div>
           <div className="BG5"></div>
           <div className="Oval-cont1"></div>
           <div className="Oval-cont2"></div>
           <div className="Oval-cont3"></div>
           <div className="layout-11-red">
              <img src={layout}/>
           </div>
           <div className="sidebar-cont2">
              <img src={red} style={{width:"150%"}}/>
           </div>
           <div className="chat-container2">
              <img src={wardrobe}/>
           </div>
           <div className="With-lots-of-unique-li">
           With lots of unique blocks, you can<br/> easily build a page without coding.
           </div>
           <div className="With-lots-of-unique-liq">
           With lots of unique blocks, you can<br/> easily build a page without coding.
           </div>
           <div className="With-lots-of-unique-lix">
           With lots of unique blocks, you can<br/> easily build a page without coding.
           </div>
           <div className="Great-support">
             Great Support
           </div>
           <div className="Fully-Responsive-li">
             Fully Responsive
           </div>
           <div className="Multiple-Layouts-was">
             Multiple Layouts
           </div>
           <div className="Create-custom-landin-red">
           Create custom landing pages with Omega that converts<br/> more visitors than any website. With lots of unique blocks,<br/> you can easily build a page without coding.
           </div>
           <div className="bg-red"></div>
           <div className="Learn-more">Learn more</div>
           <div className="Build-a-perfect-land">Build a perfect<br/> landing page fast.</div>
           <div className="bg-untitled">
               <img src={untitled}/>
           </div>
           <div className="k-users-are-using">
           50k+ users are<br/> using landing page.
           </div>
           <div className="Create-custom-landin-container2">
           Create custom landing pages with Omega that converts<br/> more visitors than any website. With lots of unique <br/>blocks, you can easily build a page without coding.
           </div>
           <div className="Get-started-container2"></div>
           <div className="Oval-container2">
              <img src={cont}/>
           </div>
           <div className="Get-Started-search">
             Get Started
           </div>
      </top>
      
    );
  } 
}

export default Top;