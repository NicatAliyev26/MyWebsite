import React, { Component } from 'react'
import '../Style/navbar__.scss'
import Image from "../Image/toggle.png"


export class Navbar extends Component {
    render() {
        return (
            <div className="section">
                <nav className="navbar navbar-expand-lg ">
                      <div className="logo">NA</div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <img src={Image} alt="" />
                      </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item ">
                          <a className="nav-link" href="#about" ><span>01.</span> About<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#portfolio"><span>02.</span> Portfolio</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#skills"><span>03.</span> Skills</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#contact"><span>04.</span> Contact</a>
                        </li>
                      </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
