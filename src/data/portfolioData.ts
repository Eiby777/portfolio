import type { PersonalInfo, Experience, Education, Skill, Project } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Abisay Medina Rosario',
  title: 'Científico de Datos Junior',
  email: 'abisaymedinarosario@gmail.com',
  phone: '829-723-7899',
  location: 'Santo Domingo, República Dominicana',
  linkedin: '#',
  github: '#'
};

export const experiences: Experience[] = [
  {
    id: '1',
    position: 'Desarrollador de Software Freelancer',
    company: 'Banco BHD',
    location: 'Santo Domingo',
    startDate: 'Enero 2023',
    endDate: 'Abril 2023',
    achievements: [
      'Creé e implementé nuevas funcionalidades para mejorar las soluciones de software de la empresa y mejorar el rendimiento general.',
      'Establecí un conjunto de mejores prácticas y procedimientos documentados para las pruebas de software, lo que resultó en una mayor precisión y confiabilidad de los productos de software.'
    ]
  },
  {
    id: '2',
    position: 'Pasante de Desarrollo de Software',
    company: 'Unipago',
    location: 'Santo Domingo',
    startDate: 'Julio 2024',
    endDate: 'Septiembre 2024',
    achievements: [
      'Trabajé con desarrolladores para identificar y eliminar errores de software.',
      'Aprendí mejoras en los procesos de ingeniería de software y las mejores prácticas.',
      'Analicé el código fuente para identificar problemas de funcionalidad.'
    ]
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Master en Data Science y Big Data',
    institution: 'IEBS School',
    location: 'Online',
    startDate: 'Octubre 2023',
    endDate: 'Octubre 2024',
    details: [
      'Experto en análisis de datos, preprocesamiento e ingeniería de características.',
      'Experto en modelos de aprendizaje automático (regresión, clasificación, agrupamiento) y marcos de big data como Hadoop y Spark.',
      'Experiencia en herramientas de visualización de datos (Matplotlib y Seaborn) y aprendizaje profundo.'
    ]
  },
  {
    id: '2',
    degree: 'Técnico en Desarrollo de Software',
    institution: 'Instituto Tecnológico de Las Américas (ITLA)',
    location: 'Santo Domingo',
    startDate: 'Septiembre 2020',
    endDate: 'Septiembre 2024',
    details: [
      'Graduado con Altos Honores.',
      'Competente en Python y C#.',
      'Experto en el Ciclo de Vida del Desarrollo de Software, Programación Orientada a Objetos (OOP) y diseño de software escalable.',
      'Experiencia en desarrollo web (React) y gestión de bases de datos con SQL.'
    ]
  }
];

