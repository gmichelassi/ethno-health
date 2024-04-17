import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ActivitiesScreen from '../screens/ActivitiesScreen';

const Stack = createStackNavigator();

const { Navigator, Screen } = Stack;

export default function DiagnosisNavigator() {
  return (
    <Navigator>
      <Screen name="Histórico" component={ActivitiesScreen} />
    </Navigator>
  );
}
