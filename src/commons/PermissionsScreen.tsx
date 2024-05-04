import React from 'react';
import { Linking } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { StyleSheet, View, useColorScheme } from 'react-native';
import { useCameraPermission } from 'react-native-vision-camera';

import { theme } from './theme';

export type PermissionsScreenProps = {
  goBack: () => void;
};

const { openSettings } = Linking;

export default function PermissionsScreen({ goBack }: PermissionsScreenProps) {
  const { hasPermission } = useCameraPermission();
  const colorScheme = useColorScheme() || 'light';
  const backgroundColor = theme?.[colorScheme]?.colors?.surfaceVariant;

  if (hasPermission) goBack();

  return (
    <View style={{ backgroundColor, ...styles.container }}>
      <Text style={styles.text}>
        EhtnoHealth precisa de acesso a câmera para funcionar.
      </Text>
      <Button onPress={openSettings} style={styles.button} mode="text">
        Permitir acesso à câmera.
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    marginTop: 16,
  },
});
