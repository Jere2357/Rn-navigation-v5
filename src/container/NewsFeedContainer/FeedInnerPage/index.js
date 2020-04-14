import React, { Component } from 'react';
import { View, Text } from 'react-native';


class FeedInnerPage extends Component {
    render() {
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Feed inner page</Text>
            </View>
        );
    }
}

export default FeedInnerPage;