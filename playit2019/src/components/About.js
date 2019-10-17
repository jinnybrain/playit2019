import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className={'container'}>
                <div className={'col-lg-12 text-left'}>
                    <h2 className={'section-heading text-uppercase'} style={{color:'#ff5d00'}}>일시</h2>
                    <div className={'row'} style={{color:'#312d3e', marginTop:'20px', fontWeight:'50'}} >
                        <div className={'col-sm-12 text-left'} >
                            <h4 style={{fontWeight:100}}>2019년 11월 5일 금요일</h4>
                        </div>
                        <div className={'col-sm-12 text-left'} >
                            <h4 style={{fontWeight:100}}>서울특별시 종로구 관철동 45-1 마이크임팩트 12층</h4>
                        </div>
                        <div className={'col-sm-12 text-left'} >
                            <h4 style={{fontWeight:100}}>  09:00 - 17:00 </h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;