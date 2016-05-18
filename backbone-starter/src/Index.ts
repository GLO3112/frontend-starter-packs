import {HelloWorldView} from './views/HelloWorldView'
import {HelloWorldModel} from './models/HelloWorldModel';

$(document).ready(() => {
    let helloWorldModel = new HelloWorldModel({
        firstname: 'GLO-3120',
        lastname: 'WEB'
    });

    let helloWorldView = new HelloWorldView({
        model: helloWorldModel
    });

    helloWorldView.render();
});
