import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DiagnosisScreen from '../screens/DiagnosisScreen';

const Stack = createStackNavigator();

const { Navigator, Screen } = Stack;

export default function DiagnosisNavigator() {
  return (
    <Navigator>
      <Screen name="Camera" component={DiagnosisScreen} />
      <Screen name="Resultados" component={DiagnosisScreen} />
    </Navigator>
  );
}
