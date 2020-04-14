import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Cars from '../../container/ForSaleContainer/CarsContainer';
import House from '../../container/ForSaleContainer/HouseContainer';

const Tab = createMaterialTopTabNavigator();

const SubTabNavigation = () => {
    return(
        <Tab.Navigator
            initialRouteName={'Cars'}
            swipeEnabled={false}
        >
            <Tab.Screen 
                name='Cars'
                component={Cars}
                options={{
                    tabBarIcon: 'home-acount'
                }}
            />
            <Tab.Screen 
                name='House'
                component={House}
                options={{
                    tabBarIcon: 'setting-icon'
                }}
            />
        </Tab.Navigator>
    );
}

export {SubTabNavigation};