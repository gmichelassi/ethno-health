import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { useColorScheme } from 'react-native';

import { theme } from '../commons/theme';
import ActivitiesNavigator from './ActivitiesNavigator';
import DiagnosisNavigator from './DiagnosisNavigator';

const Tab = createMaterialBottomTabNavigator();
const { Navigator, Screen } = Tab;

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme() || 'light';
  const activeColor = theme?.[colorScheme]?.colors?.primary;

  const barColor = theme?.[colorScheme]?.colors?.background;

  return (
    <Navigator
      initialRouteName="diagnosis"
      backBehavior="initialRoute"
      activeColor={activeColor}
      barStyle={{ backgroundColor: barColor }}
      theme={theme[colorScheme]}
    >
      <Screen
        component={DiagnosisNavigator}
        name="Diagnóstico"
        options={{ tabBarIcon: 'camera' }}
      />
      <Screen
        name="Atividades"
        component={ActivitiesNavigator}
        options={{ tabBarIcon: 'view-list' }}
      />
    </Navigator>
  );
}
