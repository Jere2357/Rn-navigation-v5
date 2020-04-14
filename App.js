/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import MainContainer from './src/container/MainContainer';

class App extends Component {
  render(){
    return (
          <PaperProvider>
              <NavigationContainer>
                <MainContainer />
              </NavigationContainer>
          </PaperProvider>
    );
  }
};

export default App;
