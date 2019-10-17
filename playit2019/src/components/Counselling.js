import React, { Component } from 'react';
import qr from '../img/etc/counselling_qr.jpg'



class Counselling extends Component {
    render() {
        return (
            <div className={'container'} style={{marginTop:'150px', marginBottom:'50px'}}>
                <div className={'col-lg-12 text-left'}>
                    <h2 className={'section-heading text-uppercase'} style={{color:'#ff5d00'}}>고민 상담소</h2>
                    
                    <div className={'row'} style={{color:'#312d3e', marginTop:'20px', fontWeight:'50'}} >

                        <div className={'col-sm-12 text-left'} >
                                <h5 style={{fontWeight:100}}>걱정거리, 고민거리, 개발문화 또는 궁금한 모든 것들을 알려 주세요! 함께 고민해요!</h5>
                                <a href={'https://forms.gle/AbEeuMhzgnTxShp2A'}>https://forms.gle/AbEeuMhzgnTxShp2A</a>
                                <img src={qr} style={{display:'block', marginLeft:'auto', marginRight:'auto', width:'40%'}}  />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default Counselling;