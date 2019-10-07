import React, { Component } from 'react';
import Schedules from '../information/schedules.json';

class Schedule extends Component {
    render() {
        const schedules = Schedules.map((schedule,index) => {
            if(schedule.part) {
                return (<tr key={index} style={{borderTop:'solid 1px #d9d9d9', height:'75px'}}>
                                        <td>
                                            {schedule.timeRange}
                                        </td>
                                        <td>
                                            <div style={{width:'60%',float:'left'}}>{schedule.subject}</div>
                                            <div style={{width:'40%',float:'left'}}>{schedule.speaker} / {schedule.part} {schedule.team}</div>
                                        </td>
                                    </tr>)
                                    }
             else {
                  return (<tr key={index} style={{borderTop:'solid 1px #d9d9d9', height:'75px'}}>
                                        <td>{schedule.timeRange}</td>
                                        <td>
                                            <div style={{width:'60%',float:'left'}}>{schedule.subject}</div>
                                            <div style={{width:'40%',float:'left'}}>{schedule.speaker}</div>
                                        </td>
                            </tr>)}

                    });

        return (
            <div className={'container'} style={{marginTop:'150px', marginBottom:'50px'}}>
                <div className={'col-lg-12 text-left'}>
                    <h2 className="section-heading text-uppercase" style={{color:'#ff5d00'}}>Schedule</h2>
                    <div className ={'row'}>
                        <table className={'container'} style={{marginTop:'30px'}}>
                            <tbody>
                                {schedules}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Schedule;