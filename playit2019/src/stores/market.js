import {observable, action, computed, decorate} from 'mobx';

export default class MarketStore {

    speaker = '';

    get GetSpeaker(){
        return this.speaker;
    }

    SetSpeaker(name){
        this.speaker = name;
    }
    
}

decorate ( MarketStore, {
    speaker: observable,
    GetSpeaker : computed,
    SetSpeaker : action

})
