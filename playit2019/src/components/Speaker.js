import React, { Component } from 'react';

class Speaker extends Component {

    showModal () {
        const modal = document.getElementById('sessionDetail').style.display = 'block';
    }

    render() {

          var id = this.props.info.imagePath.substring (this.props.info.imagePath.lastIndexOf('/')+1).replace('.png','');

        return (
            <div id={id} onClick={this.showModal} className={'col-sm-4 text-center'} style={{marginTop:'30px'}}>
            <img className={"mx-auto rounded-circle"} style={{border:'7px solid rgba(0,0,0,.1)', width:'225px', height:'225px'}} src={this.props.info.imagePath} alt=""/>
            <h4 style={{marginTop:'15px'}}>{this.props.info.name}</h4>
            <h5>{this.props.info.position}</h5>
            <h6 className={'text-muted'}>{this.props.info.part} {this.props.info.team}</h6>
        </div>
        );
    }
}

export default Speaker;