import React, { Component } from 'react';
import message0 from '../img/celebration/cel_message0.png'
import message1 from '../img/celebration/cel_message1.png'
import message2 from '../img/celebration/cel_message2.png'

class Celebration extends Component {
    render() {
        return (
            <div className={'container'} style={{marginTop:'150px', marginBottom:'50px'}}>
                <div className={'col-lg-12 text-left'}>
                    <h2 className={'section-heading text-uppercase'} style={{color:'#ff5d00'}}>Celebration 🎉</h2>
                    <div className={'row'} style={{color:'#312d3e'}} >
                        <img src={message0} style={{display:'block', marginLeft:'auto', marginRight:'auto'}}  />
                    </div>
                 
                    <div className={'row'} style={{color:'#312d3e'}} >
                        <img src={message1} style={{display:'block', marginLeft:'auto', marginRight:'auto'}}  />
                    </div>

                    <div className={'row'} style={{color:'#312d3e'}} >
                        <img src={message2} style={{display:'block', marginLeft:'auto', marginRight:'auto'}}  />
                    </div>

                </div>
            </div>
        );
    }
}
export default Celebration;