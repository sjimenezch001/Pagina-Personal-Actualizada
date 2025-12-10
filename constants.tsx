import { 
  Database, 
  Code2, 
  BrainCircuit, 
  BarChart2, 
  GitBranch, 
  Workflow, 
  Globe, 
  Activity, 
  Users, 
  Smartphone, 
  Film, 
  Linkedin, 
  Github, 
  Mail,
  Terminal,
  Cpu,
  Layers
} from 'lucide-react';
import { Project, Skill, SocialLink, Translation, Language, ExperienceItem } from './types';

export const SKILLS: Record<Language, Skill[]> = {
  en: [
    { name: "Advanced SQL & ETL", icon: Database },
    { name: "Python Architecture", icon: Code2 },
    { name: "MLOps & Pipelines", icon: Workflow },
    { name: "Deep Learning", icon: BrainCircuit },
    { name: "Data Visualization", icon: BarChart2 },
    { name: "Cloud Infrastructure", icon: Layers },
    { name: "Version Control", icon: GitBranch },
    { name: "Terminal & Bash", icon: Terminal },
  ],
  es: [
    { name: "SQL Avanzado y ETL", icon: Database },
    { name: "Arquitectura Python", icon: Code2 },
    { name: "MLOps y Pipelines", icon: Workflow },
    { name: "Deep Learning", icon: BrainCircuit },
    { name: "Visualización de Datos", icon: BarChart2 },
    { name: "Infraestructura Cloud", icon: Layers },
    { name: "Control de Versiones", icon: GitBranch },
    { name: "Terminal y Bash", icon: Terminal },
  ]
};

export const EXPERIENCE: Record<Language, ExperienceItem[]> = {
  en: [
    {
      company: "Tech Solutions Inc.",
      role: "Senior Data Scientist",
      period: "2023 - Present",
      description: "Leading the development of predictive maintenance models and optimizing data pipelines for real-time processing."
    },
    {
      company: "DataCorp",
      role: "Data Analyst",
      period: "2021 - 2023",
      description: "Implemented automated reporting dashboards reducing manual workload by 40%. Conducted market segmentation analysis."
    },
    {
      company: "Industrial Systems",
      role: "Process Engineer",
      period: "2019 - 2021",
      description: "Transitioned from core engineering to data roles by applying statistical quality control and Six Sigma methodologies."
    }
  ],
  es: [
    {
      company: "Tech Solutions Inc.",
      role: "Científico de Datos Senior",
      period: "2023 - Presente",
      description: "Liderando el desarrollo de modelos de mantenimiento predictivo y optimizando pipelines de datos para procesamiento en tiempo real."
    },
    {
      company: "DataCorp",
      role: "Analista de Datos",
      period: "2021 - 2023",
      description: "Implementé dashboards de reportes automatizados reduciendo la carga manual en un 40%. Realicé análisis de segmentación de mercado."
    },
    {
      company: "Industrial Systems",
      role: "Ingeniero de Procesos",
      period: "2019 - 2021",
      description: "Transición de ingeniería a roles de datos aplicando control estadístico de calidad y metodologías Six Sigma."
    }
  ]
};

