import {
  Code,
  FileCode2,
  Wind,
  Zap,
  Globe,
  Github,
  Cpu,
  Server,
} from "@lucide/svelte"; // example icons
// import ZedIcon from "path-to-icons/Zed"; // replace with actual icon
// import R2Icon from "path-to-icons/R2"; // Cloudflare R2
// import SupabaseIcon from "path-to-icons/Supabase"; // Supabase
// import PostgresIcon from "path-to-icons/Postgres"; // PostgreSQL
// import SolanaIcon from "path-to-icons/Solana"; // Solana blockchain

const tools = [
  {
    category: "Programming Languages",
    items: [
      {
        icon: Code,
        name: "Python",
        desc: "Versatile language for automation, data, and backend development",
      },
      {
        icon: Code,
        name: "C",
        desc: "Low-level language for systems programming and performance-critical code",
      },
      {
        icon: Code,
        name: "C++",
        desc: "Extension of C with object-oriented and generic programming features",
      },
      {
        icon: Code,
        name: "Zig",
        desc: "Modern low-level systems programming language with safety features",
      },
      {
        icon: Code,
        name: "JavaScript",
        desc: "Dynamic scripting for interactive web applications",
      },
      {
        icon: FileCode2,
        name: "TypeScript",
        desc: "Typed superset of JavaScript for safer and scalable code",
      },
      {
        icon: Code,
        name: "Go",
        desc: "Compiled language for efficient backend and concurrent systems",
      },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      {
        icon: Wind,
        name: "SvelteKit",
        desc: "Svelte framework for building reactive full-stack apps",
      },
      {
        icon: Zap,
        name: "React",
        desc: "Library for declarative user interface components",
      },
      {
        icon: Globe,
        name: "Next.js",
        desc: "React framework for server-side rendered and static apps",
      },
    ],
  },
  {
    category: "Coding Environments",
    items: [
      // {
      //   icon: Github,
      //   name: "Git",
      //   desc: "Distributed version control for managing source code",
      // },
      // {
      //   icon: ZedIcon,
      //   name: "Zed",
      //   desc: "Fast and modern code editor for minimalistic workflow",
      // },
      // {
      //   icon: Code,
      //   name: "VS Code",
      //   desc: "Extensible editor with powerful development tools",
      // },
      // {
      //   icon: Cpu,
      //   name: "Terminal",
      //   desc: "Command-line interface for system operations",
      // },
    ],
  },
  {
    category: "Databases & Storage",
    items: [
      // {
      //   icon: PostgresIcon,
      //   name: "PostgreSQL",
      //   desc: "Powerful relational database for structured data",
      // },
      // {
      //   icon: SupabaseIcon,
      //   name: "Supabase",
      //   desc: "Backend-as-a-Service with auth, database, and real-time features",
      // },
      // {
      //   icon: R2Icon,
      //   name: "Cloudflare R2",
      //   desc: "S3-compatible object storage for scalable file storage",
      // },
    ],
  },
  {
    category: "Analytics & AI Tools",
    items: [
      {
        icon: Globe,
        name: "PostHog",
        desc: "Open-source analytics for tracking user behavior",
      },
      {
        icon: Code,
        name: "OpenAI API",
        desc: "Generative AI for chatbots, text generation, and automation tasks",
      },
      {
        icon: Code,
        name: "Claude AI",
        desc: "AI assistant for advanced reasoning and text analysis",
      },
      {
        icon: Code,
        name: "GitHub Copilot",
        desc: "AI code completion and pair programming assistant",
      },
    ],
  },
];

export default tools;
