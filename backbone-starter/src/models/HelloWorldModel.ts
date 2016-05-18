export interface HelloWorldModelAttributes {
    firstname: string;
    lastname: string;
}

export class HelloWorldModel extends Backbone.Model {

    constructor(attributes: HelloWorldModelAttributes, options?: any) {
        super(attributes, options);
    }

    defaults() {
        return {
            firstname: '',
            lastname: ''
        }
    }
}