export const PROJECTS: Record<Language, Project[]> = {
  en: [
    {
      title: "End-to-End ML Pipeline",
      description: "Production-ready architecture for preprocessing, model ensembling, and automated evaluation metrics.",
      tags: ["Python", "MLOps", "Ensembling"],
      link: "https://github.com/sjimenezch001/Portfolio/blob/master/Data%20Science/ML%20Pipeline%20Analysis/A_Machine_Learning_Analysis_With_A_Pipeline_Aproach.ipynb",
      icon: Workflow,
      category: "Data Science"
    },
    {
      title: "Global Socio-Economic Clustering",
      description: "Unsupervised learning engine using K-Means to detect latent patterns in global economic indicators.",
      tags: ["Clustering", "Scikit-Learn", "Analytics"],
      link: "https://github.com/sjimenezch001/Portfolio/blob/master/Data%20Science/Country%20Analysis%20-%20Unsupervised%20Learning%20-%20Kmeans/Unsupervised%20Learning%20-%20Kmeans%20Clustering%20-%20Country%20Analysis.ipynb",
      icon: Globe,
      category: "Data Science"
    },
    {
      title: "Predictive Health Diagnostics",
      description: "High-sensitivity Logistic Regression model tailored for medical diagnostics with focus on minimizing false negatives.",
      tags: ["Biostatistics", "Regression", "Healthcare"],
      link: "https://github.com/sjimenezch001/Portfolio/blob/master/Data%20Science/Heart%20Disease%20Detection%20-%20Logistic%20Regresion/Logistic%20Regression%20-%20Heart%20Disease%20Detection.ipynb",
      icon: Activity,
      category: "Data Science"
    },
    {
      title: "Churn Prediction Engine",
      description: "Enterprise-grade churn analysis using Decision Trees to identify revenue retention opportunities.",
      tags: ["Decision Trees", "Revenue Ops", "BI"],
      link: "https://github.com/sjimenezch001/Portfolio/blob/master/Data%20Science/Telco%20Customer%20Churn%20Analysis%20-%20Supervised%20Learnings%20Aproaches/Supervised%20Learning%20-%20Tree%20Methods%20-%20TELCO%20Churn%20Analysis.ipynb",
      icon: Users,
      category: "Data Science"
    },
    {
      title: "App Market Intelligence",
      description: "Deep dive exploratory analysis of Google Play Store data to uncover monetization trends.",
      tags: ["EDA", "Market Research", "Pandas"],
      link: "https://github.com/sjimenezch001/Portfolio/blob/master/Data%20Analysis/Google%20App%20Market%20Analysis/GOOGLE%20Play%20Store%20-%20EDA%20and%20Visualization%20Analysis.ipynb",
      icon: Smartphone,
      category: "Data Analysis"
    },
    {
      title: "Statistical Bias Detection",
      description: "Investigative analysis of rating inflation in media aggregator platforms using statistical tests.",
      tags: ["Statistics", "Inference", "Visualization"],
      link: "https://github.com/sjimenezch001/Portfolio/blob/master/Data%20Analysis/Fandango%20Scores%20Analysis/Fandango%20Reviews%20-%20EDA%20and%20Visualization%20Analysis.ipynb",
      icon: Film,
      category: "Data Analysis"
    }
  ],
  es: [
    {
      title: "Pipeline ML End-to-End",
      description: "Arquitectura lista para producción: preprocesamiento, ensamblaje de modelos y métricas automatizadas.",
      tags: ["Python", "MLOps", "Ensembling"],
      link: "https://github.com/sjimenezch001/Portfolio/blob/master/Data%20Science/ML%20Pipeline%20Analysis/A_Machine_Learning_Analysis_With_A_Pipeline_Aproach.ipynb",
      icon: Workflow,
      category: "Data Science"
    },
    {
      title: "Clustering Socioeconómico",
      description: "Motor de aprendizaje no supervisado usando K-Means para detectar patrones latentes en indicadores económicos.",
      tags: ["Clustering", "Scikit-Learn", "Analytics"],
      link: "https://github.com/sjimenezch001/Portfolio/blob/master/Data%20Science/Country%20Analysis%20-%20Unsupervised%20Learning%20-%20Kmeans/Unsupervised%20Learning%20-%20Kmeans%20Clustering%20-%20Country%20Analysis.ipynb",
      icon: Globe,
      category: "Data Science"
    },
    {
      title: "Diagnóstico Predictivo de Salud",
      description: "Modelo de Regresión Logística de alta sensibilidad diseñado para diagnósticos médicos minimizando falsos negativos.",
      tags: ["Biostatistics", "Regression", "Healthcare"],
      link: "https://github.com/sjimenezch001/Portfolio/blob/master/Data%20Science/Heart%20Disease%20Detection%20-%20Logistic%20Regresion/Logistic%20Regression%20-%20Heart%20Disease%20Detection.ipynb",
      icon: Activity,
      category: "Data Science"
    },
    {
      title: "Motor de Predicción de Fugas",
      description: "Análisis de churn empresarial utilizando árboles de decisión para identificar oportunidades de retención.",
      tags: ["Decision Trees", "Revenue Ops", "BI"],
      link: "https://github.com/sjimenezch001/Portfolio/blob/master/Data%20Science/Telco%20Customer%20Churn%20Analysis%20-%20Supervised%20Learnings%20Aproaches/Supervised%20Learning%20-%20Tree%20Methods%20-%20TELCO%20Churn%20Analysis.ipynb",
      icon: Users,
      category: "Data Science"
    },
    {
      title: "Inteligencia de Mercado App",
      description: "Análisis exploratorio profundo de datos de Google Play Store para descubrir tendencias de monetización.",
      tags: ["EDA", "Market Research", "Pandas"],
      link: "https://github.com/sjimenezch001/Portfolio/blob/master/Data%20Analysis/Google%20App%20Market%20Analysis/GOOGLE%20Play%20Store%20-%20EDA%20and%20Visualization%20Analysis.ipynb",
      icon: Smartphone,
      category: "Data Analysis"
    },
    {
      title: "Detección Estadística de Sesgo",
      description: "Análisis investigativo de la inflación de calificaciones en plataformas agregadoras usando pruebas estadísticas.",
      tags: ["Statistics", "Inference", "Visualization"],
      link: "https://github.com/sjimenezch001/Portfolio/blob/master/Data%20Analysis/Fandango%20Scores%20Analysis/Fandango%20Reviews%20-%20EDA%20and%20Visualization%20Analysis.ipynb",
      icon: Film,
      category: "Data Analysis"
    }
  ]
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "http://www.linkedin.com/in/santiago-a-jimenez-a9b199227", icon: Linkedin },
  { platform: "GitHub", url: "https://github.com/sjimenezch001", icon: Github },
  { platform: "Email", url: "mailto:your.email@example.com", icon: Mail },
];

