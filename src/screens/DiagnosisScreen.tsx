import React from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';

import DiagnosisCard from '../components/DiagnosisCard';
import { theme } from '../commons/theme';
import { DiagnosisScreenProps } from '../navigation/types';

export default function DiagnosisScreen({
  route: {
    params: { photo },
  },
}: DiagnosisScreenProps) {
  const colorScheme = useColorScheme() || 'light';
  const backgroundColor = theme?.[colorScheme]?.colors?.surfaceVariant;

  const uri = `${photo.path}`;

  return (
    <View style={{ backgroundColor, ...styles.container }}>
      <DiagnosisCard imageUri={uri} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 16,
  },
});
