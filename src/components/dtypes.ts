interface HeroData {
  title: string;
  subheading: string;
  imgSrc: string;
  imgAlt: string;
  textColour?: string;
}

interface TextSectionData {
  text: string;
  textColour?: string;
}

interface ImageSectionData {
  imgSrc: string;
  imgAlt: string;
}

interface HybridSectionData {
  title: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
  textColour?: string;
}

export interface PageData {
  link?: string;
  hero: HeroData;
  section1: TextSectionData;
  section2: ImageSectionData;
  section3: HybridSectionData;
  section4: ImageSectionData;
  section5: HybridSectionData;
  section6: ImageSectionData;
  section7: HybridSectionData;
  background?: string;
  textColour?: string;
}

export interface CardProps {
  title: string;
  text: string;
  imageSource: string;
  imageAlt: string | undefined;
  link: string;
  backgroundOpacity: number;
}
