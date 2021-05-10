import React from 'react';
import ReactDOM from 'react-dom';
import Introduce from './components/Introduce'
import Navbar from './components/Navbar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'


const root = document.getElementById('root')




export class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Introduce/>
                <About/>
                <Portfolio/>
                <Skills/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default App



ReactDOM.render(<App/>,root)