import { ProbabilityIndicatorProps } from '../components/ProbabilityIndicator';

const uri =
  // 'https://media.istockphoto.com/id/1081381240/photo/young-smiling-african-american-man-over-white-background.jpg?s=612x612&w=0&k=20&c=T2Mq5yJ93H5jvbI87tC5RjXuGcmDdTH4GzcyOL_WRl4=';
  'https://redskyportraits.com/wp-content/uploads/2021/12/Head-shot-photo1.jpg';
const diagnosis: ProbabilityIndicatorProps[] = [
  {
    probability: 0.85,
    ethnicity: 'Black',
    description:
      'Estudos mostram que asma é aproximadamente 42% mais provável em negros do que em outras etnias. Pacientes adultos com asma podem possuir (5%-7% de incidência) híper-sensibilidade à ASPIRINA, portanto deve ser evitada.',
  },
  {
    probability: 0.1,
    ethnicity: 'Middle Eastern',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices mollis justo sed lobortis. Aliquam id quam eget eros rhoncus consequat pellentesque ut ipsum.',
  },
  {
    probability: 0.05,
    ethnicity: 'Latino Hispanic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices mollis justo sed lobortis. Aliquam id quam eget eros rhoncus consequat pellentesque ut ipsum.',
  },
];

export { diagnosis, uri };
