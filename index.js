import React from 'react';
import { AppRegistry, View } from 'react-360';


//These are your components to work with

import CnContainer from '../components/core/container';
import CnCard from '../components/card/card';
import CnButton from '../components/button/button';
import CnIcon from '../components/button/icon';
import CnCardContent from '../components/card/card-content';
import CnCardFooter from '../components/card/card-footer';
import CnCardHeader from '../components/card/card-header';
import CnRow from '../components/core/row';


export default class Example extends React.Component {
    render() {
        return (
        <View>

        </View>
        );
    }
}

AppRegistry.registerComponent('Example', () => Example);