import '../gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './presentation/navigator/Navigator.tsx';

export const ComponentsApp = () => {
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  );
};
