import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class Speaker extends Component {

    showModal () {
        const modal = document.getElementById('sessionDetail').style.display = 'block';
       // this.SetSpeaker(this.props.info.imagePath.substring (this.props.info.imagePath.lastIndexOf('/')+1).replace('.png',''));
    }

    render() {

          var id = this.props.info.imagePath.substring (this.props.info.imagePath.lastIndexOf('/')+1).replace('.png','');

        return (
            <div id={id} onClick={this.showModal} className={'col-sm-4 text-center'} style={{marginTop:'30px'}}>
            <img className={"mx-auto rounded-circle"} style={{border:'2px solid rgba(0,0,0,.1)', width:'225px', height:'225px'}} src={this.props.info.imagePath} alt=""/>
            <h4 style={{marginTop:'15px', color:'rgb(255, 93, 0)'}}>{this.props.info.position}</h4>
            <h5>{this.props.info.name}</h5>
            <h6 className={'text-muted'}>{this.props.info.part} {this.props.info.team}</h6>
        </div>
        );
    }
}


export default inject(({ market }) => ({
    SetSpeaker: market.SetSpeaker
  }))(observer(Speaker));