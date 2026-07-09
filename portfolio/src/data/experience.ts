export interface Experience {
  id: number;

  role: string;
  company: string;
  logo: string;
  location: string;

  startDate: string;
  endDate: string;
  duration: string;

  featured?: boolean;
  website?: string;

  summary: string;

  details: {
    overview: string;
    achievements: string[];
    technologies: string[];
  };
}

export const experiences: Experience[] = [
  {
    id: 5,

    role: "Backend Engineer Intern (Data & AI Team)",
    company: "Tech Unicorn",
    logo: "/images/techunicorn.png",
    location: "Dubai, UAE",

    startDate: "Oct 2025",
    endDate: "Dec 2025",
    duration: "3 months",

    featured: true,

    summary:
      "Built enterprise AI solutions using RAG, OCR, Azure AI and LLMs.",

    details: {
      overview:
        "Worked within the Data & AI team to design and develop enterprise AI solutions for legal and financial clients. Collaborated with solution architects, backend engineers and client-facing teams to deliver production-ready AI applications.",

      achievements: [
        "Developed multilingual Retrieval-Augmented Generation (RAG) applications for enterprise legal and financial clients.",
        "Built intelligent document processing pipelines combining OCR, document classification and entity extraction.",
        "Created reusable AI frameworks that accelerated development across multiple internal projects.",
        "Developed a real-time AI digital persona integrating OpenAI models with Soul Machines.",
        "Collaborated with cross-functional teams to deploy scalable AI solutions."
      ],

      technologies: [
        "Python",
        ".NET",
        "Azure AI",
        "Azure AI Search",
        "LangChain",
        "LangGraph",
        "OpenAI",
        "RAG",
        "OCR"
      ]
    }
  },

  {
    id: 4,

    role: "Computer Vision Research Intern",
    company: "University of Nottingham Malaysia",
    logo: "/images/universityofnottingham.png",
    location: "Malaysia",

    startDate: "Jun 2025",
    endDate: "Nov 2025",
    duration: "6 months",

    summary:
      "Developed deep learning models for oil palm seed germination classification.",

    details: {
      overview:
        "Conducted computer vision research focusing on automated classification of germinating oil palm seeds using deep learning and representation learning techniques.",

      achievements: [
        "Designed a custom tri-branch autoencoder architecture for germinating oil palm seed classification.",
        "Investigated transfer learning, augmentation strategies and reconstruction-based feature learning.",
        "Achieved approximately 81% classification accuracy on a proprietary agricultural dataset."
      ],

      technologies: [
        "Python",
        "PyTorch",
        "Computer Vision",
        "Autoencoder",
        "Transfer Learning",
        "Deep Learning"
      ]
    }
  },

  {
    id: 3,

    role: "Machine Learning Research Intern",
    company: "University of Nottingham Malaysia",
    logo: "/images/universityofnottingham.png",
    location: "Malaysia",

    startDate: "Jun 2025",
    endDate: "Aug 2025",
    duration: "3 months",

    summary:
      "Built attention-based LSTM models for ETF price forecasting.",

    details: {
      overview:
        "Conducted financial time-series forecasting research using deep learning architectures that integrated historical market data with macroeconomic indicators.",

      achievements: [
        "Designed a dual-branched attention-based LSTM architecture.",
        "Integrated macroeconomic indicators with historical financial data.",
        "Improved prediction performance by approximately 7% in R².",
        "Co-authored an academic manuscript currently under submission."
      ],

      technologies: [
        "Python",
        "PyTorch",
        "LSTM",
        "Attention",
        "Time Series",
        "Deep Learning"
      ]
    }
  },

  {
    id: 2,

    role: "Machine Learning Research Assistant",
    company: "University of Nottingham Malaysia",
    logo: "/images/universityofnottingham.png",
    location: "Malaysia",

    startDate: "Jul 2024",
    endDate: "Sep 2024",
    duration: "3 months",

    summary:
      "Applied machine learning to EEG-based driver fatigue detection.",

    details: {
      overview:
        "Performed EEG signal processing and developed machine learning models for driver fatigue detection as part of an academic research project.",

      achievements: [
        "Conducted EEG preprocessing and feature engineering.",
        "Developed multiple machine learning models achieving over 90% prediction accuracy.",
        "Published the research as second author in an IEEE conference paper."
      ],

      technologies: [
        "Python",
        "Machine Learning",
        "EEG",
        "Signal Processing",
        "NumPy",
        "scikit-learn"
      ]
    }
  },

  {
    id: 1,

    role: "Computer Vision Research Intern",
    company: "University of Nottingham Malaysia",
    logo: "/images/universityofnottingham.png",
    location: "Malaysia",

    startDate: "Jun 2024",
    endDate: "Aug 2024",
    duration: "3 months",

    summary:
      "Developed semi-automatic video object segmentation algorithms.",

    details: {
      overview:
        "Conducted research on interactive video object segmentation by combining graph-based optimisation with probabilistic object tracking.",

      achievements: [
        "Developed a semi-automatic video object segmentation framework.",
        "Combined Intelligent Scissors, CONDENSATION tracking and graph optimisation.",
        "Improved segmentation accuracy through algorithm optimisation and benchmarking."
      ],

      technologies: [
        "Python",
        "OpenCV",
        "Computer Vision",
        "Image Processing",
        "Graph Optimisation"
      ]
    }
  }
];