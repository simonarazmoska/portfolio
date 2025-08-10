import { theme } from "@/theme";

// Map Tailwind class names to MUI theme palette keys
const tailwindToMuiColorMap: Record<string, string> = {
  "tw-text-primary": theme.palette.primary.main,
  "tw-text-secondary": theme.palette.secondary.main,
  "tw-textMain": theme.palette.textMain.main,
  "tw-yellow-parkVolt": theme.palette.parkvoltYellow.main,
  "tw-blue-sanitarium": theme.palette.sanitariumBlue.main,
  "tw-green-plantwell": theme.palette.plantwellGreen.main,
  "tw-navy-drWallet": theme.palette.drWalletNavy.main,
  "tw-white": theme.palette.white.main,
  "tw-black": theme.palette.black.main,
  "tw-orange": theme.palette.orange.main
};

// Converts a Tailwind color class to a MUI color value
export const tailwindToMuiColor = (twClass: string): string => {
  return tailwindToMuiColorMap[twClass] || "#000000"; // fallback to black if not found
};
