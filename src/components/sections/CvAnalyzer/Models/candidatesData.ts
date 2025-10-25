import { CandidateProfile, JobContext } from './CandidateProfile';
import type { CandidateDescriptor } from './CandidateProfile';

export const mockJobPosition: JobContext = new JobContext(
  'Científico de Datos Junior',
  ['Python', 'Machine Learning', 'SQL', 'React'],
  ['Data Analysis', 'Predictive Modeling', 'NLP'],
  ['FastAPI', 'Big Data', 'Computer Vision']
);

const candidatesDescriptors: CandidateDescriptor[] = [
  {
    id: '1',
    name: 'María González',
    currentRole: 'Data Scientist',
    location: 'Santo Domingo',
    yearsExperience: 5,
    coreSkills: [
      { name: 'Python', level: 'experto' },
      { name: 'Machine Learning', level: 'experto' },
      { name: 'SQL', level: 'avanzado' },
      { name: 'React', level: 'intermedio' },
    ],
    achievements: [
      'Implementó modelo de predicción que aumentó ventas en 25%',
      'Lideró equipo de 3 científicos de datos en proyecto NLP',
      'Certificación en AWS Machine Learning Specialty',
    ],
    focusAreas: ['NLP', 'Predictive Modeling', 'Data Analysis'],
  },
  {
    id: '2',
    name: 'Carlos Pérez',
    currentRole: 'Analista de Datos',
    location: 'Santiago',
    yearsExperience: 3,
    coreSkills: [
      { name: 'Python', level: 'avanzado' },
      { name: 'SQL', level: 'experto' },
      { name: 'Data Visualization', level: 'avanzado' },
      { name: 'Machine Learning', level: 'intermedio' },
    ],
    achievements: [
      'Desarrolló dashboards interactivos en Power BI para C-level',
      'Automatizó reportes mensuales reduciendo tiempo en 80%',
      'Ganador hackathon de análisis de datos 2023',
    ],
    focusAreas: ['Data Visualization', 'Business Intelligence', 'SQL'],
  },
  {
    id: '3',
    name: 'Ana Martínez',
    currentRole: 'ML Engineer',
    location: 'Santo Domingo',
    yearsExperience: 4,
    coreSkills: [
      { name: 'Python', level: 'experto' },
      { name: 'Machine Learning', level: 'experto' },
      { name: 'FastAPI', level: 'avanzado' },
      { name: 'Computer Vision', level: 'avanzado' },
    ],
    achievements: [
      'Diseñó sistema de detección de fraudes con 95% precisión',
      'Publicó 2 papers en conferencias internacionales de ML',
      'Deploy de 5 modelos en producción con FastAPI',
    ],
    focusAreas: ['Computer Vision', 'Deep Learning', 'MLOps'],
  },
  {
    id: '4',
    name: 'Juan Rodríguez',
    currentRole: 'Desarrollador Full Stack',
    location: 'La Vega',
    yearsExperience: 2,
    coreSkills: [
      { name: 'React', level: 'experto' },
      { name: 'Python', level: 'intermedio' },
      { name: 'SQL', level: 'avanzado' },
      { name: 'JavaScript', level: 'experto' },
    ],
    achievements: [
      'Desarrolló plataforma de gestión de datos con React y Django',
      'Mejoró performance de aplicación en 40%',
      'Contribuidor activo en proyectos open source',
    ],
    focusAreas: ['Web Development', 'Frontend', 'API Integration'],
  },
  {
    id: '5',
    name: 'Laura Fernández',
    currentRole: 'Data Engineer',
    location: 'Santo Domingo',
    yearsExperience: 6,
    coreSkills: [
      { name: 'Python', level: 'experto' },
      { name: 'SQL', level: 'experto' },
      { name: 'Big Data', level: 'avanzado' },
      { name: 'Machine Learning', level: 'avanzado' },
    ],
    achievements: [
      'Diseñó pipeline de datos procesando 10M registros/día',
      'Implementó data lake en AWS con arquitectura escalable',
      'Redujo costos de infraestructura en 35%',
    ],
    focusAreas: ['Data Engineering', 'ETL', 'Cloud Architecture'],
  },
];

export const mockCandidates: CandidateProfile[] = candidatesDescriptors.map((descriptor) =>
  CandidateProfile.fromDescriptor(descriptor)
);

export const getRankedCandidates = (): Array<{ profile: CandidateProfile; score: number }> => {
  return mockCandidates
    .map((profile) => ({
      profile,
      score: profile.calculateMatch(mockJobPosition).matchScore,
    }))
    .sort((a, b) => b.score - a.score);
};
