import React, { Component } from 'react';

class Location extends Component {
    render() {
        return (
            <div className={'container'} style={{marginTop:'150px', marginBottom:'50px'}}>
                <div className={'col-lg-12 text-left'}>
                    <h2 className={'section-heading text-uppercase'} style={{color:'#F05125'}}>오시는 길</h2>
                    <div className={'row'} style={{color:'#312d3e', marginTop:'20px'}} >
                        <div className={'col-sm-12 text-left'} >
                            <h5 style={{fontWeight:100}}>레디:스페이스 (LEDy space)</h5>
                        </div>
                        <div className={'col-sm-12 text-left'} >
                            <h5 style={{fontWeight:100}}>서울시 구로구 구로동 197-21 번지 태평양물산 1층</h5>
                        </div>
                        
                        <div style={{width:'100%'}}>
                        
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1916.7290753906573!2d126.8942082005725!3d37.4852480729009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f3e6de27889%3A0x434fd6cc09e464e2!2z66CI65SUOuyKpO2OmOydtOyKpA!5e0!3m2!1sko!2skr!4v1571975589568!5m2!1sko!2skr" style={{width:'100%', height:'450px', frameborder:'0', border:'0'}}></iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Location;