import React from "react";
import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens, themeSettings } from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MedicationlinedIcon from '@mui/icons-material/Medication';
import DescriptionlinedIcon from '@mui/icons-material/Description';
import PersonlinedIcon from '@mui/icons-material/Person';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const colors = tokens;
  console.log(title)
  return (

    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[300] }}
      onClick={() => setSelected(title)}
      icon={icon}
      
    >
      <Typography>{title}</Typography>
      <Link to={to} />
      
    </MenuItem>
  );
};

const CustomSidebar = () => {
  const colors = tokens;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box style={{ height: "100vh", display: "flex" }}>
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="round">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[300],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography color={colors.grey[300]} sx={themeSettings.h3 }>
                  Administrador
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* ITENS DO MENU*/}
          <Box padding={`${isCollapsed ? '0' : '0 8%'}`}>
          <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
/>

            <Item
              title="Doutores"
              to="/doctors"
              icon={<MedicationlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Pacientes"
              to="/patients"
              icon={<PersonlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Procedimentos"
              to="/procedures"
              icon={<DescriptionlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default CustomSidebar;
