import React, { Component } from 'react'
import '../Style/introduce__.scss'
import Image from '../Image/profil-pic.jpg'
import WOW from 'wowjs'



export class Introduce extends Component {

    componentDidMount(){
        new WOW.WOW().init();
    }

    render() {
        return (
            <div className="section-intro " >
                <div className="main container  wow fadeInLeftBig align-items-center" data-wow-duration="1s" data-wow-delay="0s">
                    <div className="intro-text">
                        <p>Hi!</p>
                        <p>My name is Nicat.</p>
                        <h1>Creative Frontend <br/> Developer</h1>
                        <p>Based in Baku, Azerbaijan.</p>
                        <button className="btn btn--1">Get in touch</button>
                    </div>


                    <div className="intro-img">                   
                        <img src={Image} alt="No Load"/>                       
                    </div> 
                </div>

            </div>
        )
    }
}

export default Introduce
