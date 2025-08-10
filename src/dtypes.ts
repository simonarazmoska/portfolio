export interface ContentBlockData {
  title: string;
  subtitle: string;
  blurb: React.ReactNode;
  imgSrc: string;
  imgAlt: string;
  titleTextColour: string;
  subtitleTextColour: string;
  // maxImageHeight?: number;
  backgroundColour?: string;
}

export interface ImageSectionData {
  imgSrc: string;
  imgAlt: string;
  // maxImageHeight?: number;
}

export interface BeforeAfterImageSectionData {
  beforeAfterImages: string[];
  imgAlt: string;
  beforeAfterBackground?: string;
}

export interface OverviewColumnData {
  title: string;
  contentArray: string[];
}

export interface OverviewSectionData {
  columns: OverviewColumnData[];
  imgSrc: string;
  imgAlt: string;
  borderColour: string;
}

export interface PageData {
  hero: ContentBlockData;
  overview: OverviewSectionData;
  section1: ContentBlockData;
  section2: ContentBlockData;
  section3: ContentBlockData;
  section4: ContentBlockData;
  section5: ImageSectionData | BeforeAfterImageSectionData;
}

export interface AboutPageData {
  hero: ContentBlockData;
  section1: ContentBlockData;
  section2: ContentBlockData;
  section3: ContentBlockData;
}

export interface CardProps {
  title: string;
  subHeading?: string;
  text: string;
  imageSource: string;
  imgAlt?: string;
  link: string;
}
