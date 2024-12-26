import React from 'react';
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from 'react-nativescript-navigation';
import { MainStackParamList } from '../navigation/types';
import { FlexboxLayout, Button } from '@nativescript/core';

type HomeScreenProps = {
  route: RouteProp<MainStackParamList, 'home'>;
  navigation: FrameNavigationProp<MainStackParamList, 'home'>;
};

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <FlexboxLayout flexDirection="column" justifyContent="center" alignItems="center" class="p-20">
      <Button 
        text="Race Predictor" 
        class="btn btn-primary m-b-20" 
        onTap={() => navigation.navigate('predictor')} 
      />
      <Button 
        text="Code Editor" 
        class="btn btn-secondary" 
        onTap={() => navigation.navigate('editor')} 
      />
    </FlexboxLayout>
  );
}