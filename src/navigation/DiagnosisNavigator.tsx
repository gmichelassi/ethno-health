import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DiagnosisScreen from '../screens/DiagnosisScreen';
import { useColorScheme } from 'react-native';
import { theme } from '../commons/theme';

const Stack = createStackNavigator();

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
    <Navigator initialRouteName="Resultados" screenOptions={screenOptions}>
      <Screen name="Camera" component={DiagnosisScreen} />
      <Screen name="Resultados" component={DiagnosisScreen} />
    </Navigator>
  );
}
