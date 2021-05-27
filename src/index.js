import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'
import Introduce from './components/Introduce'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Loader from "./components/Loader"
import ShowDetail from "./components/ShowDetail"
import "./Style/style.scss"




const root = document.getElementById('root')




export class App extends React.Component {
  state = { loading: true };
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false
    });
  };
  fetchGitHub = () => {
    fetch("https://api.github.com/users/krissanawat")
      .then(res => res.json())
      .then(res => {
        let { name, company, blog, location, bio } = res;
        this.setState({
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
        this.wait();
      });
  };
  componentDidMount() {
    this.wait(3000);
    // this.fetchGitHub();
  }

  render() {
    if (this.state.loading) return <Loader />;
    return (
      <div className="main-page">
        <Cursor />
        <Navbar />
        <Introduce />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App



ReactDOM.render(<App />, root)


