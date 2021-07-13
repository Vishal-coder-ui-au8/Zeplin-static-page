import React, { Component } from 'react';
import '../styles/container3.css';
import hold from "../images/img.png";
import group from "../images/group.png";
import card from "../images/cards.png";
import layout11 from "../images/layout-11.png";
import small from "../images/smartphone.png";
import bar from "../images/sidebar.png";
import grid from "../images/grid-46.png";
import chat from "../images/chat-content.png";
import repair from '../images/get.png';
import soot from "../images/doc.png";
import loot from "../images/50-unique-design-bl.png";
import spec from "../images/multiple-layouts.png";
import mobile from '../images/mobile-2.png';
import full from "../images/fully-responsive.png";
import work from "../images/bootstrap-4-framewor.png";
import soup from "../images/humanly-support.png";
import up from "../images/lifetime-updates.png";
import sout from "../images/rich-documentation.png";
class Middle extends Component {
  render() {
    return (
     
      <middle>
           <div className="container3"></div>
           <div className="Its-everything-you">
              It’s everything<br/> you’ll ever need
           </div>
           <div className="book1"></div>
           <div className="book2"></div>
           <div className='book3'></div>
           <div className="book4"></div>
           <div className="book5"></div>
           <div className="book6"></div>
           <div className="book7"></div>
           <div className="book8"></div>
           <div className="Oval-bow"></div>
           <div className="Oval-bow1"></div>
           <div className="Oval-bow2"></div>
           <div className="Oval-bow3"></div>
           <div className="Oval-bow4"></div>
           <div className="Oval-bow5"></div>
           <div className="Oval-bow6"></div>
           <div className="Oval-bow7"></div>
           <div className="cards">
               <img src={card}/>
           </div>
           <div className="layout-11">
              <img src={layout11}/>
           </div>
           <div className="smartphone">
              <img src={small}/>
           </div>
           <div className="sidebar">
              <img src={bar}/>
           </div>
           <div className="grid-46">
              <img src={grid}/>
           </div>
           <div className="chat-content">
              <img src={chat}/>
           </div>
           <div className="repair">
              <img src={repair}/>
           </div>
           <div className="Doc">
              <img src={soot}/>
           </div>
           <div className="-Unique-Design-Bl">
              <img src={loot}/>
           </div>
           <div className="Multiple-Layouts">
              <img src={spec}/>
           </div>
           <div className="Mobile-First-Design-Copy-2">
              <img src={mobile}/>
           </div>
           <div className="Fully-Responsive">
              <img src={full}/>
           </div>
           <div className="Bootstrap-4-Framewor">
              <img src={work}/>
           </div>
           <div className="Humanly-Support">
              <img src={soup}/>
           </div>
           <div className="Lifetime-Updates">
              <img src={up}/>
           </div>
           <div className="Rich-Documentation">
              <img src={sout}/>
           </div>
           <div className="picture">
               <img src={hold}/>
           </div>
           <div className="Group">
              <img src={group}  style= {{width: "130%"}}/>
           </div>
           <div className="Save-tons-of-time-on">
           Save tons of time <br/>on design & coding.
           </div>
           <div className="Create-custom-landin-rule">
           Create custom landing pages with Omega that converts<br/> more visitors than any website. With lots of unique blocks, <br/>you can easily build a page without coding.
           </div>
           <div className="get-started-shape"></div>
           <div className="Get-started-horse">Get Started</div>
      </middle>
      
    );
  } 
}

export default Middle;