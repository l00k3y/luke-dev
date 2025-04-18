import ProjectCard from "~/components/projectCard/projectCard";

export interface ProjectType {
  title: string;
  description: string;
  dates: string;
  tags: string[];
}

const projects: ProjectType[] = [
  {
    title:
      "Ecommerce Platform Migration & Frontend Optimization – The Black Lash",
    description:
      "Successfully migrated The Black Lash's ecommerce platform from Wix to Shopify, handling all aspects of manual data transformation to ensure seamless product and customer data continuity. Designed and implemented a custom hero carousel, and optimized the site for full responsiveness across devices—enhancing user experience and driving increased product engagement. Post-launch, provided ongoing technical support and guidance to ensure stability and empower the client’s continued success on Shopify.",
    dates: "2021-2023",
    tags: [
      "Ecommerce",
      "Migration",
      "Shopify",
      "Frontend Optimization",
      "Responsive Design",
      "UI/UX",
    ],
  },
  {
    title: "Frontend Optimization & Accessibility Enhancements – Wild & Seek",
    description:
      "Collaborated with Wild & Seek, an outdoor urban playground, to enhance the frontend of their web platform. Implemented accessibility improvements, refined color usage and layout structure, and resolved key UI inconsistencies. Enhanced UX across the booking system to improve customer flow and usability. Continued to provide technical support post-launch to ensure smooth operation and scalability.",
    dates: "2025",
    tags: [
      "Frontend Development",
      "Accessibility",
      "UI/UX",
      "Web Optimization",
      "Booking System",
      "Ongoing Support",
      "Responsive Design",
      "User Experience",
    ],
  },
];

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <p>List of projects will be displayed here.</p>
      <ul>
        {projects.map((project, index) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            dates={project.dates}
            tags={project.tags}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
