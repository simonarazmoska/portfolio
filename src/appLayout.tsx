import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { theme } from "@/theme";
import { useEffect, useRef, useState } from "react";

export const AppLayout = ({ backgroundColor, children }: { backgroundColor: string; children: React.ReactNode }) => {
  const [headerOnLight, setHeaderOnLight] = useState(false);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Compute headerOnLight on page load and on scroll
    const computeHeaderOnLight = () => {
      const sentinelsArr = Array.from(document.querySelectorAll("[data-header-bg]"));
      let found: Element | null = null;
      let minDist = Infinity;
      sentinelsArr.forEach((el) => {
        const rect = (el as Element).getBoundingClientRect();
        const dist = Math.abs(rect.top - 64);
        if (rect.top <= 64 && dist < minDist) {
          found = el;
          minDist = dist;
        }
      });
      if (found) {
        setHeaderOnLight((found as Element).getAttribute("data-header-bg") === "light");
      } else {
        setHeaderOnLight(false);
      }
    };

    const handleScroll = () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
      debounceTimeout.current = setTimeout(computeHeaderOnLight, 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    computeHeaderOnLight(); // Initial check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, []);

  return (
    <>
      {/* <Alert
        icon={false}
        sx={{
          backgroundColor: "#231F21",
          color: "#ffffff",
          fontWeight: "regular",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          borderRadius: "0px",
          borderBottom: "0.5px solid #575757"
        }}
      >
        New website coming soon - Learning to code along the way!
      </Alert> */}
      {/* Set textClassOverride to black text only if background is white or yellow */}
      <Header
        backgroundColor={backgroundColor}
        isOverWhite={headerOnLight}
        textClassOverride={
          [theme.palette.white.main, theme.palette.parkvoltYellow.main].includes(backgroundColor) ? "tw-text-textMain" : undefined
        }
      />
      {children}
      <Footer />
    </>
  );
};
