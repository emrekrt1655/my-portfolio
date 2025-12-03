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
