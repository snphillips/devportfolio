interface ProjectObject {
  id: string;
  title: string;
  imageName: string[];
  mobileImageName: [] | string[];
  imageUrl: string[];
  mobileImageUrl: string[];
  briefStatement: string;
  statement: string;
  techUsed: string[];
  features: string[];
  url: string;
  githubUrl: string;
  year: string;
  includeInGallery: boolean;
}

export default ProjectObject;
