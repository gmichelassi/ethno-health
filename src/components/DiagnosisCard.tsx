import React from 'react';
import { StyleSheet, Image, ScrollView, useColorScheme } from 'react-native';
import { Card } from 'react-native-paper';

import { theme } from '../commons/theme';
import ProbabilityIndicator, {
  ProbabilityIndicatorProps,
} from '../components/ProbabilityIndicator';
import {
  diagnosis as mockedDiagnosis,
  uri as mockedUri,
} from '../utils/dummy-data';

export type DiagnosisCardProps = {
  diagnosis?: ProbabilityIndicatorProps[];
  imageUri?: string;
};

export default function DiagnosisScreen({
  diagnosis = mockedDiagnosis,
  imageUri = mockedUri,
}: DiagnosisCardProps) {
  const colorScheme = useColorScheme() || 'light';

  const borderColor = theme?.[colorScheme]?.colors?.primary;
  const borderRadius = theme?.[colorScheme]?.roundness;

  return (
    <Card style={styles.card}>
      <Image
        style={{ ...styles.image, borderRadius }}
        source={{ uri: imageUri }}
      />
      <ScrollView
        style={{ ...styles.diagnosisContainer, borderColor, borderRadius }}
        contentContainerStyle={styles.diagnosisContent}
      >
        {diagnosis.map((data, index) => (
          <ProbabilityIndicator key={index} {...data} />
        ))}
      </ScrollView>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    height: '100%',
  },
  image: {
    height: '60%',
  },
  diagnosisContainer: {
    height: '40%',
    borderWidth: 1,
    marginTop: 16,
  },
  diagnosisContent: {
    padding: 10,
  },
});
