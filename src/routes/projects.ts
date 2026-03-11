import {
  Github,
  Linkedin,
  Globe,
  Braces,
  Wind,
  Zap,
  Cpu,
  Boxes,
  ChartNoAxesCombined,
  X,
  FileCode2,
  Code,
} from "@lucide/svelte";
import { base } from "$app/paths";
import ContactThumbnail from "@/components/contact-thumbnail.svelte";

const projects = [
  {
    start: "2026",
    end: "2026",
    title: "Portfolio Website",
    thumbnail1: {
      type: "image",
      src: `${base}/work/portfolio/thumbnail1.png`,
    },
    thumbnail2: `${base}/work/portfolio/thumbnail2.png`,
    galleryItems: [
      {
        type: "image",
        src: `${base}/work/portfolio/thumbnail2.png`,
      },
      {
        type: "image",
        src: `${base}/work/portfolio/1.png`,
      },
      {
        type: "image",
        src: `${base}/work/portfolio/2.png`,
      },
      {
        type: "image",
        src: `${base}/work/portfolio/3.png`,
      },
    ],
    shortDescription: "My personnal website",
    description:
      "A personal site that showcases my work, experiments, and background through an interface focused on motion, typography, and clarity.",
    features: [
      "Responsive landing page with immersive animated sections",
      "Project carousel with a detailed project presentation area",
      "Smooth scroll-driven transitions and reveal animations",
    ],
    why: "I built this portfolio to create a place where I could present my projects in a way that feels personal and visually engaging while also experimenting with interface design, motion, and front-end architecture.",
    techStack: [
      { name: "SvelteKit", icon: Braces },
      { name: "TypeScript", icon: FileCode2 },
      { name: "Tailwind CSS", icon: Wind },
      { name: "GSAP", icon: Zap },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/yka-dev/yassine-ak",
        icon: Github,
      },
      {
        label: "Website",
        href: "https://yka-dev.github.io/portfolio",
        icon: Globe,
      },
    ],
  },
  {
    start: "2024",
    end: "2025",
    title: "Measurely",
    thumbnail1: {
      type: "image",
      src: `${base}/work/measurely/thumbnail1.png`,
    },
    thumbnail2: `${base}/work/measurely/thumbnail2.png`,
    galleryItems: [
      {
        type: "image",
        src: `${base}/work/measurely/3.png`,
      },
      {
        type: "image",
        src: `${base}/work/measurely/2.png`,
      },
      {
        type: "image",
        src: `${base}/work/measurely/1.png`,
      },
    ],
    shortDescription: "Analytics website",
    description:
      "A concept project centered on clean interfaces and practical user flows for viewing and managing measurements in a clear and intuitive way.",
    features: [
      "Structured dashboard-style layout for organizing information",
      "Simple and readable interface focused on usability",
      "Component-based architecture for scalable UI development",
    ],
    why: "I built Measurely to explore how thoughtful interface structure and interaction design can make technical or data-heavy information feel much easier to navigate.",
    techStack: [
      { name: "SvelteKit", icon: Braces },
      { name: "TypeScript", icon: FileCode2 },
      { name: "Tailwind CSS", icon: Wind },
      { name: "Analytics", icon: ChartNoAxesCombined },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Measurely-dev/Measurely",
        icon: Github,
      },
    ],
  },
  {
    start: "2023",
    end: "2023",
    title: "CPP_",
    thumbnail1: {
      type: "image",
      src: `${base}/work/cpp_/thumbnail1.png`,
    },
    thumbnail2: `${base}/work/cpp_/thumbnail1.png`,
    galleryItems: [
      {
        type: "image",
        src: `${base}/logo.svg`,
      },
      {
        type: "video",
        src: `${base}/work/cpp_/video1.mp4`,
      },
      {
        type: "video",
        src: `${base}/work/cpp_/video2.mp4`,
      },
    ],
    shortDescription: "Vscode extension",
    description:
      "A project focused on sharpening my understanding of lower-level programming concepts and problem solving through C++ practice and experimentation.",
    features: [
      "Hands-on exploration of core C++ language concepts",
      "Practice-oriented implementation of algorithms and logic",
      "Focus on writing efficient and structured code",
    ],
    why: "I built this project as a way to strengthen my foundations in programming by working closer to the language itself, improving both my problem-solving approach and my understanding of performance-oriented code.",
    techStack: [
      { name: "C++", icon: Cpu },
      { name: "STL", icon: Boxes },
      { name: "Algorithms", icon: Zap },
      { name: "Data Structures", icon: Braces },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/yka-dev/CPP_extension",
        icon: Github,
      },
      {
        label: "Vscode Marketplace",
        href: "https://marketplace.visualstudio.com/items?itemName=bleastProgram.CPP-Compiler",
        icon: Globe,
      },
    ],
  },
  {
    title: "Have something in mind ?",
    thumbnail1: {
      type: "component",
      component: ContactThumbnail,
    },
    shortDescription:
      "Contact me for any project or idea that you have in mind.",
  },
];

export default projects;
