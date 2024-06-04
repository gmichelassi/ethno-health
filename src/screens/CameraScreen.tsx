import React, { useRef, useState } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { ActivityIndicator, IconButton } from 'react-native-paper';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
import { useIsFocused } from '@react-navigation/native';

import { CameraScreenProps } from '../navigation/types';
import { theme } from '../commons/theme';
import ErrorScreen from '../commons/ErrorScreen';
import PermissionsScreen from '../commons/PermissionsScreen';

export default function CameraScreen({ navigation }: CameraScreenProps) {
  const cameraRef = useRef<Camera>(null);

  const [loading, setLoading] = useState(false);

  const colorScheme = useColorScheme() || 'light';
  const loadingBackgroundColor = theme?.[colorScheme]?.colors?.surfaceVariant;
  const backgroundColor = theme?.[colorScheme]?.colors?.surface;

  const { hasPermission } = useCameraPermission();
  const isFocused = useIsFocused();
  const device = useCameraDevice('back');
  const format = useCameraFormat(device, [
    { photoResolution: 'max' },
    { photoAspectRatio: 16 / 9 },
    { fps: 60 },
  ]);

  const goBack = navigation.goBack;

  if (loading)
    return (
      <ActivityIndicator
        style={{ ...styles.loading, backgroundColor: loadingBackgroundColor }}
        animating
      />
    );

  if (!hasPermission) return <PermissionsScreen goBack={goBack} />;

  if (!device) return <ErrorScreen />;

  const onPress = async () => {
    if (!cameraRef.current) return;

    setLoading(true);

    const photo = await cameraRef.current.takePhoto();

    setLoading(false);

    navigation.navigate('Resultados', { photo });
  };

  return (
    <>
      <Camera
        device={device}
        format={format}
        isActive={isFocused}
        photo={true}
        photoHdr={true}
        photoQualityBalance="quality"
        ref={cameraRef}
        style={styles.camera}
      />
      <IconButton
        icon="camera"
        onPress={onPress}
        size={24}
        style={{ ...styles.button, backgroundColor }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  camera: {
    display: 'flex',
    flex: 1,
  },
  button: {
    alignSelf: 'center',
    bottom: 32,
    position: 'absolute',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
