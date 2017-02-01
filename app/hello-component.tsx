import * as React from 'react';

interface HelloComponentProperties {
    greeting: string;
    name: string;
}

export default class HelloComponent extends React.Component<HelloComponentProperties, any> {
    render() {
        return <div>{this.props.greeting} from { this.props.name}</div>;
    }
}
