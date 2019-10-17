import React, { Component } from 'react';
import message0 from '../img/celebration/cel_message0.png'
import message1 from '../img/celebration/cel_message1.png'
import message2 from '../img/celebration/cel_message2.png'
import qr from '../img/etc/counselling_qr.jpg'

class Celebration extends Component {
    render() {
        const celebrationImageWidth = document.body.offsetWidth > 720 ? '70%': '100%';

        return (
            <div className={'container'} style={{marginTop:'150px', marginBottom:'50px', width:'100%'}}>
                <div className={'col-lg-12 text-left'} style={{width:'100%'}}>
                    <h2 className={'section-heading text-uppercase'} style={{color:'#F05125', width:'100%'}}>축하 메시지 🎉</h2>

                    <img src={message0} style={{marginTop:'50px', marginBottom:'20px', display:'block', width:celebrationImageWidth}}  />
                    <img src={message2} style={{marginTop:'50px', marginBottom:'20px', display:'block', width:celebrationImageWidth}}  />
                    <img src={message1} style={{marginTop:'50px',  display:'block',  width:celebrationImageWidth}}  />

                </div>
            </div>
        );
    }
}
export default Celebration;