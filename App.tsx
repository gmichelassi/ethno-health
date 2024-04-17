import React, { JSX } from 'react';
import 'react-native-gesture-handler';

import ApplicationProvider from './src/commons/ApplicationProvider';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

function App(): JSX.Element {
  return (
    <ApplicationProvider>
      <BottomTabNavigator />
    </ApplicationProvider>
  );
}

export default App;
