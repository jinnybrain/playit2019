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
    const contextList = sessionDetail.context.map (( item , index ) => (
        <p key={index}>{item.value}</p>
    ));

    const hide = () => {
        document.getElementById('sessionDetail').style.display = 'none';
    }


    const commonStyle = {
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'auto',
        float:'left',
        left:'25%',
        width: '50%',
        display:'block',
        top:'10%'
    }

    const mobileModalStyle = {
        width: '100%',
        display:'block',
        top:'10%'
    }

    const modalStyle = document.body.offsetWidth > 720 ? commonStyle: mobileModalStyle;
    const imageHeight = document.body.offsetWidth > 720 ? '100px' : '70px';
    const imagePath = 'img/speaker/' + sessionDetail.speaker + '.png';

        return (
            <div id="sessionDetail" style={{textAlign:'center', display:'none'}}>
                <div className={'portfolio-modal modal fade show'} style={modalStyle}>
                    <div style={{verticalAlign:'middle'}}>
                        <div className={'modal-content'} style={{textAlign:'left'}}>
                            <div style={{marginLeft:'20px', marginRight:'20px'}}>
                            <h4>{sessionDetail.subject}</h4>
                            {contextList}
                            <div style={{marginTop:'40px'}}>
                                <img style={{float:'left' , height:imageHeight}} src={imagePath} />
                                <div style={{float:'left',  marginLeft:'25px'}}>
                                <h5>{sessionDetail.speakerName} </h5><h6>{sessionDetail.part}  {sessionDetail.team}</h6>
                                <p>{sessionDetail.role} </p></div>
                            </div>
                            </div>
                        </div>
                        <div id="closeModal" onClick={hide} className="close-modal" data-dismiss="modal">
                        <div className="lr">
                            <div className="rl"></div>
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