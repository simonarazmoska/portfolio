import { PageData } from "@/components/dtypes";
import { TemplatePage } from "@/components/templatePage";

const data: PageData = {
  link: "https://medium.com/@simonarazmoska/custom-typography-and-layout-design-b6696483387e",
  background: "tw-bg-gradient-book-series",
  textColour: "tw-text-white",
  hero: {
    title: "Book Series",
    subheading: "BRANDING, TYPOGRAPHY AND LAYOUT.",
    imgSrc: "/design/book_series/book_series_hero.png",
    imgAlt: "Book Series Hero",
    viewText: "Read more"
  },
  section1: {
    text: "The Book Series is a collection of three gelato recipe books, each featuring a captivating cover design. Additionally, the project included creating a double-page contents spread, an internal page spread, and a series of dynamic web page banners to promote the books."
  },
  section2: {
    imgSrc: "/design/book_series/book_series_1.png",
    imgAlt: "Book Series Image 1",
    maxImageHeight: 1035
  },
  section3: {
    title: "Problem",
    text: "The primary challenge was to develop the branding from the ground up, as there was no existing visual identity to build upon. The brief called for a bold and engaging design that would capture the essence of the gelato recipes and appeal to a wide audience.",
    imgSrc: "/design/book_series/book_series_2.png",
    imgAlt: "Book Series Image 2"
  },
  section4: {
    imgSrc: "/design/book_series/book_series_3.png",
    imgAlt: "Book Series Image 3",
    maxImageHeight: 1035
  },
  section5: {
    title: "Process",
    text: "The process began with extensive research to understand the target audience and the unique characteristics of the gelato recipes. A moodboard was created to explore different visual styles and themes. The design work involved linking the recipes and ingredients to the visual aspects, using vibrant colours and custom typography to create a cohesive and dynamic look.",
    imgSrc: "/design/book_series/book_series_4.png",
    imgAlt: "Book Series Image 4"
  },
  section6: {
    imgSrc: "/design/book_series/book_series_5.png",
    imgAlt: "Book Series Image 5",
    maxImageHeight: 1035
  },
  section7: {
    title: "Results",
    text: "The outcome is a strong layout with custom typography and bold branding that effectively conveys the delicious and playful nature of the gelato recipes. The book covers, contents spread, internal page spread, and web banners all work together to create an engaging and visually appealing presentation that stands out in the market.",
    imgSrc: "/design/book_series/book_series_6.png",
    imgAlt: "Book Series Image 6"
  }
};

export const BookSeriesPage = () => {
  return <TemplatePage data={data} />;
};
