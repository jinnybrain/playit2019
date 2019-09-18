import React from 'react';
import Header from './components/Header';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import About from './components/About';


class App extends React.Component {
render(){
  return (
    <React.Fragment>
      <Header/>
      <About/>
      <Speakers/>
      <Schedule/>
    </React.Fragment>

  );
}

}
export default App;
