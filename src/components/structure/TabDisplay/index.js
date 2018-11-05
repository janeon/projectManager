import React, { Component } from 'react';
import View from './View';

class TabDisplay extends Component {

    constructor(props) {
        super(props);

        this.tabInfo = props.tabInfo;
        this.tabToDisplay = props.tabToDisplay;
        // this is being passed the registerFinalState function, it just isn't passing it yet. 
        
    }

    render() {
        // TODO -> parse tabinfo to decide what to render...
        return <View />;
    }

}

export default TabDisplay;