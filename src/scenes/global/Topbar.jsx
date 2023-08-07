import { Box, IconButton, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { tokens } from "../../theme";

const Topbar = () => {
  const colors = tokens;
  const username = "Usuário"; 

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      bgcolor={colors.greenAccent[400]}
      color="#fff"
      
    >
      {/* Nome do usuário */}
      <Box display="flex" alignItems="center" justifyContent="flex-end" flex={1}>
        <Typography variant="subtitle1">{username}</Typography>
        <IconButton>
          <AccountCircle />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
