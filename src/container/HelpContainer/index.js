import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


class Help extends Component {
    render() {
        const { navigation } = this.props;

        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Help Page</Text>
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        backgroundColor: "#DDDDDD",
                        padding: 10
                    }}
                    onPress={() => navigation.push('HelpDetails')}
                >
                    <Text>Details Page</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Help;