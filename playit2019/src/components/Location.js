import React, { Component } from 'react';

class Location extends Component {
    render() {
        return (
            <div className={'container'} style={{marginTop:'150px', marginBottom:'50px'}}>
                <div className={'col-lg-12 text-left'}>
                    <h2 className={'section-heading text-uppercase'} style={{color:'#F05125'}}>장소</h2>
                    <div className={'row'} style={{color:'#312d3e', marginTop:'20px'}} >
                        <div className={'col-sm-12 text-left'} >
                            <h5>장소 협의중</h5>
                        </div>
                        <div style={{width:'100%'}}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12649.536528536628!2d126.98152400346366!3d37.569571367781286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2e8dca48fdb%3A0xe6eeee574f549b43!2z66eI7J207YGs7J6E7Yyp7Yq4!5e0!3m2!1sko!2skr!4v1570693343478!5m2!1sko!2skr" style={{width:'100%', height:'450px', frameborder:'0', border:'0'}}></iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Location;