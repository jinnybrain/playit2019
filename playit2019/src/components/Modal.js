import React, { Component } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import sessions from '../information/sessionDetail.json';
import { inject, observer } from 'mobx-react';

const style = styled.div`
.modal {
    position: fixed; 
    float:left;
    width:50%; 
    top:10%;
    left:25%;
}

`;



const Modal = ({sessionDetail}) => {
    const contextList = sessionDetail.context.map ( item => (
        <p>{item.value}</p>
    ));

    const hide = () => {
        document.getElementById('sessionDetail').style.display = 'none';
    }

    const imagePath = 'img/speaker/' + sessionDetail.speaker + '.png';

        return (
            <div id="sessionDetail" style={{textAlign:'center', display:'none'}}>
                <div className={'portfolio-modal modal fade show'} style={{marginLeft:'auto', marginRight:'auto', margintop:'auto', width:'50%', float:'left', left:'25%', display:'block', top:'10%'}}>
                    <div style={{verticalAlign:'middle'}}>
                        <div className={'modal-content'} style={{textAlign:'left'}}>
                            <div style={{marginLeft:'20px', marginRight:'20px'}}>
                            <h4>{sessionDetail.subject}</h4>
                            {contextList}
                            <div>
                                <img style={{float:'left' , height:'100px'}} src={imagePath} />
                                <div style={{float:'left',  marginLeft:'10px'}}>
                                <h5>{sessionDetail.speakerName} </h5><h6>{sessionDetail.part}  {sessionDetail.team}</h6>
                                <p>{sessionDetail.role} </p></div>
                            </div>
                            </div>
                        </div>
                        <div id="closeModal" onClick={hide} className="close-modal" data-dismiss="modal">
                        <div className="lr">
                            <div class="rl"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        ); 
}

export default inject(({ market }) => ({
    sessionDetail: market.GetSessionDetail
  }))(observer(Modal));