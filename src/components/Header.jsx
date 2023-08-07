import { Typography, Box } from "@mui/material";
import { tokens, themeSettings } from "../theme";

const Header = ({ title, subtitle }) => { // Modified the props here
  const colors = tokens;
  return (
    <Box mb="30px">
     <Typography color={colors.grey[100]} fontWeight="bold" sx={{ mb: "5px", ...themeSettings.h2 }}>
        {title}
      </Typography>
      <Typography color={colors.grey[400]} sx={themeSettings.h5}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