export const TRANSLATIONS: Record<Language, Translation> = {
  en: {
    nav: {
      work: "Projects",
      experience: "Experience",
      about: "About",
      contact: "Contact"
    },
    hero: {
      status: "Available for new projects",
      greeting: "Santiago A. Jiménez",
      titleStart: "Building intelligent",
      titleAccent: "data systems",
      titleEnd: " that drive impact.",
      description: "Specialized in transforming complex datasets into production-ready Machine Learning pipelines. Bridging the gap between raw data and strategic decisions.",
      btnProject: "Explore Work",
      btnCv: "Resume / CV",
      stat1: "5+",
      stat1Label: "Years Exp.",
      stat2: "20+",
      stat2Label: "Projects",
      stat3: "100%",
      stat3Label: "Delivery"
    },
    skills: {
      title: "Technical Stack"
    },
    experience: {
      title: "Career Trajectory"
    },
    work: {
      title: "Selected Work",
      badgeDS: "Machine Learning & Engineering",
      badgeDA: "Analytics & Intelligence"
    },
    about: {
      title: "Philosophy",
      p1: "I believe data science is not just about algorithms—it's about operationalizing intelligence. My background in Industrial Engineering allows me to see the 'system' behind the data.",
      p2Start: "Beyond the terminal, I focus on creativity. Whether it's",
      p2Bold: "writing science fiction",
      p2End: " or exploring new cultures, I bring a narrative-driven approach to data. Every number tells a story; I make sure it's heard."
    },
    footer: {
      rights: "Santiago A. Jiménez. Engineered for performance."
    }
  },
  es: {
    nav: {
      work: "Proyectos",
      experience: "Experiencia",
      about: "Sobre mí",
      contact: "Contacto"
    },
    hero: {
      status: "Disponible para proyectos",
      greeting: "Santiago A. Jiménez",
      titleStart: "Construyendo sistemas de",
      titleAccent: "datos inteligentes",
      titleEnd: " de alto impacto.",
      description: "Especializado en transformar conjuntos de datos complejos en pipelines de Machine Learning listos para producción. Uniendo datos crudos con decisiones estratégicas.",
      btnProject: "Explorar Trabajo",
      btnCv: "Currículum",
      stat1: "5+",
      stat1Label: "Años Exp.",
      stat2: "20+",
      stat2Label: "Proyectos",
      stat3: "100%",
      stat3Label: "Entregas"
    },
    skills: {
      title: "Stack Técnico"
    },
    experience: {
      title: "Trayectoria Profesional"
    },
    work: {
      title: "Portafolio Destacado",
      badgeDS: "Machine Learning e Ingeniería",
      badgeDA: "Analítica e Inteligencia"
    },
    about: {
      title: "Filosofía",
      p1: "Creo que la ciencia de datos no se trata solo de algoritmos, sino de operacionalizar la inteligencia. Mi formación en Ingeniería Industrial me permite ver el 'sistema' detrás de los datos.",
      p2Start: "Más allá de la terminal, me enfoco en la creatividad. Ya sea",
      p2Bold: "escribiendo ciencia ficción",
      p2End: " o explorando nuevas culturas, aporto un enfoque narrativo a los datos. Cada número cuenta una historia; yo me aseguro de que sea escuchada."
    },
    footer: {
      rights: "Santiago A. Jiménez. Diseñado para rendimiento."
    }
  }
};