import React, { Component } from 'react'
import '../Style/about__.scss'
import Image from '../Image/coding.jpg'
import { BsCaretRight } from "react-icons/bs";
import Resume from '../Image/Nicat-Aliyev-CV.pdf'
import WOW from 'wowjs'







export class About extends Component {
    componentDidMount(){
        new WOW.WOW().init();
    }
    render() {
        return (
            <div>
                <div className="section-about" id="about">
                  <div className="about container wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0s">

                    <div className="number"><h1>01.</h1></div>
                    <div className="text">
                        <h1>About me</h1>
                        <span>
                        <BsCaretRight className="icon"/>
                        <p> Hello! My name is Nicat Aliyev. I am a creative frontend developer, writing code and moving pixels in the www. <br /><br />

                           I spent years developing design systems for clients along with other creative projects.
                           My goal as a developer is to write less code more efficiently, combining the power of reusable components with modern frameworks. Additionally, I always strive to include new and innovative interactions to enhance the user experience.
                           </p>           
                        </span>                                
                       <a href={Resume} download="My_CV.pdf" ><button className="btn btn--1"> Resume</button></a>  
                    </div>
                    <div className="picture"><img src={Image}  alt="" /></div>

                  </div>
                </div>
            </div>
        )
    }
}

export default About
