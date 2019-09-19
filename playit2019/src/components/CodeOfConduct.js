import React, { Component } from 'react';

class CodeOfConduct extends Component {
    render() {
        return (
            <div className={'container'} style={{marginTop:'50px'}}>
                <div className={'col-lg-12 text-left'}>
                    <h2 className={'section-heading text-uppercase'} style={{color:'#ff5d00'}}>Code of Conduct (참석자 행동강령)</h2>
                    <div className={'row'} style={{color:'#312d3e', marginTop:'20px'}} >
                        <div className={'col-sm-12 text-left'} >
                            <h6> - 행사에 참석한 모든 분들은 나이, 성별, 직급, 직책, 근속 연차에 관계없이 모두 동등한 관계입니다.서로를 존중해주세요 😁</h6>
                        </div>
                        <div className={'col-sm-12 text-left'} >
                            <h6>- 약소한 음주가 예상됩니다. 차량 운전자는 반드시 논알콜 음료를 이용해 주세요. 🍺</h6>
                        </div>
                        <div className={'col-sm-12 text-left'} >
                            <h6>- 곤란한 일이 생기면 운영진 (동아리 멤버)에게 말씀해 주세요. 😥</h6>
                        </div>
                        <div className={'col-sm-12 text-left'} >
                            <h6>- 쓰레기는 반드시 분리하여 배출해 주세요. ♻</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CodeOfConduct;