import { ProbabilityIndicatorProps } from '../components/ProbabilityIndicator';

const uri =
  'https://redskyportraits.com/wp-content/uploads/2021/12/Head-shot-photo1.jpg';
const diagnosis: ProbabilityIndicatorProps[] = [
  {
    probability: 0.65,
    ethnicity: 'White',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices mollis justo sed lobortis. Aliquam id quam eget eros rhoncus consequat pellentesque ut ipsum.',
  },
  {
    probability: 0.2,
    ethnicity: 'Southeast Asian',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices mollis justo sed lobortis. Aliquam id quam eget eros rhoncus consequat pellentesque ut ipsum.',
  },
  {
    probability: 0.15,
    ethnicity: 'Latino Hispanic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices mollis justo sed lobortis. Aliquam id quam eget eros rhoncus consequat pellentesque ut ipsum.',
  },
];

export { diagnosis, uri };
