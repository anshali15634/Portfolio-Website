export interface Project {
  id: number;
  project_name: string;
  startDate: string;
  endDate: string;
  summary: string;
  project_link?: string;
  image: string;
}

export const projects: Project[] = [
{
  id: 1,
  project_name: "AI-Powered Next-Generation Battery Decision Support System",
  startDate: "Jun 2026",
  endDate: "Jun 2026",
  summary: "End-to-end sustainability analytics platform built with Next.js, TypeScript, Python, FastAPI, and Gemini for evaluating EV battery recycling versus reuse trade-offs. Features a guided 6-stage workflow with automated cascading calculations and an AI analyst chat agent grounded in user data. Built solo across full-stack UI, state management, API, and LLM integration.",
  project_link:"",
  image: "/images/TOOLBOX.png"
},
{
  id: 2,
  project_name: "AI Customer Agent for E-Commerce Platforms",
  startDate: "Apr 2026",
  endDate: "Apr 2026",
  summary: "Grant is a full-stack AI customer service agent built for e-commerce platforms, tested on the Apex Pedals demo store. It routes inquiries to order tracking, policy Q&A via RAG, or graceful off-topic handling. Maintains conversation history for context-aware responses through API integration.",
  project_link:"https://github.com/anshali15634/AI-Customer-Agent-for-E-Commerce",
  image: "/images/bicycle.png"
},
{
  id: 12,
  project_name: "Intelligent Workplace Safety Monitoring with PPE and Person Detection",
  startDate: "Jun 2026",
  endDate: "Jun 2026",
  summary: "Computer vision system for detecting personnel and evaluating PPE compliance in CCTV footage. Built as part of an assessment. Source code is confidential and not publicly available.",
  project_link:"",
  image: "/images/PPE.png"
},
{
  id: 3,
  project_name: "Fine Grained Image Classification for Germinated Seed Quality Estimation",
  startDate: "Jul 2025",
  endDate: "Jan 2026",
  summary: "Research project classifying germinating oil palm seed quality using a custom tri-branched deep learning architecture with autoencoders. Explored image augmentation strategies, loss functions, and multi-objective optimization. Implemented using PyTorch and TensorFlow.",
  project_link:"https://github.com/anshali15634/Germinated-Oil-Palm-Seed-Quality-Classification",
  image: "/images/SEED.png"
},
{
  id: 4,
  project_name: "Financial Market Forecasting with Machine Learning and Macroeconomic Indicators",
  startDate: "Jun 22025",
  endDate: "Aug 2025",
  summary: "Proposed a dual-branch LSTM model integrating macroeconomic indicators with historical prices to forecast 5-day ETF closing values. Evaluated on nine major US equity, bond, and commodity ETFs using LightGBM-selected features. Achieved a 7% average accuracy improvement over a baseline LSTM with lower error metrics.",
  project_link:"",
  image: "/images/FINANCE.png"
},
{
  id: 5,
  project_name: "Efficient Video Object Segmentation with Intelligent Scissors, CONDENSATION and CNN (Individual Dissertation)",
  startDate: "Sept 2024",
  endDate: "May 2025",
  summary: "Final year dissertation combining Intelligent Scissors segmentation with a CONDENSATION-based contour tracking algorithm, evaluated using YOLOv11. Achieved a 97.5% reduction in segmentation time via Cython optimization. Delivered accurate tracking and a real-time GUI application for segmentation and evaluation.",
  project_link:"https://github.com/anshali15634/Efficient-Video-Object-Segmentation-with-Intelligent-Scissors-CONDENSATION-and-YOLO11n",
  image: "/images/dissertation.jpg"
},
{
  id: 6,
  project_name: "Autonomous Robotic Systems - Evolving Policy Networks with Genetic Algorithms for Reinforcement Learning",
  startDate: "Sept 2024",
  endDate: "Dec 2024",
  summary: "Research project introducing GA-MSM-P, a modification of GA-MSM for evolutionary reinforcement learning, improving convergence speed by preserving evolutionary progress. Evaluated various noise types as mutation operators to assess their impact on optimization. Conducted as part of the Autonomous Robotic Systems module at the University of Nottingham.",
  project_link:"https://github.com/anshali15634/Optimisation-of-Evolving-Policy-Networks-with-GAs-with-Alternative-Noise-Types-for-Evolutionary-RL",
  image: "/images/GAMSM.png"
},
{
  id: 7,
  project_name: "Driver Vigilance Detection using the SEEDVIG dataset - Performance Evaluation using AdaBoostM2, LSTM and RNN",
  startDate: "May 2024",
  endDate: "Sept 2024",
  summary: "Research internship comparing AdaBoostM2, LSTM, and RNN classifiers on the SEED-VIG EEG dataset for driver vigilance detection. Found that a reduced delta/theta feature set achieved over 90% accuracy with improved computational efficiency. Implemented using Python, TensorFlow, NumPy, and scikit-learn.",
  project_link:"https://ieeexplore.ieee.org/document/11018708",
  image: "/images/PAPER.png"
},
{
  id: 8,
  project_name: "AI-Powered Educational Tool - MetaCognify",
  startDate: "Jul 2024",
  endDate: "Aug 2024",
  summary: "Built during a 12-day Falcon Hackathon, MetaCognify is an AI educational app using Falcon 180B models to simulate the Feynman Technique and Socratic Method for critical thinking and retention. Delivered personalized performance analytics and feedback for students. Team also presented market analysis and a live pitch demo.",
  project_link:"https://lablab.ai/ai-hackathons/falcon-hackathon/the-falconers/metacognify-an-idea-to-revolutionize-education",
  image: "/images/metacognify.png"
},
{
  id: 9,
  project_name: "AI-Powered Website and Mobile App for Stress Detection and Analysis: BrainZen",
  startDate: "",
  endDate: "",
  summary: "Year-long research project at the University of Nottingham classifying stress levels from EEG data using Logistic Regression and RNN models, deployed via a website and mobile app. As Lead Model Engineer, developed and optimized models for compatibility with Muse and Emotiv headsets. Coordinated platform testing to ensure seamless user interaction.",
  project_link:"https://github.com/anshali15634/EEG-Stress-Analysis-using-LR-and-RNN-Models",
  image: "/images/BRAINZEN.jpg"
},
{
  id: 10,
  project_name: "Development of an Image Processing Pipeline for Flower Segmentation",
  startDate: "Jan 2024",
  endDate: "May 2024",
  summary: "Python pipeline segmenting flowers from complex backgrounds using classical techniques including color space conversion, thresholding, and noise reduction. Evaluated with Mean IoU across easy, medium, and hard image categories using OpenCV and NumPy. Completed as a team project with a formal report for the Image Processing module.",
  project_link:"https://github.com/AnshanaM/petals-to-pixels",
  image: "/images/FLOWER.png"
},
{
  id: 11,
  project_name: "Grouping Genetic Algorithm with Controlled Gene Transmission: Java Implementation",
  startDate: "",
  endDate: "",
  summary: "Java implementation of the Grouping Genetic Algorithm with Controlled Gene Transmission (GGA-CGT) for the one-dimensional Bin Packing Problem, built from the original research paper. Developed from scratch for the Artificial Intelligence Methods module at the University of Nottingham. Tested on a smaller dataset, successfully replicating the expected results.",
  project_link:"https://github.com/anshali15634/GGA-CGT-Java-Implementation",
  image: "/images/GGACGT.png"
},
];