import React from 'react';
import { Text } from 'react-native-paper';
import { StyleSheet, View, useColorScheme } from 'react-native';

import { theme } from './theme';

export default function ErrorScreen() {
  const colorScheme = useColorScheme() || 'light';
  const backgroundColor = theme?.[colorScheme]?.colors?.surfaceVariant;

  return (
    <View style={{ backgroundColor, ...styles.container }}>
      <Text style={styles.text}>
        Aconteceu um erro. Tente novamente mais tarde.
      </Text>
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
    textAlign: 'center',
  },
});
