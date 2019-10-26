import React, { Component } from 'react';
import image from '../img/etc/ledyspace.jpg'

class About extends Component {
    render() {
        return (
            <div className={'container'}>
                <div className={'col-lg-12 text-left'}>
                    <h2 className={'section-heading text-uppercase'} style={{color:'#F05125'}}>PLAY IT 2019</h2>
                    <div className={'row'} style={{color:'#312d3e', marginBottom:'120px', fontWeight:'50'}} >
                        <div className={'col-sm-12 text-left'} >
                            <h5 style={{fontWeight:100}}>"플레잇"은 유비케어 연구원들의 정보 교류와 소통, 연구와 놀이 문화를 만들어 나가기 위한 행사입니다.</h5>
                            <h5 style={{fontWeight:100}}>분위기 좋은 곳에서, 다양한 컨텐츠로, 즐겁고 신나며, 유익하지만 따분하지 않을 진솔한 시간을 마련했습니다.</h5>
                            <h5 style={{fontWeight:100}}>유비케어 연구원들이 모두 모일 수 있을 기회는 흔치 않은 기회입니다.</h5>
                            <h5 style={{fontWeight:100}}>꼭 참석하셔서 자리를 빛내 주세요! 🥰</h5>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default About;
