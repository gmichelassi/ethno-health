import { StackScreenProps } from '@react-navigation/stack';
import { PhotoFile } from 'react-native-vision-camera';

export type BottomTabNavigatorProps = {
  Diagnóstico: undefined;
  Atividades: undefined;
};

export type DiagnosisNavigatorProps = {
  Camera: undefined;
  Resultados: {
    photo: PhotoFile;
  };
};

export type CameraScreenProps = StackScreenProps<
  DiagnosisNavigatorProps,
  'Camera'
>;

export type DiagnosisScreenProps = StackScreenProps<
  DiagnosisNavigatorProps,
  'Resultados'
>;
