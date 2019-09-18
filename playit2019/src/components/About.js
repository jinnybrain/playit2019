import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className={'container'}>
                <div className={'col-lg-12 text-left'}>
                    <h2 className={'section-heading text-uppercase'} style={{color:'#ff5d00'}}>About</h2>
                    <div className={'row'} style={{color:'#312d3e', marginTop:'20px'}} >
                        <div className={'col-sm-12 text-left'} >
                            <h5>2019년 11월 8일 월요일</h5>
                        </div>
                        <div className={'col-sm-12 text-left'} >
                            <h5> COEX Grand Ballroom, Seoul  </h5>
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