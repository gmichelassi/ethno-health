import { Ethnicity } from '../commons/types';
import { ProbabilityIndicatorProps } from '../components/ProbabilityIndicator';

const mockedDiagnosisInfo: Record<Ethnicity, string> = {
  Black:
    'Estudos mostram que asma é aproximadamente 42% mais provável em negros do que em outras etnias. Pacientes adultos com asma podem possuir (5%-7% de incidência) híper-sensibilidade à ASPIRINA, portanto deve ser evitada.',
  'East Asian':
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices mollis justo sed lobortis. Aliquam id quam eget eros rhoncus consequat pellentesque ut ipsum.',
  Indian:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices mollis justo sed lobortis. Aliquam id quam eget eros rhoncus consequat pellentesque ut ipsum.',
  'Latino Hispanic':
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices mollis justo sed lobortis. Aliquam id quam eget eros rhoncus consequat pellentesque ut ipsum.',
  'Middle Eastern':
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices mollis justo sed lobortis. Aliquam id quam eget eros rhoncus consequat pellentesque ut ipsum.',
  'Southeast Asian':
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices mollis justo sed lobortis. Aliquam id quam eget eros rhoncus consequat pellentesque ut ipsum.',
  White:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices mollis justo sed lobortis. Aliquam id quam eget eros rhoncus consequat pellentesque ut ipsum.',
};

function generateProbabilities() {
  const intialProbabilities = Array.from({ length: 7 }, () => Math.random());
  let sum = intialProbabilities.reduce((a, b) => a + b, 0);

  if (sum > 1)
    for (let i = 0; i < 7; i++)
      intialProbabilities[i] = intialProbabilities[i] / sum;

  sum = intialProbabilities.reduce((a, b) => a + b, 0);

  while (sum > 1) {
    let reduction = (sum - 1) / 7;

    for (let i = 0; i < 7; i++) intialProbabilities[i] -= reduction;

    sum = intialProbabilities.reduce((a, b) => a + b, 0);
  }

  return intialProbabilities;
}

function generateEthnicitiesIndex() {
  let ethniticies: number[] = [];

  while (ethniticies.length < 3) {
    const randomIndex = Math.floor(Math.random() * 7);

    if (!ethniticies.includes(randomIndex)) ethniticies.push(randomIndex);
  }

  return ethniticies;
}

export default function getMockedData() {
  const probabilities = generateProbabilities().sort((a, b) => b - a);
  const ethnicityListIndexes = generateEthnicitiesIndex();

  const diagnosis: ProbabilityIndicatorProps[] = ethnicityListIndexes.map(
    (index, i) => {
      const name = Object.keys(mockedDiagnosisInfo)[index] as Ethnicity;
      const description = mockedDiagnosisInfo[name];
      return {
        probability: probabilities[i],
        ethnicity: name,
        description,
      };
    },
  );

  return diagnosis;
}
