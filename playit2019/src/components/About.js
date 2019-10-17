import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className={'container'}>
                <div className={'col-lg-12 text-left'}>
                    <h2 className={'section-heading text-uppercase'} style={{color:'#ff5d00'}}>일시</h2>
                    <div className={'row'} style={{color:'#312d3e', marginTop:'20px'}} >
                        <div className={'col-sm-12 text-left'} >
                            <h5>2019년 11월 5일 금요일</h5>
                        </div>
                        <div className={'col-sm-12 text-left'} >
                            <h5>서울특별시 종로구 관철동 45-1 마이크임팩트 12층</h5>
                        </div>
                        <div className={'col-sm-12 text-left'} >
                            <h5>  09:00 - 17:00 </h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;