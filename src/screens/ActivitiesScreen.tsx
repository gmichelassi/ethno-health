import React from 'react';
import { Linking, Image, View, StyleSheet, useColorScheme } from 'react-native';
import { Card, Text } from 'react-native-paper';

import { theme } from '../commons/theme';

export default function ActivitiesScreen() {
  const colorScheme = useColorScheme() || 'light';
  const primaryColor = theme?.[colorScheme]?.colors?.primary;
  const borderRadius = theme?.[colorScheme]?.roundness;
  const backgroundColor = theme?.[colorScheme]?.colors?.surfaceVariant;

  return (
    <View style={{ backgroundColor, ...styles.container }}>
      <Card style={styles.card}>
        <Image
          style={{ ...styles.image, borderRadius }}
          source={require('../assets/ethno_health_logo.png')}
        />
        <Text style={styles.text}>
          O histórico de pacientes e armazenamento permanente de fotos e
          diagnóstico é uma funcionalidade exclusiva para usuários premium.
        </Text>
        <Text
          style={{ ...styles.linkText, color: primaryColor }}
          onPress={() =>
            Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
          }
        >
          Entre em contato com o nosso suporte ao cliente para mais informações
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 16,
    height: '100%',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 32,
  },
  linkText: {
    marginTop: 32,
    textAlign: 'center',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  card: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  image: {
    height: '60%',
    width: 'auto',
  },
});
