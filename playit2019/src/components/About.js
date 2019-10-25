import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className={'container'}>
                <div className={'col-lg-12 text-left'}>
                    <h2 className={'section-heading text-uppercase'} style={{color:'#F05125'}}>일시 및 장소</h2>
                    <div className={'row'} style={{color:'#312d3e', marginTop:'20px', fontWeight:'50'}} >
                        <div className={'col-sm-12 text-left'} >
                            <h5 style={{fontWeight:100}}>2019년 11월 5일 금요일, 09:00~18:00</h5>
                        </div>
                        <div className={'col-sm-12 text-left'} >
                            <h5 style={{fontWeight:100}}>태평양물산1층 "레디:스페이스"에서</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;