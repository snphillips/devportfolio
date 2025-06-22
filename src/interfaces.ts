interface ProjectObject {
  id: string;
  title: string;
  imageName: string[];
  mobileImageName: [] | string[];
  imageUrl: string[];
  mobileImageUrl: [];
  briefStatement: string;
  statement: string;
  techUsed: string[];
  features: string[];
  url: string;
  githuburl: string;
  year: string;
  includeInGallery: boolean;
}

export default ProjectObject;
