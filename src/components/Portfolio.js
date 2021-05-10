import React, { Component } from 'react'
import '../Style/portfolio__.scss'
import { BsCaretRight } from "react-icons/bs";
import Rectangle14 from '../Image/Rectangle14.png'
import Rectangle15 from '../Image/Rectangle15.jpg'
import Rectangle16 from '../Image/Rectangle16.png'
import Rectangle17 from '../Image/Rectangle17.png'
import Rectangle9  from '../Image/Rectangle9.png'
import Rectangle18  from '../Image/Rectangle18.png'
import WOW from 'wowjs'

export class Portfolio extends Component {
    componentDidMount(){
        new WOW.WOW().init();
    }
    render() {
        return (
            <div >
                <div className="section-portfolio " id="portfolio">
                  <div className="portfolio container wow fadeInLeftBig" data-wow-duration="2s" data-wow-delay="0s">
                    <div className="number"><h1>02.</h1></div>
                    <div className="text">
                        <h1>Portfolio</h1>

                      <span>
                        <BsCaretRight className="icon"/>
                        <p> <span className="main-text">My lastest projects</span>  <br/>
                          <span className="sentence">I'm looking to expand my portfolio while I'm on top and while I'm young.</span> 
                        </p>           
                       </span>   

                       <div className="pictures">                        
                                <Up/>
                                <Down/>                         
                       </div>

                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Portfolio




export class Up extends Component {
    render() {
        return (
            <div>
                <ul className="up">
                <li><a href="#"><img src={Rectangle15} alt="" /></a>
                                      <h4>Lorem ipsum dolor</h4>
                                      <p>Bootstrap  React.js  </p>
                                  </li>
                <li><a href="#"><img src={Rectangle17} alt="" /></a>
                                      <h4>Lorem ipsum dolor</h4>
                                      <p>Bootstrap  React.js</p></li>
                <li><a href="#"><img src={Rectangle16} alt="" /></a>
                                      <h4>Lorem ipsum dolor</h4>
                                      <p>Bootstrap  React.js</p>
                </li>
                </ul>
            </div>
        )
    }
}
export class Down extends Component {
    render() {
        return (
            <div>
                <ul className="down">
                    <li><a href="#"><img src={Rectangle14} alt="" /></a>
                        <h4>Lorem ipsum dolor</h4>
                        <p>Bootstrap  React.js</p>
                    </li>
                    <li><a href="#"><img src={Rectangle9} alt="" /></a>
                        <h4>Lorem ipsum dolor</h4>
                        <p>Bootstrap  React.js</p>
                    </li>
                    <li><a href="#"><img src={Rectangle18} alt="" /></a>
                        <h4>Lorem ipsum dolor</h4>
                        <p>Bootstrap  React.js</p>
                    </li>
                </ul>
            </div>
        )
    }
}


