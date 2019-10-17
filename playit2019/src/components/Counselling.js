import React, { Component } from 'react';
import message0 from '../img/celebration/cel_message0.png'
import message1 from '../img/celebration/cel_message1.png'
import message2 from '../img/celebration/cel_message2.png'

class Counselling extends Component {
    render() {
        return (
            <div className={'container'} style={{marginTop:'150px', marginBottom:'50px'}}>
                <div className={'col-lg-12 text-left'}>
                    <h2 className={'section-heading text-uppercase'} style={{color:'#ff5d00'}}>고민상담소</h2>
                    <div className={'row'} style={{color:'#312d3e', marginTop:'50px', marginBottom:'70px'}} >
                        <img src={message0} style={{display:'block', marginLeft:'auto', marginRight:'auto', width:'60%'}}  />
                    </div>
                 
                    <div className={'row'} style={{color:'#312d3e', marginBottom:'70px'}} >
                        <img src={message2} style={{display:'block', marginLeft:'auto', marginRight:'auto', width:'60%'}}  />
                    </div>

                    <div className={'row'} style={{color:'#312d3e'}} >
                        <img src={message1} style={{display:'block', marginLeft:'auto', marginRight:'auto', width:'60%'}}  />
                    </div>

                </div>
            </div>
        );
    }
}
export default Counselling;