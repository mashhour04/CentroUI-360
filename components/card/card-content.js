import React from 'react';
import {
    asset,
    Pano,
    Text,
    View,
    Plane,


} from 'react-360';


export default class CnCardContent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (

            //Think about resizing images
            <View style={{ display:  'flex', flex: 1}}>
                {this.props.children}
            </View>
        );
    }
};

