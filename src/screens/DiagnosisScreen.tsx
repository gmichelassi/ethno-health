import React from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';

import DiagnosisCard from '../components/DiagnosisCard';
import { theme } from '../commons/theme';
import { DiagnosisScreenProps } from '../navigation/types';
import getMockedData from '../utils/get-mocked-data';

export default function DiagnosisScreen({ route }: DiagnosisScreenProps) {
  const colorScheme = useColorScheme() || 'light';
  const backgroundColor = theme?.[colorScheme]?.colors?.surfaceVariant;

  const { photo } = route?.params || {};
  const uri = photo?.path;

  const diagnosis = getMockedData();

  return (
    <View style={{ backgroundColor, ...styles.container }}>
      <DiagnosisCard diagnosis={diagnosis} imageUri={uri} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 16,
  },
});
