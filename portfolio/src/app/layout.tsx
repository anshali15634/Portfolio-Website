import type { Metadata } from "next";
import { Space_Grotesk, Inter, Caveat, Geist, Covered_By_Your_Grace } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400", // this font only ships a 400 weight
  variable: "--font-handwriting",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-doodle",
});

export const metadata: Metadata = {
  title: "Anshali Manoharan | AI Engineer",
  description:
    "AI Engineer specialising in NLP, Machine Learning, Computer Vision and Agentic AI.",

  keywords: [
    "AI Engineer",
    "Machine Learning",
    "NLP",
    "Computer Vision",
    "Python",
    "LangChain",
    "LangGraph",
    "RAG",
    "Portfolio",
  ],

  authors: [
    {
      name: "Anshali Manoharan",
    },
  ],

  openGraph: {
    title: "Anshali Manoharan | AI Engineer",
    description:
      "Portfolio of Anshali Manoharan, AI Engineer specialising in NLP, Machine Learning and Computer Vision.",
    type: "website",
    images: [
      {
        url: "/images/me.png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Anshali Manoharan | AI Engineer",
    description:
      "AI Engineer specialising in NLP, Machine Learning and Computer Vision.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body
        className={`
          ${spaceGrotesk.variable}
          ${inter.variable}
          ${caveat.variable}
          ${coveredByYourGrace.variable}
        `}
      >
        {children}
      </body>
    </html>
  );
}