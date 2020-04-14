import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SubTabNavigation } from '../../navigations';

class ForSale extends Component {
    render() {
        const { navigation } = this.props;

        return <SubTabNavigation />
    }
}

export default ForSale;