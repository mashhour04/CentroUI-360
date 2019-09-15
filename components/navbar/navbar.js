import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Plane,


} from 'react-360';


export default class CnNavbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        // var children = this.props.children.map(function(item, i) {
        //     return React.addons.cloneWithProps(item, {
        //         isSelected: isSelected,
        //         selectItem: this.selectItem,
        //         key: item.props.key
        //     });
        // }, this);

        return (
            //Note changing row to column

            <View style={{
                    display:  'flex',
                    flex: 0,
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    height: 0.5,
                    backgroundColor: this.props.backgroundColor || "#0275d8"
                  }}>

                {this.props.children}


            </View>



        );
    }
};


