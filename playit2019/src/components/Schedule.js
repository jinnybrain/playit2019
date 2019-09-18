import React, { Component } from 'react';

class Schedule extends Component {
    render() {
        return (
            <div className={'container'} style={{marginTop:'30px', marginBottom:'50px'}}>
                <div className={'col-lg-12 text-left'}>
                    <h2 class="section-heading text-uppercase" style={{color:'#ff5d00'}}>Schedule</h2>
                    <div className ={'row'}>
                        <table className={'container'} style={{marginTop:'30px'}}>
                            <tr style={{borderTop:'solid 1px #d9d9d9', height:'75px'}}>
                                    <td style={{marginRight:'10px'}}>
                                    ~ 09:00
                                    </td>
                                    <td>
                                        <div style={{width:'100%',float:'left'}}>
                                            REGISTER
                                        </div>
                                    </td>
                                </tr>
                            <tr style={{borderTop:'solid 1px #d9d9d9', height:'75px'}}>
                                    <td>
                                        09:00 - 10:00
                                    </td>
                                    <td>
                                        <div style={{width:'60%',float:'left'}}>
                                            MS Azure Cloud 기반 웹어플리케이션 개발기
                                        </div>
                                        <div style={{width:'40%',float:'left'}}>
                                            김솔루션 / 솔루션사업부 개발파트 솔루션개발팀
                                        </div>
                                    </td>
                                </tr>
                            <tr style={{borderTop:'solid 1px #d9d9d9', height:'75px'}}>
                                    <td>
                                        10:00 - 11:00
                                    </td>
                                    <td>
                                        <div style={{width:'60%',float:'left'}}>
                                            React Native 를 사용하여 한달만에 앱 출시하기
                                        </div>
                                        <div style={{width:'40%',float:'left'}}>
                                            김철수 / 연구실 기반기술개발팀
                                        </div>
                                    </td>
                                </tr>
                            <tr style={{borderTop:'solid 1px #d9d9d9', height:'75px'}}>
                                <td>
                                    11:00 - 12:00
                                </td>
                                <td>
                                    <div style={{width:'60%',float:'left'}}>
                                        비동기를 우아하게 처리하기 위한 Observable
                                    </div>
                                    <div style={{width:'40%',float:'left'}}>
                                        김철수 / 연구실 클라우드 EMR팀
                                    </div>
                                </td>
                            </tr>
                            <tr style={{borderTop:'solid 1px #d9d9d9', height:'75px'}}>
                                <td>
                                    12:00 - 13:00
                                </td>
                                <td>
                                    <div style={{width:'60%',float:'left'}}>
                                        LUNCH
                                    </div>
                                    <div style={{width:'40%',float:'left'}}>
                                        지정식당
                                    </div>
                                </td>
                            </tr>
                            <tr style={{borderTop:'solid 1px #d9d9d9', height:'75px'}}>
                                <td>
                                    13:00 - 14:00
                                </td>
                                <td>
                                    <div style={{width:'60%',float:'left'}}>
                                        ES6+ 비동기 프로그래밍과 실전 에러 핸들링
                                    </div>
                                    <div style={{width:'40%',float:'left'}}>
                                        김철수 / 연구실 클라우드 EMR팀
                                    </div>
                                </td>
                            </tr>
                            <tr style={{borderTop:'solid 1px #d9d9d9', height:'75px'}}>
                                <td>
                                    14:00 - 15:00
                                </td>
                                <td>
                                    <div style={{width:'60%',float:'left'}}>
                                       책에서는 맛볼수 없는 HTML5 Canvas 이야기 
                                    </div>
                                    <div style={{width:'40%',float:'left'}}>
                                        김철수 / 연구실 클라우드 EMR팀
                                    </div>
                                </td>
                            </tr>
                            <tr style={{borderTop:'solid 1px #d9d9d9', height:'75px'}}>
                                <td>
                                    15:00 - 16:00
                                </td>
                                <td>
                                    <div style={{width:'60%',float:'left'}}>
                                        서비스 오리엔티드 블록체인을 위한 스케일링 문제해결
                                    </div>
                                    <div style={{width:'40%',float:'left'}}>
                                        김철수 / 연구실 클라우드 EMR팀
                                    </div>
                                </td>
                            </tr>
                            <tr style={{borderTop:'solid 1px #d9d9d9', height:'75px'}}>
                                <td>
                                    16:00 - 17:00
                                </td>
                                <td>
                                    <div style={{width:'60%',float:'left'}}>
                                        JavaScript 배틀그라운드로부터 살아남기
                                    </div>
                                    <div style={{width:'40%',float:'left'}}>
                                        김철수 / 연구실 클라우드 EMR팀
                                    </div>
                                </td>
                            </tr>
                            <tr style={{borderTop:'solid 1px #d9d9d9', height:'75px'}}>
                                <td>
                                    17:00 - 18:00
                                </td>
                                <td>
                                    <div style={{width:'60%',float:'left'}}>
                                        웹 성능 최적화에 필요한 브라우저의 모든것
                                    </div>
                                    <div style={{width:'40%',float:'left'}}>
                                        김철수 / 연구실 클라우드 EMR팀
                                    </div>
                                </td>
                            </tr>
                        
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Schedule;