import React from 'react';
import Header from './components/Header';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import About from './components/About';
import Location from './components/Location';
import CodeOfConduct from './components/CodeOfConduct';


class App extends React.Component {
render(){
  return (
    <React.Fragment>
      <Header/>
      <About/>
      <CodeOfConduct/>
      <Speakers/>
      <Schedule/>
      <Location/>
    </React.Fragment>

  );
}

}
export default App;
