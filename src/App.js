import React, { Component } from 'react';
import NavBar from './sections/navbar';
import Profile from './sections/profile';
import Portfolio from './sections/portfolio';
import AboutMe from './sections/aboutme';
import Skills from './sections/skills';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Profile />
        <AboutMe />
        <Skills />
      </div>
    );
  }
}

export default App;
