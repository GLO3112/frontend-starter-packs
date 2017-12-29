import * as Backbone from 'backbone'
import * as _ from 'underscore'

import {HelloWorldModel} from '../models/HelloWorldModel';

export class HelloWorldView extends Backbone.View<HelloWorldModel> {
    template: Function;

    constructor(options?: Backbone.ViewOptions<HelloWorldModel>) {
        super(_.extend({
            el: '#app'
        }, options));
        this.template = require('./HelloWorldTemplate.ejs') as Function;
    }

    render() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
}