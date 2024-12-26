import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackParamList } from './types';
import { HomeScreen } from '../screens/HomeScreen';
import { PredictorScreen } from '../screens/PredictorScreen';
import { EditorScreen } from '../screens/EditorScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

export function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={HomeScreen} options={{ title: 'Horse Racing Predictor' }} />
        <Stack.Screen name="predictor" component={PredictorScreen} options={{ title: 'Race Predictor' }} />
        <Stack.Screen name="editor" component={EditorScreen} options={{ title: 'Code Editor' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}