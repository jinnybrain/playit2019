import React, { Component } from 'react';
import qr from '../img/etc/counselling_qr.jpg'
import poster from '../img/etc/counselling.png'



class Counselling extends Component {
    render() {
        return (
            <div className={'container'} style={{marginTop:'150px', marginBottom:'50px'}}>
                <div className={'col-lg-12 text-left'}>
                    <h2 className={'section-heading text-uppercase'} style={{color:'#F05125'}}>고민 상담소</h2>
                    
                    <div className={'row'} style={{color:'#312d3e', marginTop:'20px', marginBottom:'10px', fontWeight:'50'}} >

                        <div className={'col-sm-12 text-left'} >
                                <h5 style={{fontWeight:100}}>걱정거리, 고민거리, 개발문화 또는 궁금한 모든 것들을 이야기해 주세요! 함께 고민해요!</h5>
                        </div>

                    </div>
                    <a href={'https://forms.gle/AbEeuMhzgnTxShp2A'}><h5 style={{fontWeight:100, color:'#f77f07', width:'100%', marginLeft:'auto', marginRight:'auto'}}>상담 및 설문 페이지 보기</h5></a>
                    <a href={'https://forms.gle/AbEeuMhzgnTxShp2A'}><img src={poster} style={{display:'block', marginLeft:'auto', marginRight:'auto'}}/></a>

                    
                </div>
            </div>
        );
    }
}
export default Counselling;