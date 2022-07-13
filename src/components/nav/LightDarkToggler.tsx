import {
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { FunctionComponent } from 'react';
import { useThemeMode } from 'contexts/theme-mode-context';

const LightDarkToggler: FunctionComponent = () => {
  const { mode, setMode } = useThemeMode();
  let content = (
    <IconButton onClick={() => setMode('dark')}>
      <DarkModeIcon />
    </IconButton>
  );
  if (mode === 'dark') {
    content = (
      <IconButton onClick={() => setMode('light')}>
        <LightModeIcon />
      </IconButton>
    );
  }
  return content;
};

export const LightDarkTogglerMenuItem: FunctionComponent = () => {
  const { mode, setMode } = useThemeMode();
  let content = (
    <MenuItem onClick={() => setMode('dark')}>
      <ListItemIcon>
        <DarkModeIcon />
      </ListItemIcon>
      <ListItemText>Dark mode</ListItemText>
    </MenuItem>
  );
  if (mode === 'dark') {
    content = (
      <MenuItem onClick={() => setMode('light')}>
        <ListItemIcon>
          <LightModeIcon />
        </ListItemIcon>
        <ListItemText>Light mode</ListItemText>
      </MenuItem>
    );
  }
  return content;
};
export default LightDarkToggler;
