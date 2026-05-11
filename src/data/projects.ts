export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  images?: string[];
  video?: string;
  videos?: string[];
  description: string;
}

export const projects: Project[] = [
  {
    id: "Sample-Video",
    title: "My Video Project",
    category: "Videography",
    date: "2026",
    image: "", // Not used since video is present
    video: "/videos/video1.mp4",
    description: "A showcase of my recent video work.",
  },
  {
    id: "Shore-Meets-the-Soul",
    title: "Shore Meets the Soul",
    category: "Fashion & Editorial",
    date: "2024",
    image: "/images/portfolio/Shore-Meets-the-Soul/port1.jpg",
    images: [
      "/images/portfolio/Shore-Meets-the-Soul/port2.jpg",
      "/images/portfolio/Shore-Meets-the-Soul/port3.jpg",
      "/images/portfolio/Shore-Meets-the-Soul/port4.jpg",
      "/images/portfolio/Shore-Meets-the-Soul/port5.jpg",
    ],
    description:
      "Capturing moments of stillness amidst the constant flow of creativity",
  },
  {
    id: "Monochrome-Mindset",
    title: "Monochrome Mindset",
    category: "Brand & Commercial",
    date: "2024",
    image: "/images/portfolio/Monochrome-Mindset/port1.jpg",
    images: [
      "/images/portfolio/Monochrome-Mindset/port1.jpg",
      "/images/portfolio/Monochrome-Mindset/port2.jpg",
      "/images/portfolio/Monochrome-Mindset/port3.jpg",
      "/images/portfolio/Monochrome-Mindset/port4.jpg",
    ],
    description: "Finding structure and inspiration in the city’s grey spaces.",
  },
  {
    id: "Underground-Focus",
    title: "Underground Focus",
    category: "Concert & Live Music",
    date: "2023",
    image: "/images/portfolio/Underground-Focus/port4.jpg",
    images: [
      "/images/portfolio/Underground-Focus/port1.jpg",
      "/images/portfolio/Underground-Focus/port5.jpg",
      "/images/portfolio/Underground-Focus/port3.jpg",
      "/images/portfolio/Underground-Focus/port2.jpg",
    ],
    description:
      "Capturing the raw energy of live performances and backstage moments.",
  },
  {
    id: "The-Cultural-Vibe",
    title: "The Cultural Vibe",
    category: "Fashion & Editorial",
    date: "2023",
    image: "/images/portfolio/The-Cultural-Vibe/port1.jpg",
    images: [
      "/images/portfolio/The-Cultural-Vibe/port2.jpg",
      "/images/portfolio/The-Cultural-Vibe/port7.jpeg",
      "/images/portfolio/The-Cultural-Vibe/port8.jpeg",
      "/images/portfolio/The-Cultural-Vibe/port5.jpg",
      "/images/portfolio/The-Cultural-Vibe/port6.jpg",
      "/images/portfolio/The-Cultural-Vibe/port3.jpg",
      "/images/portfolio/The-Cultural-Vibe/port4.jpg",
    ],
    description: "Documenting the pure emotion, vibrant colors, and authentic voices of the stage",
  },
  {
    id: "Black-white",
    title: "Urban Monochrome Vibes",
    category: "Streetwear & Lifestyle Photography",
    date: "2026",
    image: "/images/portfolio/Black-white/port2.jpeg",
    images: [
      "/images/portfolio/Black-white/port2.jpeg",
      "/images/portfolio/Black-white/port1.jpeg",
      "/images/portfolio/Black-white/port3.jpeg",
      "/images/portfolio/Black-white/port7.jpeg",
      "/images/portfolio/Black-white/port5.jpeg",
      "/images/portfolio/Black-white/port10.jpeg",
      "/images/portfolio/Black-white/port4.jpeg",
      "/images/portfolio/Black-white/port8.jpeg",
      "/images/portfolio/Black-white/port9.jpeg",
      "/images/portfolio/Black-white/port6.jpeg",
    ],
    description: "A stylish black-and-white visual story capturing the relaxed, edgy essence of modern urban life and casual streetwear.",
  },
  {
    id: "Cinematic-Street-Noir",
    title: "Cinematic Street Noir",
    category: "Urban Fashion Photography",
    date: "2026",
    image: "/images/portfolio/Cinematic-Street-Noir/port1.jpeg",
    images: [
      "/images/portfolio/Cinematic-Street-Noir/port1.jpeg",
      "/images/portfolio/Cinematic-Street-Noir/port2.jpeg",
      "/images/portfolio/Cinematic-Street-Noir/port3.jpeg",
      "/images/portfolio/Cinematic-Street-Noir/port4.jpeg",
      "/images/portfolio/Cinematic-Street-Noir/port7.jpeg",
      "/images/portfolio/Cinematic-Street-Noir/port5.jpeg",
      "/images/portfolio/Cinematic-Street-Noir/port6.jpeg",
    
    ],
    description: "A moody, stylized editorial shoot featuring a sharp all-black outfit paired with classic penny loafers, utilizing a custom green-tinted LUT to contrast the subject against raw, ",
  },
];
