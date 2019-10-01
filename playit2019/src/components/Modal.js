import React, { Component } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import sessions from '../information/sessionDetail.json';

const style = styled.div`
.modal {
    position: fixed; 
    float:left;
    width:50%; 
    top:10%;
    left:25%;
}

`;

class Modal extends Component {

    hide() {
        document.getElementById('sessionDetail').style.display = 'none';
    }

    render() {

        const sessionDetail = sessions;

        return (
            <div id="sessionDetail" style={{textAlign:'center', display:'none'}}>
                <div className={'portfolio-modal modal fade show'} style={{marginLeft:'auto', marginRight:'auto', margintop:'auto', width:'50%', float:'left', left:'25%', display:'block', top:'10%'}}>
                    <div style={{verticalAlign:'middle'}}>
                        <div className={'modal-content'} style={{textAlign:'left'}}>
                            <div style={{marginLeft:'20px', marginRight:'20px'}}>
                            <h4>MS Azure Cloud 기반 웹어플리케이션 개발기</h4>
                            <p>본 강연에서는 최근 NLP의 큰 패러다임 중 하나인 Pre-trained model을 한국어에 적용하며 얻은 여러 인사이트와 엔지니어링적인 이슈, 그리고 여러 실험 결과를 개발자분들께 공유해드리는 자리가 될 것입니다</p>
                            <p>본 강연에서는 최근 NLP의 큰 패러다임 중 하나인 Pre-trained model을 한국어에 적용하며 얻은 여러 인사이트와 엔지니어링적인 이슈, 그리고 여러 실험 결과를 개발자분들께 공유해드리는 자리가 될 것입니다</p>
                            <p>본 강연에서는 최근 NLP의 큰 패러다임 중 하나인 Pre-trained model을 한국어에 적용하며 얻은 여러 인사이트와 엔지니어링적인 이슈, 그리고 여러 실험 결과를 개발자분들께 공유해드리는 자리가 될 것입니다</p>

                            <div>
                                <img style={{float:'left' , height:'100px'}} src="img/speaker/speaker_codecaffein.png" />
                                <div style={{float:'left',  marginLeft:'10px'}}>
                                <h5>이현진 </h5><h6>연구실 기반기술개발팀 </h6>
                                <p>기반기술개발팀의 어플리케이션 전반과 챗봇을 담당하고 있습니다. </p></div>
                            </div>
                            </div>
                        </div>
                        <div id="closeModal" onClick={this.hide} className="close-modal" data-dismiss="modal">
                        <div className="lr">
                            <div class="rl"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>



        );
    }
}

export default Modal;