import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


class Settings extends Component {
    render() {
        const { navigation } = this.props;

        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Settings Page</Text>
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        backgroundColor: "#DDDDDD",
                        padding: 10
                    }}
                    onPress={() => navigation.push('SettingDetails')}
                >
                    <Text>Details Page</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Settings;