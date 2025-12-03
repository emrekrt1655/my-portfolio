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

export const projects: Project[] = [
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
    contributionText: {
      en: "If you like this project and want to contribute, feel free to fork the repository, create a new branch, and submit a pull request. All contributions are welcome!",
      de: "Wenn Ihnen dieses Projekt gefällt und Sie einen Beitrag leisten möchten, können Sie gerne das Repository forken, einen neuen Branch erstellen und einen Pull Request einreichen. Alle Beiträge sind willkommen!",
    },
  },
];
