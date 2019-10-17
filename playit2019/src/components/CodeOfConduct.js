import React, { Component } from 'react';

class CodeOfConduct extends Component {
    render() {
        return (
            <div className={'container'} style={{marginTop:'150px', marginBottom:'50px', width:'100%'}}>
                <div className={'col-lg-12'} style={{width:'100%'}}>
                    <div className={'row'} style={{color:'#312d3e', marginTop:'20px', width:'100%'}} >
                    <h2 className={'section-heading text-uppercase'} style={{color:'#ff5d00'}}>참석자 행동지침</h2>

                        <div className={'col-sm-12 text-left'} style={{marginTop:'10px'}} >
                            <h4 style={{fontWeight:100}}>😄 행사에 참석한 모든 분들은 나이, 성별, 직급, 직책, 근속 연차에 관계없이 모두 동등한 관계입니다. 서로를 존중해주세요.</h4>
                        </div>
                        <div className={'col-sm-12 text-left'}  style={{marginTop:'10px'}} >
                            <h4 style={{fontWeight:100}}>🍺 약소한 음주가 예상됩니다. 차량 운전자는 반드시 논알콜 음료를 이용해 주세요.</h4>
                        </div>
                        <div className={'col-sm-12 text-left'}  style={{marginTop:'10px'}} >
                            <h4 style={{fontWeight:100}}>😳 곤란한 일이 생겼을 경우 운영진이나 진행요원에게 도움을 청해 주세요.</h4>
                        </div>
                        <div className={'col-sm-12 text-left'}  style={{marginTop:'10px'}} >
                            <h4 style={{fontWeight:100}}>♻ 쓰레기는 반드시 지정된 장소에 버리고, 재활용에 신경써주세요.</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CodeOfConduct;