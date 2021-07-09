import React, { Component } from 'react'
import '../Style/contact__.scss'
import { BsCaretRight } from "react-icons/bs";
import WOW from 'wowjs'




export class Contact extends Component {
  componentDidMount(){
    new WOW.WOW().init();
}
    render() {
        return (
            <div>
                <div className="section-contact" id="contact">
                  <div className="contact container wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0s">
                    <div className="number"><h1>04.</h1></div>
                    <div className="text">
                      <h1>Contact me</h1>
                      <span>
                        <BsCaretRight className="icon"/>
                        <p> <span className="main-text">Do you want a new website that looks good and converts well?</span>  <br/>
                          <span className="sentence">If you have a project in mind or are simply interested in finding out more, please fill the form <br/> below and let’s get things moving.</span> 
                        </p>           
                       </span>    

                       <form action="mailto:nicataliyev905@gmail.com" method="post" enctype="text/plain" >
                           <div className='name'>
                               <input type="text" placeholder='First name' required />
                               <input type="text" placeholder='Last name' required />
                           </div>
                           <div className='mail'>
                               <input type="email" className='e-mail'  placeholder='Email adress'/>
                               <input type="text" className='message' placeholder='Message...'/>
                           </div>
                           <button className="btn btn--1">Submit</button>
                        </form>                       
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default Contact
