import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

const Speaker = ({info, SetSessionDetail}) => {

    const id = info.imagePath.substring (info.imagePath.lastIndexOf('/')+1).replace('.png','');
    const showModal = () => {
        SetSessionDetail(info.imagePath.substring (info.imagePath.lastIndexOf('/')+1).replace('.png',''))
       const modal = document.getElementById('sessionDetail').style.display = 'block';

    }
    return (
        <div id={id} onClick={showModal} className={'col-sm-4 text-center'} style={{marginTop:'30px'}}>
        <img className={"mx-auto rounded-circle"} style={{border:'2px solid rgba(0,0,0,.1)', width:'225px', height:'225px'}} src={info.imagePath} alt=""/>
        <h4 style={{marginTop:'15px', color:'rgb(255, 93, 0)'}}>{info.position}</h4>
        <h5>{info.name}</h5>
        <h6 className={'text-muted'}>{info.part} {info.team}</h6>
    </div>
    );
}

export default inject(({ market }) => ({
    SetSessionDetail: market.SetSessionDetail
  }))(observer(Speaker));