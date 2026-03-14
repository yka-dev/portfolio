import { SiAnthropic, SiC, SiCloudflare, SiCplusplus, SiGhostty, SiGithubcopilot, SiGoland, SiGsap, SiJavascript, SiNextdotjs, SiOpenaigym, SiPostgresql, SiPosthog, SiPython, SiReact, SiRedis, SiRemix, SiSupabase, SiSvelte, SiTailwindcss, SiTypeform, SiTypescript, SiVsco, SiVscodium, SiZedindustries, SiZig } from "@icons-pack/svelte-simple-icons";
import {
  Code,
  FileCode2,
  Wind,
  Zap,
  Globe,
  Github,
  Cpu,
  Server,
} from "@lucide/svelte"; 

const tools = [
  {
    category: "Programming Languages",
    items: [
      {
        icon: SiPython,
        name: "Python",
        desc: "Versatile language for automation, data, and backend development",
      },
      {
        icon: SiC,
        name: "C",
        desc: "Low-level language for systems programming and performance-critical code",
      },
      {
        icon: SiCplusplus,
        name: "C++",
        desc: "Extension of C with object-oriented and generic programming features",
      },
      {
        icon: SiZig,
        name: "Zig",
        desc: "Modern low-level systems programming language with safety features",
      },
      {
        icon: SiJavascript,
        name: "JavaScript",
        desc: "Dynamic scripting for interactive web applications",
      },
      {
        icon: SiTypescript,
        name: "TypeScript",
        desc: "Typed superset of JavaScript for safer and scalable code",
      },
      {
        icon: SiGoland,
        name: "Golang",
        desc: "Compiled language for efficient backend and concurrent systems",
      },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      {
        icon: SiSvelte,
        name: "SvelteKit",
        desc: "Svelte framework for building reactive full-stack apps",
      },
      {
        icon: SiReact,
        name: "React",
        desc: "Library for declarative user interface components",
      },
      {
        icon: SiNextdotjs,
        name: "Next.js",
        desc: "React framework for server-side rendered and static apps",
      },
      {
        icon: SiRemix,
        name: "Remix",
        desc: "Full-stack web framework focused on web fundamentals and modern UX",
      },
      {
        icon: SiTailwindcss,
        name: "Tailwind CSS",
        desc: "Utility-first CSS framework for rapid UI development",
      },
      {
        icon: SiGsap,
        name: "Gsap",
        desc: "Professional-grade JavaScript animation library for high-performance motion",
      },
    ],
  },
  {
    category: "Coding Environments",
    items: [
      {
        icon: Github,
        name: "Git",
        desc: "Distributed version control for managing source code",
      },
      {
        icon: SiZedindustries,
        name: "Zed",
        desc: "Fast and modern code editor for minimalistic workflow",
      },
      {
        icon: SiGhostty,
        name: "Ghostty",
        desc: "High-performance, GPU-accelerated terminal emulator",
      },
    ],
  },
  {
    category: "Databases & Storage",
    items: [
      {
        icon: SiPostgresql,
        name: "PostgreSQL",
        desc: "Powerful relational database for structured data",
      },
      {
        icon: SiSupabase,
        name: "Supabase",
        desc: "Backend-as-a-Service with auth, database, and real-time features",
      },
      {
        icon: SiCloudflare,
        name: "Cloudflare R2",
        desc: "S3-compatible object storage for scalable file storage",
      },
      {
        icon: SiRedis,
        name: "Redis",
        desc: "In-memory data store for caching and real-time performance",
      },
    ],
  },
  {
    category: "Analytics & AI Tools",
    items: [
      {
        icon: SiPosthog,
        name: "PostHog",
        desc: "Open-source analytics for tracking user behavior",
      },
      {
        icon: SiOpenaigym,
        name: "OpenAI API",
        desc: "Generative AI for chatbots, text generation, and automation tasks",
      },
      {
        icon: SiAnthropic,
        name: "Claude AI",
        desc: "AI assistant for advanced reasoning and text analysis",
      },
      {
        icon: SiGithubcopilot,
        name: "GitHub Copilot",
        desc: "AI code completion and pair programming assistant",
      },
    ],
  },
];

export default tools;
