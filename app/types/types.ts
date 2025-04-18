export interface ProjectType {
  title: string;
  description: string;
  dates: string;
  tags: string[];
}
export interface ProjectInformationType {
  projects: ProjectType[];
}
export interface ProjectCardProps extends ProjectType {
  key: number;
}