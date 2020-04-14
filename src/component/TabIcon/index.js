import React from 'react';
import { View, Image } from 'react-native';

const TabIcon = ({ link }) => {
    return(
        <View style={{paddingTop: 20}}>
            <Image
                style={{
                    width: 20,
                    height: 20,
                }}
                source={{
                uri: link,
                }}
            />
        </View>
    );
}

export {TabIcon};