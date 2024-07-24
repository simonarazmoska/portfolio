import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const _StyledButton = styled(Button)(({ theme, isClicked }) => ({
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

export const StyledButton = ({ children, ...props }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <_StyledButton className={props.className} onClick={handleClick} isClicked={isClicked}>
      {children}
    </_StyledButton>
  );
};
