import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewsFeed from '../../container/NewsFeedContainer';
import Settings from '../../container/SettingsContainer';
import Help from '../../container/HelpContainer';
import ForSale from '../../container/ForSaleContainer';
import { TabIcon } from '../../component';

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
    return(
        <Tab.Navigator
            initialRouteName={'Feed'}
        >
            <Tab.Screen 
                name='Feed'
                component={NewsFeed}
                options={{
                    tabBarLabel: 'News Feed',
                    tabBarIcon:() => <TabIcon link={'https://cdn4.iconfinder.com/data/icons/social-messaging-productivity-black-4/127000/24-512.pngs'}/>
                }}
            />
            <Tab.Screen 
                name='Settings'
                component={Settings}
                options={{
                    tabBarIcon:() => <TabIcon link={'https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_settings_48px-512.png'}/>
                }}
            />
            <Tab.Screen 
                name='Help'
                component={Help}
                options={{
                    tabBarIcon:() => <TabIcon link={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/OOjs_UI_icon_help-ltr.svg/1200px-OOjs_UI_icon_help-ltr.svg.png'}/>
                }}
            />
            <Tab.Screen 
                name='Sale'
                component={ForSale}
                options={{
                    tabBarIcon:() => <TabIcon link={'https://icons-for-free.com/iconfiles/png/512/finance+money+plate+sale+icon-1320086610241557436.png'}/>
                }}
            />
        </Tab.Navigator>
    );
}

export {TabNavigation};