import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

interface StyledButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface StyledMuiButtonProps {
  theme: any;
  isClicked: boolean;
}

const _StyledButton = styled(Button)<{ isClicked: boolean }>(({ theme, isClicked }: StyledMuiButtonProps) => ({
  padding: "8px 24px",
  backgroundColor: "transparent",

  fontWeight: "400",
  "&:hover": {
    textDecoration: "underline",
    backgroundColor: "transparent",
    textUnderlineOffset: "4px",
    textDecorationThickness: "1.25px"
  },
  "&:active": {
    boxShadow: "none"
  },
  "&:focus": {},
  ...(isClicked && {
    fontWeight: "700",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
    textDecorationThickness: "1.25px"
  })
}));

export const StyledButton = ({ children, className, style }: StyledButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <_StyledButton disableRipple color="inherit" className={className} onClick={handleClick} isClicked={isClicked} style={style}>
      {children}
    </_StyledButton>
  );
};
