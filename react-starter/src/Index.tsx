import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HelloWorld} from './components/HelloWorld'

require('../scss/app.scss');

ReactDOM.render(<HelloWorld
        firstname="GLO-3112"
        lastname="WEB"/>,
    document.getElementById('app'));
