import React, { Component } from 'react';
import { View, Text } from 'react-native';


class CarsInnerPage extends Component {
    render() {
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Cars inner page</Text>
            </View>
        );
    }
}

export default CarsInnerPage;