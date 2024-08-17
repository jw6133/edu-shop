import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function appBarLabel(label: string, children: React.ReactNode) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
      {children} {/* AppBar 내부에 Switch를 렌더링 */}
    </Toolbar>
  );
}

interface EnableColorOnDarkAppBarProps {
  isDark: boolean;
  children?: React.ReactNode; // children prop 추가
}

export default function EnableColorOnDarkAppBar({ isDark, children }: EnableColorOnDarkAppBarProps) {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      {isDark ? (
        <AppBar position="static" color="primary" enableColorOnDark>
          {appBarLabel('enableColorOnDark', children)}
        </AppBar>
      ) : (
        <AppBar position="static" color="primary">
          {appBarLabel('default', children)}
        </AppBar>
      )}
    </Stack>
  );
}
