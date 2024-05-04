import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from 'react-native';

import { DiagnosisNavigatorProps } from './types';
import { theme } from '../commons/theme';
import CameraScreen from '../screens/CameraScreen';
import DiagnosisScreen from '../screens/DiagnosisScreen';

const Stack = createStackNavigator<DiagnosisNavigatorProps>();
const { Navigator, Screen } = Stack;

export default function DiagnosisNavigator() {
  const colorScheme = useColorScheme() || 'light';
  const tintColor = theme?.[colorScheme]?.colors?.primary;
  const headerColor = theme?.[colorScheme]?.colors?.background;

  const screenOptions = {
    headerTintColor: tintColor,
    headerStyle: { backgroundColor: headerColor },
  };

  return (
    <Navigator initialRouteName="Camera" screenOptions={screenOptions}>
      <Screen name="Camera" component={CameraScreen} />
      <Screen name="Resultados" component={DiagnosisScreen} />
    </Navigator>
  );
}
