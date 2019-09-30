import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import MarketStore from './stores/market';
import {Provider} from 'mobx-react';

const market = new MarketStore();

ReactDOM.render(

<Provider market={market}>
<App />
</Provider>
, document.getElementById('root'));

