import React, { Component } from 'react';
import Header from './Component/Index/Header.js'
import HelloWorld from './Component/Index/HelloWorld.js'
import TopicSection from './Component/Index/TopicSection.js'
import Footer from './Component/Index/Footer.js'
import Beaverpic from './Component/Index/Beaverpic.js';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Header />
      <HelloWorld />
      
      <td><Beaverpic name= "Front-End" /></td>
      <td><Beaverpic name= "Design" /></td>
      <td><Beaverpic name= "Game" /></td>
      <td><Beaverpic name= "Infra" /></td>

      <TopicSection name= "Front-End" />
      <TopicSection name= "Design" />
      <TopicSection name= "Game" />
      <TopicSection name= "Infra" />
      <Footer />

      </div>
      );
  }
}

export default App;
