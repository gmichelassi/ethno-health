import React, { useRef } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
import { useIsFocused } from '@react-navigation/native';

import { CameraScreenProps } from '../navigation/types';
import ErrorScreen from '../commons/ErrorScreen';
import PermissionsScreen from '../commons/PermissionsScreen';
import { IconButton } from 'react-native-paper';
import { theme } from '../commons/theme';

export default function CameraScreen({ navigation }: CameraScreenProps) {
  const cameraRef = useRef<Camera>(null);

  const colorScheme = useColorScheme() || 'light';
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

  if (!hasPermission) return <PermissionsScreen goBack={goBack} />;

  if (!device) return <ErrorScreen />;

  const onPress = async () => {
    if (!cameraRef.current) return;

    const photo = await cameraRef.current.takePhoto();

    console.log('photo on CameraScreen:', photo);

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
});
