import React, { PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import { theme } from './theme';

// TODO: Configurar StatusBar
export default function ApplicationProvider({ children }: PropsWithChildren) {
  const colorScheme = useColorScheme() || 'light';

  return (
    <NavigationContainer>
      <PaperProvider theme={theme[colorScheme]}>{children}</PaperProvider>
    </NavigationContainer>
  );
}
