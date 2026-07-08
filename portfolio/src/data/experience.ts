export interface Experience {
  id: number;
  company: string;
  logo: string;
  location: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  website?: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "University of Nottingham Malaysia",
    logo: "/images/universityofnottingham.png",
    location: "Remote",
    role: "Computer Vision Research Intern",
    period: "Jun 2024 – Aug 2024",

    description: [
      "Developed a semi-automatic video object segmentation framework combining Intelligent Scissors, CONDENSATION tracking, and graph-based optimisation.",
      "Applied shortest-path algorithms, probabilistic tracking and image processing techniques to improve segmentation quality.",
      "Optimised segmentation performance through algorithm refinement and evaluation on benchmark datasets.",
    ],

    technologies: [
      "Python",
      "OpenCV",
      "Computer Vision",
      "Graph Theory",
      "Image Processing",
    ],

    website: "https://www.nottingham.edu.my",
  },

  {
    id: 2,
    company: "University of Nottingham Malaysia",
    logo: "/images/universityofnottingham.png",
    location: "Remote",
    role: "Machine Learning Research Assistant",
    period: "Jul 2024 – Sep 2024",

    description: [
      "Conducted EEG signal processing and feature engineering for driver fatigue detection.",
      "Built multiple machine learning models using frequency-domain features, improving prediction accuracy beyond 90%.",
      "Co-authored an IEEE conference publication as second author.",
    ],

    technologies: [
      "Python",
      "Machine Learning",
      "EEG",
      "NumPy",
      "pandas",
      "scikit-learn",
    ],

    website: "https://www.nottingham.edu.my",
  },

  {
    id: 3,
    company: "University of Nottingham Malaysia",
    logo: "/images/universityofnottingham.png",
    location: "Remote",
    role: "Machine Learning Research Intern",
    period: "Jun 2025 – Aug 2025",

    description: [
      "Designed a dual-branched attention-based LSTM architecture for ETF price forecasting.",
      "Integrated macroeconomic indicators with historical market data to improve forecasting performance.",
      "Improved R² by approximately 7% while significantly reducing prediction error.",
      "Co-authored an academic manuscript currently under submission.",
    ],

    technologies: [
      "Python",
      "PyTorch",
      "LSTM",
      "Attention",
      "Time Series",
      "Deep Learning",
    ],

    website: "https://www.nottingham.edu.my",
  },

  {
    id: 4,
    company: "University of Nottingham Malaysia",
    logo: "/images/universityofnottingham.png",
    location: "Remote",
    role: "Computer Vision Research Intern",
    period: "Jun 2025 – Nov 2025",

    description: [
      "Designed a custom tri-branch autoencoder architecture for germinating oil palm seed classification.",
      "Investigated augmentation strategies, loss functions and transfer learning approaches.",
      "Achieved approximately 81% classification accuracy on a proprietary agricultural dataset.",
    ],

    technologies: [
      "PyTorch",
      "Computer Vision",
      "Autoencoder",
      "Transfer Learning",
      "Deep Learning",
    ],

    website: "https://www.nottingham.edu.my",
  },

  {
    id: 5,
    company: "Tech Unicorn",
    logo: "/images/techunicorn.png",
    location: "Dubai, UAE",
    role: "Backend Engineer Intern (Data & AI Team)",
    period: "Oct 2025 – Dec 2025",

    description: [
      "Developed multilingual Retrieval-Augmented Generation (RAG) applications for enterprise legal and financial clients.",
      "Built intelligent document processing pipelines combining OCR, document classification and entity extraction.",
      "Created reusable AI frameworks to accelerate internal project delivery across multiple client engagements.",
      "Developed a real-time AI digital persona integrating OpenAI models with Soul Machines.",
      "Collaborated with solution architects, backend engineers and client-facing teams to deploy production-ready AI systems.",
    ],

    technologies: [
      "Python",
      ".NET",
      "Azure AI",
      "Azure AI Search",
      "RAG",
      "LangChain",
      "LangGraph",
      "OpenAI",
      "OCR",
    ],

    website: "https://techunicorn.ai",
  },
];