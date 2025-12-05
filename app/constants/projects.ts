export interface Project {
  slug: string;
  title: string;
  description: {
    en: string;
    de: string;
  };
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  techStack: {
    name: string;
    icon: string;
  }[];
  images?: string[];
  contributionEnabled?: boolean;
  contributionText?: {
    en: string;
    de: string;
  };
}

const contributionText = {
  en: "Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your proposed changes.",
  de: "Beiträge sind willkommen! Wenn Sie zu diesem Projekt beitragen möchten, forken Sie bitte das Repository und senden Sie einen Pull-Request mit Ihren vorgeschlagenen Änderungen.",
};

const projectList: Project[] = [
  {
    slug: "auto-compare-app",
    title: "Auto Vergleich App",
    description: {
      en: "An intelligent car comparison web application where users can select two cars and choose which aspects they want to compare — such as fuel consumption, insurance, maintenance, and total cost. The app sends a request to an AI model that performs a detailed cost comparison and provides personalized recommendations. Built with Next.js, Supabase for authentication, React Query for data fetching and caching, Tailwind CSS for UI styling, Next Intl for localization, and integrated with a Car API.",
      de: "Eine intelligente Auto-Vergleichs-App, in der Benutzer zwei Fahrzeuge auswählen und die Vergleichskriterien bestimmen können – wie z. B. Kraftstoffverbrauch, Versicherung, Wartung und Gesamtkosten. Die Anwendung sendet eine Anfrage an ein KI-Modell, das eine detaillierte Kostenanalyse durchführt und personalisierte Empfehlungen gibt. Entwickelt mit Next.js, Supabase für Authentifizierung, React Query für Datenabfragen, Tailwind CSS für das UI, Next Intl für Internationalisierung und integriert mit einer Car API.",
    },
    image: "/images/projects/auto-vergleich/auto-vergleich.png",
    githubUrl: "https://github.com/emrekrt1655/auto-vergleich",
    liveUrl: "",
    techStack: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-original" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { name: "React Query", icon: "devicon-react-original colored" },
      { name: "Supabase", icon: "devicon-supabase-plain colored" },
      { name: "Next Intl", icon: "devicon-nextjs-original" },
      { name: "OpenAI API", icon: "devicon-openai-plain colored" },
      { name: "Car API", icon: "devicon-typescript-plain colored" },
    ],
    images: [
      "/images/projects/auto-vergleich/1.png",
    ],
    contributionEnabled: true,
  },
  {
    slug: "send-to-future",
    title: "Send to Future",
    description: {
      en: "A modern Next.js + Tailwind + Supabase + Resend web application where users can leave notes for themselves or others and have them delivered via email at a scheduled time. Users can login via Google or email/password.",
      de: "Eine moderne Next.js + Tailwind + Supabase + Resend-Webanwendung, bei der Benutzer Notizen für sich selbst oder andere hinterlassen können und diese zu einem geplanten Zeitpunkt per E-Mail zugestellt werden. Benutzer können sich über Google oder E-Mail/Passwort anmelden.",
    },
    image: "/images/projects/sendtofuture/paperplan.jpg",
    githubUrl: "https://github.com/emrekrt1655/sendtofuture",
    liveUrl: "",
    techStack: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-original" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
    ],
    images: [
      "/images/projects/sendtofuture/sendtofuture1.png",
      "/images/projects/sendtofuture/sendtofuture5.png",
      "/images/projects/sendtofuture/sendtofuture4.png",
      "/images/projects/sendtofuture/sendtofuture2.png",
      "/images/projects/sendtofuture/sendtofuture3.png",
    ],
    contributionEnabled: true,
  },
  {
    slug: "timesheet-app",
    title: "FUNDED Timesheet App",
    description: {
      en: "A full-stack timesheet management application developed for the FUNDED Code-Challenge. The backend is built with Symfony, while the frontend is powered by React, Next.js, and Tailwind CSS. Users can create and manage their working hours and days off, see weekends and public holidays, and edit multiple days at once. React Query is used for caching, and React Hook Form with Zod handles form validation.",
      de: "Eine Full-Stack-Stundenzettel-Anwendung, die für die FUNDED Code-Challenge entwickelt wurde. Das Backend wurde mit Symfony erstellt, während das Frontend auf React, Next.js und Tailwind CSS basiert. Benutzer können ihre Arbeitsstunden und freien Tage erstellen und verwalten, Wochenenden und Feiertage einsehen und mehrere Tage gleichzeitig bearbeiten. React Query wird für das Caching verwendet, und React Hook Form mit Zod kümmert sich um die Formularvalidierung.",
    },
    image: "/images/projects/timesheet/timesheet.png",
    githubUrl: "https://github.com/emrekrt1655/funded-timesheet",
    techStack: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-original" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { name: "React Query", icon: "devicon-react-original colored" },
      { name: "React Hook Form", icon: "devicon-react-original colored" },
      { name: "Zod", icon: "devicon-typescript-plain colored" },
      { name: "Symfony", icon: "devicon-symfony-original" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
    ],
    images: [
      "/images/projects/timesheet/1.png",
      "/images/projects/timesheet/2.png",
      "/images/projects/timesheet/3.png",
      "/images/projects/timesheet/4.png",
      "/images/projects/timesheet/5.png",
    ],
    contributionEnabled: true,
  },
  {
    slug: "chatbot-app",
    title: "AI Chatbot App",
    description: {
      en: "An advanced AI chatbot application built with Next.js, TypeScript, Tailwind CSS, and OpenAI's GPT-4o mini model. The app provides real-time streaming responses — users see messages appear character by character, creating a natural conversation flow. All previous chats are stored for continuity. The sleek, responsive UI ensures a smooth experience across all devices.",
      de: "Eine fortschrittliche KI-Chatbot-Anwendung, entwickelt mit Next.js, TypeScript, Tailwind CSS und dem GPT-4o mini-Modell von OpenAI. Die App bietet Echtzeit-Streaming-Antworten – Benutzer sehen, wie Nachrichten Zeichen für Zeichen erscheinen, was einen natürlichen Gesprächsfluss schafft. Frühere Chats werden zur Kontinuität gespeichert. Das elegante, responsive UI sorgt für eine reibungslose Nutzung auf allen Geräten.",
    },
    image: "/images/projects/ai-chatbot/chatbot.png",
    githubUrl: "https://github.com/emrekrt1655/chatbot-next",
    liveUrl: "",
    techStack: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-original" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { name: "OpenAI API", icon: "devicon-openai-plain colored" },
    ],
    images: ["/images/projects/ai-chatbot/chatbot1.png"],
    contributionEnabled: true,
  },
];

export const projects = projectList.map((project) => {
  if (project.contributionEnabled && !project.contributionText) {
    return {
      ...project,
      contributionText: contributionText,
    };
  }
  return project;
});
