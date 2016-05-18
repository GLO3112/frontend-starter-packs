import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HelloWorld} from './components/HelloWorld'

ReactDOM.render(<HelloWorld
        firstname="John"
        lastname="Smith"/>,
    document.getElementById('app'));
