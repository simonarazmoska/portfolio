interface HeroData {
  title: string;
  subheading: string;
  imgSrc: string;
  imgAlt: string;
}

interface TextSectionData {
  text: string;
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
}

export interface PageData {
  hero: HeroData;
  section1: TextSectionData;
  section2: ImageSectionData;
  section3: HybridSectionData;
  section4: ImageSectionData;
  section5: HybridSectionData;
  section6: ImageSectionData;
  section7: HybridSectionData;
}
