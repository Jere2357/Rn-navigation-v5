import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../../container/ContentContainer';
import { MainStack } from '../../navigations';

const Drawer = createDrawerNavigator();

 const RootNavigator = () => {
    return (
      <Drawer.Navigator drawerContent={() => <DrawerContent />}>
        <Drawer.Screen name="Home" component={MainStack} />
      </Drawer.Navigator>
    );
  };

  export {RootNavigator};

 
  