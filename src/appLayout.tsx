import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useEffect, useRef, useState } from "react";

export const AppLayout = ({ backgroundColor, children }: { backgroundColor: string; children: React.ReactNode }) => {
  const [headerOnLight, setHeaderOnLight] = useState(false);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }

      debounceTimeout.current = setTimeout(() => {
        const sentinelsArr = Array.from(document.querySelectorAll("[data-header-bg]"));
        let found: Element | null = null;
        let minDist = Infinity;
        sentinelsArr.forEach((el) => {
          const rect = (el as Element).getBoundingClientRect();
          // Find the section whose top is closest to (but not above) the header's bottom (64px)
          const dist = Math.abs(rect.top - 64);
          if (rect.top <= 64 && dist < minDist) {
            found = el;
            minDist = dist;
          }
        });

        if (found) {
          setHeaderOnLight((found as Element).getAttribute("data-header-bg") === "light");
        } else {
          setHeaderOnLight(false); // fallback: use dark mode if nothing covers the header
        }
      }, 30); // Debounce for performance
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

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
      <Header backgroundColor="transparent" isOverWhite={headerOnLight} />
      {children}
      <Footer />
    </>
  );
};
