interface HeroData {
  title: string;
  subheading: string;
  imgSrc: string;
  imgAlt: string;
  maxImageHeight?: number;
  textColour?: string;
  viewText?: string;
}

interface TextSectionData {
  text: string;
  textColour?: string;
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
  subheading: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
  maxImageHeight?: number;
  textColour?: string;
}

export interface PageData {
  link?: string;
  hero: HeroData;
  section1: TextSectionData;
  section2: ImageSectionData;
  section3: HybridSectionData;
  section4: HybridSectionData;
  section5: HybridSectionData;
  section6: ImageSectionData;
  section7: ImageSectionData;
  background?: string;
  textColour?: string;
}

export interface CardProps {
  title: string;
  subheading: string;
  text: string;
  imageSource: string;
  imageAlt: string | undefined;
  link: string;
  backgroundOpacity: number;
}
