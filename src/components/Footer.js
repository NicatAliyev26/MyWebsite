import React, { Component } from 'react'
import '../Style/footer__.scss'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import WOW from 'wowjs'

export class Footer extends Component {
    componentDidMount(){
        new WOW.WOW().init();
    }
    render() {
        return (
            <div>
                <div className="footer">
                    <div className='info-1 wow fadeInLeftBig' data-wow-duration="2s" data-wow-delay="0s">
                        <p>Follow Me</p>
                        <div className='line'></div>
                     <div className="icons">
                        <a href="https://github.com/NicatAliyev26" target="_blank"><FiGithub className="social"/></a> 
                        <a href="https://www.linkedin.com/in/nicat-aliyev-ba0b91185/" target="_blank" ><FaLinkedinIn className="social"/></a> 
                        <a href="https://www.facebook.com/profile.php?id=100005968631009" target="_blank" ><FaFacebookF className="social"/></a> 
                     </div>
                    </div>
                    <div className="info-2 wow fadeInRightBig" data-wow-duration="2s" data-wow-delay="0s">
                        <p>© 2019 Nicat Aliyev. All rights reserved.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
