export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamically pick Lucide icons
  imagePrompt: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  imagePrompt: string;
}

export enum ViewState {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  SERVICES = 'SERVICES',
  GALLERY = 'GALLERY',
  CONTACT = 'CONTACT',
}
