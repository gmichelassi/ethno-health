import { Ethnicity } from './types';

export default function ethnicityLabelsTranslator(ethnicity: Ethnicity) {
  switch (ethnicity) {
    case 'Black':
      return 'Negro';
    case 'East Asian':
      return 'Leste Asiático';
    case 'Indian':
      return 'Indiano';
    case 'Latino Hispanic':
      return 'Latino';
    case 'Middle Eastern':
      return 'Oriente médio';
    case 'Southeast Asian':
      return 'Sudeste asiático';
    case 'White':
      return 'Caucasiano';
    default:
      return '';
  }
}
