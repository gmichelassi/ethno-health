import React, { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { useColorScheme } from 'react-native';
import BootSplash from 'react-native-bootsplash';

import { theme } from './theme';
import { useCameraPermission } from 'react-native-vision-camera';

// TODO: Configurar StatusBar
export default function ApplicationProvider({ children }: PropsWithChildren) {
  const colorScheme = useColorScheme() || 'light';
  const { hasPermission, requestPermission } = useCameraPermission();

  if (!hasPermission) requestPermission();

  return (
    <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
      <PaperProvider theme={theme[colorScheme]}>{children}</PaperProvider>
    </NavigationContainer>
  );
}
