import {observable, action, computed, decorate} from 'mobx';
import SessionDetail from '../information/sessionDetail.json';

export default class MarketStore {

    detail =  SessionDetail.find(x=> x.speaker === 'speaker_codecaffein');

    get GetSessionDetail(){
        return this.detail;
    }

    SetSessionDetail = (name) =>{
        const newSessionDetail = SessionDetail.find(x => x.speaker == name);
        this.detail = newSessionDetail;
    }
}

decorate ( MarketStore, {
    detail: observable,
    GetSessionDetail : computed,
    SetSessionDetail : action
})
