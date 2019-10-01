import React, { Component } from 'react';

class Location extends Component {
    render() {
        return (
            <div className={'container'} style={{marginTop:'150px', marginBottom:'50px'}}>
                <div className={'col-lg-12 text-left'}>
                    <h2 className={'section-heading text-uppercase'} style={{color:'#ff5d00'}}>Location</h2>
                    <div className={'row'} style={{color:'#312d3e', marginTop:'20px'}} >
                        <div className={'col-sm-12 text-left'} >
                            <h5>서울특별시 강남구 삼성1동 영동대로 513</h5>
                        </div>
                        <div className={'col-sm-12 text-left'} >
                            <h5> COEX Grand Ballroom, Seoul  </h5>
                        </div>
                        <div style={{width:'100%'}}>
                        <iframe src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.7819848724616!2d127.05642241348355!3d37.513059834950056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca46bcb9e129f%3A0xd6bf8dde518b69a4!2z7L2U7JeR7Iqk!5e0!3m2!1sko!2skr!4v1569459592022!5m2!1sko!2skr'} style={{ width:'100%', height:'450px', frameborder:'0', border:'0'}}></iframe>

                        </div>
                        {/* <div className={'col-sm-12 text-left'} style={{border:'1px solid grey', padding : 0}} >
                             <iframe src={'https://map.kakao.com/?itemId=8106108'} style={{width:'100%' , height:'600px', border :0  }} ></iframe> 
                        </div>
                        <div className={'col-sm-12 text-left'} style={{border:'1px solid grey', padding : 0, backgroundColor:'#F4FA58'}} >
                        <strong style={{float:'left', marginLeft: '10px'}} ><img src="https://t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png" width="72" height="16" alt="카카오맵"/></strong>
                        <a style={{fontSize:'15px',  float:'right', color:'black', marginTop:'1px', marginRight:'10px'}}target="_blank" href='https://place.map.kakao.com/8106108'><h7>상세정보</h7></a>
                        <a style={{fontSize:'15px',  float:'right', color:'black', marginTop:'1px', marginRight:'10px'}}target="_blank" href='https://map.kakao.com/?itemId=8106108'><h7>큰화면 보기</h7></a>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Location;