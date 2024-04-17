import React from 'react';
import { useColorScheme } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../commons/theme';
import ActivitiesScreen from '../screens/ActivitiesScreen';

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
    <Navigator initialRouteName="Histórico" screenOptions={screenOptions}>
      <Screen name="Histórico" component={ActivitiesScreen} />
    </Navigator>
  );
}
