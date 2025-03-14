import { InlineCode } from "@/once-ui/components";
const person = {
  firstName: "Mohamed",
  lastName: "Hamed",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Mathematics Student, Full Stack Developer & Multimedia Designer",
  experience:
    "Over 8 years of multidisciplinary experience in full-stack development, graphic design, motion graphics, video editing, 3D modeling, and AI integration for business solutions.",
  avatar: "/images/avatar.jpg",
  location: "Egypt, Alexandria",
  languages: ["Arabic", "English"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Technical Insights</>,
  description: (
    <>
      I share in-depth articles about full-stack development, AI applications in
      agriculture and business systems, as well as innovative approaches in
      multimedia design, 3D modeling, and motion graphics.
    </>
  ),
};
const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/mohamedhamed",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mohamedhamed/",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Professional Portfolio`,
  description: `Showcasing my journey in mathematics, design, and software development.`,
  headline: (
    <>Mathematics Student, Full Stack Developer & Multimedia Designer</>
  ),
  subline: (
    <>
      I'm Mohamed, a dedicated professional at <InlineCode>Alex Co.</InlineCode>{" "}
      and a passionate mathematics student at{" "}
      <InlineCode>Al-Azhar University</InlineCode>, working on AI-powered
      solutions for agricultural and business challenges.
    </>
  ),
};

const about = {
  label: "About",
  title: "Professional Profile",
  description: `${person.name} | ${person.role} | ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/mohamed-hamed",
  },
  intro: {
    display: true,
    title: "Career Overview",
    description: (
      <>
        With over 8 years of experience, I merge rigorous mathematical training
        with extensive expertise in full-stack development and multimedia
        design. My work spans enterprise-grade web applications, immersive 3D
        visualizations, motion graphics, and AI-driven analytics, particularly
        in agricultural management systems.
      </>
    ),
  },
  work: {
    display: true,
    title: "Professional Experience",
    experiences: [
      {
        company: "Alex Co.",
        timeframe: "2020 - Present",
        role: "Senior Graphic Designer, Tech Lead & Full Stack Developer",
        achievements: [
          <>
            Led the design team in developing comprehensive branding solutions
            for 50+ clients, improving client retention by 40%.
          </>,
          <>
            Developed enterprise-grade web applications using{" "}
            <InlineCode>Next.js</InlineCode> and{" "}
            <InlineCode>.NET API</InlineCode>, enhancing operational efficiency
            by 35%.
          </>,
          <>
            Integrated 3D modeling and motion graphics to create engaging visual
            content, boosting customer engagement by 50%.
          </>,
        ],
        images: [
          {
            src: "/images/projects/alex-co/cover-01.jpg",
            alt: "Alex Co. Projects",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Freelance Projects",
        timeframe: "2016 - 2020",
        role: "Full Stack Developer & Multimedia Specialist",
        achievements: [
          <>
            Developed 20+ custom web applications using modern technologies for
            diverse industries.
          </>,
          <>
            Created dynamic motion graphics and educational content that reached
            over 500k viewers.
          </>,
          <>
            Built unified design systems for video production, reducing editing
            time by 25%.
          </>,
        ],
        images: [],
      },
      {
        company: "Agricultural Management System",
        timeframe: "2023 - Present",
        role: "Lead Developer & Architect",
        achievements: [
          <>
            Architecting an AI-powered analytics platform for agricultural
            operations management.
          </>,
          <>
            Implementing predictive models to optimize crop yield and enhance
            sales team performance.
          </>,
        ],
        images: [
          {
            src: "/images/projects/agriculture-system/cover-01.jpg",
            alt: "Agriculture System Dashboard",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      {
        name: "Al-Azhar University",
        description: (
          <>
            B.Sc. in Mathematics Education (Expected 2024)
            <br />
            Faculty of Education - Department of Mathematics
          </>
        ),
      },
      {
        name: "Harvard CS50",
        description: (
          <>Completed a comprehensive computer science fundamentals course.</>
        ),
      },
      {
        name: "Professional Certifications",
        description: (
          <>
            Adobe Certified Expert (Premiere Pro, After Effects)
            <br />
            Autodesk Maya Certified Professional
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Expertise",
    skills: [
      {
        title: "Full-Stack Development",
        description: (
          <>
            Building scalable applications with <InlineCode>Next.js</InlineCode>{" "}
            frontends and <InlineCode>.NET API</InlineCode> backends. Skilled in
            database design, cloud integration, and enterprise software
            solutions.
          </>
        ),
        images: [
          {
            src: "/images/skills/dev-stack.jpg",
            alt: "Development Stack",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "3D Design & Motion Graphics",
        description: (
          <>
            Creating immersive 3D visualizations and motion graphics using
            Blender, Maya, and Three.js, enhancing storytelling and client
            engagement.
          </>
        ),
        images: [
          {
            src: "/images/skills/3d-design.jpg",
            alt: "3D Design Projects",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "AI Integration",
        description: (
          <>
            Developing machine learning models for business analytics, crop
            yield optimization, and predictive maintenance in agricultural
            systems.
          </>
        ),
        images: [
          {
            src: "/images/skills/ai-integration.jpg",
            alt: "AI Analytics Dashboard",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Technical Articles & Case Studies",
  description: `Explore ${person.name}'s insights on full-stack development, multimedia design, and AI-driven innovation.`,
};

const work = {
  label: "Projects",
  title: "Portfolio Showcase",
  description: `${person.name}'s professional projects spanning web development, multimedia design, and AI solutions.`,
};

const gallery = {
  label: "Gallery",
  title: "Design & Development Portfolio",
  description: `Visual collection of ${person.name}'s creative and technical projects.`,
  images: [
    {
      src: "/images/gallery/design-01.jpg",
      alt: "Graphic Design Project",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/code-01.jpg",
      alt: "Development Project",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/agri-dashboard.jpg",
      alt: "Agricultural Analytics Dashboard",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/3d-farm.jpg",
      alt: "3D Farm Simulation",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/motion-graphics.jpg",
      alt: "Educational Animation",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
