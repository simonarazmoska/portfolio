interface HeroData {
  title: string;
  subHeading: string;
  blurb: string;
  imgSrc: string;
  imgAlt: string;
  maxImageHeight?: number;
  textColour?: string;
  viewText?: string;
}

export interface OverviewColumnData {
  title: string;
  contentArray: string[];
}

export interface OverviewSectionData {
  columns: OverviewColumnData[];
  imageSrc: string;
  imageAlt: string;
}

interface ImageSectionData {
  imgSrc: string;
  imgAlt: string;
  maxImageHeight?: number;
  beforeAfterImages?: string[];
  beforeAfterBackground?: string;
}

interface HybridSectionData {
  title: string;
  subHeading: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
  maxImageHeight?: number;
  textColour?: string;
}

export interface PageData {
  link?: string;
  hero: HeroData;
  overview: OverviewSectionData;
  section1: ImageSectionData;
  section2: HybridSectionData;
  section3: HybridSectionData;
  section4: HybridSectionData;
  section5: ImageSectionData;
  section6: ImageSectionData;
  background?: string;
  textColour?: string;
}

export interface CardProps {
  title: string;
  subHeading?: string;
  text: string;
  imageSource: string;
  imageAlt?: string;
  link: string;
}
