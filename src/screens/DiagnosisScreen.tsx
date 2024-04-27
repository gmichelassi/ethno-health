import React from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';

import DiagnosisCard from '../components/DiagnosisCard';
import { theme } from '../commons/theme';

export default function DiagnosisScreen() {
  const colorScheme = useColorScheme() || 'light';
  const backgroundColor = theme?.[colorScheme]?.colors?.surfaceVariant;

  return (
    <View style={{ backgroundColor, ...styles.container }}>
      <DiagnosisCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 16,
  },
});
