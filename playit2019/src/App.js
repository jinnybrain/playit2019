import React from 'react';
import Header from './components/Header';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import About from './components/About';
import Location from './components/Location';
import CodeOfConduct from './components/CodeOfConduct';
import Sponser from './components/Sponser';
import Modal from './components/Modal';
import SpeakersInfo from './information/speakers.json';
import Celebration from './components/Celebration';


class App extends React.Component {

render(){
  return (
    <React.Fragment>
      <Header/>
      <About/>
      <CodeOfConduct/>
      <Speakers data={SpeakersInfo} />
      <Schedule/>
      <Celebration/>
      <Location/>
      <Sponser/>
      <Modal/>
    </React.Fragment>
  );
}


}
export default App;
