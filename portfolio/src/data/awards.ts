export interface Award {
  id: number;
  title: string;
  issuer: string;
  date: string;
  associatedWith?: string;
  description: string;
}

export const awards: Award[] = [
{
  id: 1,
  title: "Silver Award – NALI 2025 Exhibition & Competition",
  issuer: "Universiti Teknologi Malaysia (UTM)",
  date: "Oct 2025",
  associatedWith: "University of Nottingham Malaysia",
  description: "Received the Silver Award at the NALI 2025 Exhibition & Competition for the innovation 'NOTTALONE: Promoting Mental Health Literacy Among University Students Through a Gamified Digital Toolkit,' aimed at enhancing mental health awareness among university students through interactive gamification and digital engagement strategies."
},
{
  id: 2,
  title: "Winner – Mental Health of University Students Summer Competition 2024 (Innovative Interactive Toolkit Category)",
  issuer: "University of Nottingham Malaysia",
  date: "Feb 2025",
  associatedWith: "University of Nottingham Malaysia",
  description: "Winner in the Innovative Interactive Toolkit category for developing an engaging and impactful mental health resource for students."
},
{
  id: 3,
  title: "Best Presenter Award 2024",
  issuer: "University of Nottingham",
  date: "Nov 2024",
  associatedWith: "University of Nottingham Malaysia",
  description: "Awarded for an outstanding team presentation on 'Clustering' as part of the Machine Learning module (COMP3038), involving an in-depth analysis of two academic papers on EM clustering applications in click fraud detection and anti-money laundering."
},
{
  id: 4,
  title: "Top 30 Student UK Exchange Program Offer",
  issuer: "University of Nottingham",
  date: "Apr 2024",
  associatedWith: "University of Nottingham Malaysia",
  description: "Offered the opportunity to complete final year at the University of Nottingham's UK campus as part of a prestigious student exchange program, selected by ranking in the top 30 students based on academic performance."
},
{
  id: 5,
  title: "Dean's Excellence Scholarship Award",
  issuer: "University of Nottingham Malaysia",
  date: "Oct 2023",
  associatedWith: "University of Nottingham Malaysia",
  description: "Awarded for being within the top 2% of the school population in the academic year 2022-2023."
},
{
  id: 6,
  title: "High Achiever's Scholarship",
  issuer: "University of Nottingham",
  date: "Sep 2022",
  associatedWith: "University of Nottingham Malaysia",
  description: "Awarded a merit scholarship in recognition of outstanding academic achievement, for achieving three A*s in A Levels."
},
{
  id: 7,
  title: "1st Runner Up – Inter-School STEM Competition 2022",
  issuer: "Curtin University",
  date: "Mar 2022",
  description: "As members of Team Ganymede, represented Arab Unity School at the Inter-School STEM Challenge 2022, advancing through all competitive rounds against 178 teams from 60 schools."
},
];