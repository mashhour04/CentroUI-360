import React from 'react';
import {

    asset,
    Pano,
    Text,
    View,
    Plane,


} from 'react-360';


export default class CnCardFooter extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {

        //TODO make direction settable

        return (

            <View style={{ display:  'flex', flexDirection: 'row', flex: 0 , minHeight: 0.1, padding: 0.02 , backgroundColor: "#f7f7f9"}}>
                    {this.props.children}
            </View>
        );
    }
};

