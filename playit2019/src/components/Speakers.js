import React, { Component } from 'react';

class Speakers extends Component {
    render() {
        return (
            <div className={'container'} style={{marginTop:'50px', marginBottom: '150px'}}>
                <div className={'col-lg-12 text-left'}>
                    <h2 className={'section-heading text-uppercase'} style={{color:'#ff5d00'}}>Speakers</h2>
                    <div className={'row'} style={{marginTop:'50px'}}>
                        <div className={'col-sm-4 text-center'} style={{marginTop:'30px'}}>
                            <img className={"mx-auto rounded-circle"} style={{border:'7px solid rgba(0,0,0,.1)', width:'225px', height:'225px'}} src="img/team/1.jpg" alt=""/>
                            <h4 style={{marginTop:'15px'}}>이나영</h4>
                            <h5>Junior Software Engineer</h5>
                            <p className={'text-muted'}>연구실 클라우드 EMR 팀</p>
                        </div>
                        <div className={'col-sm-4 text-center'} style={{marginTop:'30px'}}>
                            <img className={"mx-auto rounded-circle"} style={{border:'7px solid rgba(0,0,0,.1)', width:'225px', height:'225px'}} src="img/team/1.jpg" alt=""/>
                            <h4 style={{marginTop:'15px'}}>강철수</h4>
                            <h5>Senior Product Designer</h5>
                            <p className={'text-muted'}>연구실 제품혁신팀</p>
                        </div>
                        <div className={'col-sm-4 text-center'} style={{marginTop:'30px'}}>
                            <img className={"mx-auto rounded-circle"} style={{border:'7px solid rgba(0,0,0,.1)', width:'225px', height:'225px'}} src="img/team/1.jpg" alt=""/>\
                            <h4 style={{marginTop:'15px'}}>최민수</h4>
                            <h5>  Chief Technical Officer </h5>
                            <p className={'text-muted'}>연구실</p>
                        </div>
                        <div className={'col-sm-4 text-center'} style={{marginTop:'30px'}}>
                            <img className={"mx-auto rounded-circle"} style={{border:'7px solid rgba(0,0,0,.1)', width:'225px', height:'225px'}} src="img/team/1.jpg" alt=""/>
                            <h4 style={{marginTop:'15px'}}>원 빈</h4>
                            <h5>Chief Software Engineer</h5>
                            <p className={'text-muted'}>솔루션 사업부 개발파트 솔루션개발팀</p>
                        </div>
                        <div className={'col-sm-4 text-center'} style={{marginTop:'30px'}}>
                            <img className={"mx-auto rounded-circle"} style={{border:'7px solid rgba(0,0,0,.1)', width:'225px', height:'225px'}} src="img/team/1.jpg" alt=""/>
                            <h4 style={{marginTop:'15px'}}>김분석</h4>
                            <h5>Software Engineer</h5>
                            <p className={'text-muted'}>전략사업부 전략개발파트 데이터분석팀</p>
                        </div>
                        <div className={'col-sm-4 text-center'} style={{marginTop:'30px'}}>
                            <img className={"mx-auto rounded-circle"} style={{border:'7px solid rgba(0,0,0,.1)', width:'225px', height:'225px'}} src="img/team/1.jpg" alt=""/>\
                            <h4 style={{marginTop:'15px'}}>김클라우드</h4>
                            <h5>Principal Software Engineer</h5>
                            <p className={'text-muted'}>솔루션 사업부 개발파트</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Speakers;