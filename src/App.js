import React from 'react';
import { Navbar } from './components';
import './App.scss';
import Header from './container/Header/Header';
import About from './container/About/About';
import Project from './container/Projects/Project';
import Skills from './container/Skills/Skills';
import Contact from './container/Contact/Contact';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Project />
    <Skills />
    <Contact />
  </div>
);

export default App;
