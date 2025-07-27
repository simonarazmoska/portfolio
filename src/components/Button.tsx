import { ButtonProps, Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";

// Custom styled MUI Button: defaults to theme.typography.button, but sx can override
const StyledButton = styled(MuiButton)(({ theme }) => ({
  ...theme.typography.button,
  textTransform: "none",
  borderRadius: theme.shape?.borderRadius || 4,
  transition: "all 0.15s",
  boxShadow: "none",

  "&:hover": {
    textDecoration: "underline",
    backgroundColor: "transparent"
  },
  "&.Mui-selected, &:active": {
    fontWeight: 700 // Bold on select/active
  }
}));

export const Button = (props: ButtonProps) => {
  return <StyledButton disableRipple {...props} />;
};