export const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'Lenguajes' },
  { name: 'SQL', level: 85, category: 'Lenguajes' },
  { name: 'C#', level: 75, category: 'Lenguajes' },
  { name: 'React', level: 80, category: 'Frontend' },
  { name: 'HTML', level: 85, category: 'Frontend' },
  { name: 'CSS', level: 85, category: 'Frontend' },
  { name: 'Windows Forms', level: 70, category: 'Frontend' },
  { name: 'Machine Learning', level: 85, category: 'Data Science' },
  { name: 'Data Analysis', level: 88, category: 'Data Science' },
  { name: 'Data Visualization', level: 82, category: 'Data Science' },
  { name: 'Predictive Modeling', level: 80, category: 'Data Science' },
  { name: 'Database Development', level: 78, category: 'Backend' },
  { name: 'FastAPI', level: 85, category: 'Backend' },
  { name: 'Pydantic', level: 80, category: 'Backend' },
  { name: 'Server Administration', level: 75, category: 'Backend' }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Analizador de Hilos de Email',
    description: 'Convierte cadenas largas de correos en resúmenes ejecutivos. Extrae decisiones, tareas pendientes y responsables automáticamente.',
    problem: 'Las empresas pierden tiempo valioso leyendo largas cadenas de correos para encontrar información importante.',
    solution: 'Sistema automatizado que procesa hilos de correos y extrae información clave con IA.',
    techStack: ['Python', 'NLP', 'Machine Learning', 'React'],
    features: ['Extracción automática de decisiones', 'Identificación de responsables', 'Generación de resúmenes'],
    demoUrl: '#email-analyzer',
    color: '#0066ff',
    bgColor: 'linear-gradient(135deg, #001a33 0%, #003366 50%, #004d99 100%)',
    secondaryColor: '#3399ff'
  },
  {
    id: '2',
    title: 'Extractor Inteligente de Facturas',
    description: 'Digitaliza y extrae datos de facturas en cualquier formato (PDF, foto, escaneo). Valida RNC, detecta errores y exporta a Excel.',
    problem: 'Procesamiento manual de facturas es lento y propenso a errores.',
    solution: 'Sistema automatizado con OCR y validación inteligente de datos.',
    techStack: ['Python', 'OCR', 'Computer Vision', 'React'],
    features: ['OCR avanzado', 'Validación RNC', 'Exportación a Excel', 'Detección de errores'],
    demoUrl: '#invoice-extractor',
    color: '#00ff88',
    bgColor: 'linear-gradient(135deg, #001a0d 0%, #00331a 50%, #004d26 100%)',
    secondaryColor: '#33ffaa'
  },
  {
    id: '3',
    title: 'Generador de Respuestas para Atención al Cliente',
    description: 'Responde consultas de clientes automáticamente basándose en tus políticas y documentos internos. Perfecto para WhatsApp y email.',
    problem: 'Equipos de atención al cliente sobrecargados con consultas repetitivas.',
    solution: 'Chatbot entrenado con políticas internas para respuestas precisas.',
    techStack: ['Python', 'NLP', 'Machine Learning', 'React'],
    features: ['Respuestas automáticas', 'Integración WhatsApp', 'Aprendizaje continuo'],
    demoUrl: '#chatbot',
    color: '#9933ff',
    bgColor: 'linear-gradient(135deg, #1a0033 0%, #330066 50%, #4d0099 100%)',
    secondaryColor: '#cc66ff'
  },
  {
    id: '4',
    title: 'Comparador de Cotizaciones',
    description: 'Analiza múltiples cotizaciones de proveedores y genera tabla comparativa con recomendación inteligente según tus criterios.',
    problem: 'Dificultad para comparar múltiples cotizaciones y tomar la mejor decisión.',
    solution: 'Sistema inteligente que analiza y recomienda la mejor opción.',
    techStack: ['Python', 'Data Analysis', 'React'],
    features: ['Análisis múltiple', 'Recomendación inteligente', 'Comparación visual'],
    demoUrl: '#quote-comparator',
    color: '#ff6600',
    bgColor: 'linear-gradient(135deg, #331a00 0%, #663300 50%, #994d00 100%)',
    secondaryColor: '#ff9933'
  },
  {
    id: '5',
    title: 'Analizador de CVs con Matching',
    description: 'Filtra y rankea candidatos automáticamente. Genera resúmenes y sugiere preguntas de entrevista personalizadas para cada perfil.',
    problem: 'Proceso manual de revisión de CVs es ineficiente y subjetivo.',
    solution: 'Sistema automatizado que evalúa y clasifica candidatos por relevancia.',
    techStack: ['Python', 'NLP', 'Machine Learning', 'React'],
    features: ['Filtrado automático', 'Ranking de candidatos', 'Preguntas personalizadas'],
    demoUrl: 'https://abisaymedinarosario.github.io/cv-analyzer',
    color: '#ff3366',
    bgColor: 'linear-gradient(135deg, #330011 0%, #660022 50%, #990033 100%)',
    secondaryColor: '#ff6699'
  },
  {
    id: '6',
    title: 'Transcriptor y Minutos de Reuniones',
    description: 'Transcribe audio de reuniones y genera resumen ejecutivo con acuerdos alcanzados y action items con responsables asignados.',
    problem: 'Pérdida de información importante en reuniones y dificultad para seguir action items.',
    solution: 'Sistema automático que transcribe y extrae información clave de reuniones.',
    techStack: ['Python', 'Speech Recognition', 'NLP', 'React'],
    features: ['Transcripción automática', 'Generación de minutos', 'Asignación de responsables'],
    demoUrl: '#meeting-transcriptor',
    color: '#00ffff',
    bgColor: 'linear-gradient(135deg, #001a1a 0%, #003333 50%, #004d4d 100%)',
    secondaryColor: '#66ffff'
  },
  {
    id: '7',
    title: 'Detector de Anomalías en Ventas',
    description: 'Analiza reportes de ventas e inventario para identificar patrones inusuales, predecir quiebres de stock y alertar sobre oportunidades.',
    problem: 'Dificultad para detectar oportunamente problemas y oportunidades en los datos de ventas.',
    solution: 'Sistema predictivo que identifica anomalías y oportunidades de negocio.',
    techStack: ['Python', 'Machine Learning', 'Data Analysis', 'React'],
    features: ['Detección de anomalías', 'Predicción de stock', 'Alertas inteligentes'],
    demoUrl: 'https://abisayai.com/detector-anomalias-ventas',
    color: '#ffcc00',
    bgColor: 'linear-gradient(135deg, #331a00 0%, #663300 50%, #994d00 100%)',
    secondaryColor: '#ffdd33'
  }
];