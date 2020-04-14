import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar, Avatar} from 'react-native-paper';
import FeedInnerPage from '../../container/NewsFeedContainer/FeedInnerPage';
import SettingsInnerPage from '../../container/SettingsContainer/SettingsInnerPage';
import HelpInnerPage from '../../container/HelpContainer/HelpInnerPage';
import CarsInnerPage from '../../container/ForSaleContainer/CarsContainer/CarsInnerPage';
import HouseInnerPage from '../../container/ForSaleContainer/HouseContainer/HouseInnerPage';
import {TabNavigation} from '../../navigations';

const Stack = createStackNavigator();

const Header = ({scene, previous, navigation}) => {
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header theme={{colors: {primary: '#66ccff'}}}>
      {previous ? (
        <TouchableOpacity
          style={{
            alignItems: 'center',
            padding: 10,
          }}
          onPress={() => navigation.goBack()}>
          <Image
            style={{width: 40, height: 40}}
            source={{
              uri:
                'https://cdn.pixabay.com/photo/2012/04/02/16/03/back-24838_1280.png',
            }}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Avatar.Image
            size={40}
            source={{
              uri:
                'https://assets.change.org/photos/1/sv/au/mfSvAUfRHJQdikm-800x450-noPad.jpg?1553481060',
            }}
          />
        </TouchableOpacity>
      )}
      <Appbar.Content title={'React Navigation v5'} />
    </Appbar.Header>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
    }}>
        <Stack.Screen
            name="Main"
            component={TabNavigation}
            options={{headerTitle: 'Twitter'}}
        />
        <Stack.Screen
            name="FeedDetails"
            component={FeedInnerPage}
            options={{headerTitle: 'Tweet'}}
        />
        <Stack.Screen
            name="SettingDetails"
            component={SettingsInnerPage}
            options={{headerTitle: 'Setting'}}
        />
        <Stack.Screen
            name="HelpDetails"
            component={HelpInnerPage}
            options={{headerTitle: 'Help'}}
        />
        <Stack.Screen
            name="CarsDetails"
            component={CarsInnerPage}
            options={{headerTitle: 'Cars'}}
        />
        <Stack.Screen
            name="HouseDetails"
            component={HouseInnerPage}
            options={{headerTitle: 'House'}}
        />
    </Stack.Navigator>
  );
};

export {MainStack};
