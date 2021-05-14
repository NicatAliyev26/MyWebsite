import React, { Component } from 'react'
import '../Style/skills__.scss'
import { BsCaretRight } from "react-icons/bs";
import ProgressBar from 'react-bootstrap/ProgressBar'
import WOW from 'wowjs'

export class Skills extends Component {
    componentDidMount(){
        new WOW.WOW().init();
    }
    render() {
        return (
            <div>
               <div className="section-skills" id="skills">
                  <div className="skills container wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0s">
                    <div className="number"><h1>03.</h1></div>
                    <div className="text">
                      <h1>Skills</h1>
                      <span>
                        <BsCaretRight className="icon"/>
                        <p> <span className="main-text">A winner is someone who recognizes his God-given talents, works his tail off to develop them into skills, and uses these skills to accomplish his goals.</span>  
                        </p>           
                       </span>  
                       <Progressbar title="HTML5"
                                    bar={95}
                                    percentage="95%"
                        />
                       <Progressbar title="CSS3/SASS"
                                    bar={95}
                                    percentage="95%"
                       />
                       <Progressbar title="Bootstrap"
                                    bar={90}
                                    percentage="90%"
                       />
                       <Progressbar title="Git"
                                    bar={70}
                                    percentage="70%"
                       />
                       <Progressbar title="JavaScript"
                                    bar={60}
                                    percentage="60%"
                       />
                       <Progressbar title="Jquery"
                                    bar={60}
                                    percentage="60%"
                       />
                       <Progressbar title="React.Js"
                                    bar={60}
                                    percentage="60%"
                       />                     
                       
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default Skills






export class Progressbar extends Component {
    render() {
        return (
            <div>
                <div className='bar ' >
                            <div className='barname'>{this.props.title}</div>
                            <ProgressBar animated now={this.props.bar} /> 
                            <div className='percentage'>{this.props.percentage}</div>
                </div>
            </div>
        )
    }
}


