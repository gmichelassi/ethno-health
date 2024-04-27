import React, { useEffect, useState } from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import { IconButton, ProgressBar, Text } from 'react-native-paper';

import { Ethnicity } from '../commons/types';
import { theme } from '../commons/theme';
import ethnicityLabelsTranslator from '../commons/ethnicityLabelsTranslator';

export type ProbabilityIndicatorProps = {
  probability: number;
  ethnicity: Ethnicity;
  description: string;
};

export default function ProbabilityIndicator({
  description,
  ethnicity,
  probability,
}: ProbabilityIndicatorProps) {
  const colorScheme = useColorScheme() || 'light';
  const [menuOpen, setMenuOpen] = useState(false);
  const [icon, setIcon] = useState('menu-right');

  const borderColor = theme?.[colorScheme]?.colors?.primary;
  const borderRadius = theme?.[colorScheme]?.roundness;

  useEffect(() => {
    if (menuOpen) {
      setIcon('menu-down');
      return;
    }

    setIcon('menu-right');
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const probabilityPercentage = `${probability * 100}%`;
  const title = `${ethnicityLabelsTranslator(
    ethnicity,
  )} (${probabilityPercentage})`;

  return (
    <>
      <View style={styles.resultContainer}>
        <View style={styles.probabilitySection}>
          <Text style={styles.ethniticyText}>{title}</Text>
          <ProgressBar progress={probability} />
        </View>
        <IconButton icon={icon} onPress={toggleMenu} />
      </View>
      {menuOpen && (
        <View style={{ ...styles.infoContainer, borderColor, borderRadius }}>
          <Text style={styles.ethnicityInfo}>{description}</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  resultContainer: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    width: '100%',
  },
  probabilitySection: {
    width: '85%',
  },
  ethniticyText: {
    fontSize: 16,
    marginBottom: 12,
  },
  infoContainer: {
    display: 'flex',
    padding: 8,
    flex: 1,
    borderWidth: 1,
    borderStyle: 'dotted',
  },
  ethnicityInfo: {
    fontSize: 12,
  },
});
