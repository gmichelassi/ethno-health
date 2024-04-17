import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

import DiagnosisNavigator from './DiagnosisNavigator';
import ActivitiesNavigator from './ActivitiesNavigator';

const Tab = createMaterialBottomTabNavigator();
const { Navigator, Screen } = Tab;

export default function BottomTabNavigator() {
  return (
    <Navigator initialRouteName="diagnosis" backBehavior="initialRoute">
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
