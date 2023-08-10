'use client';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';
import {typography} from './typography';
import {palette} from './palette';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export function ThemeProvider({ children }) {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(() => {
    return createTheme({
      palette: {
        mode: mode,
        ...(mode === 'light' ? palette("light") : palette("dark")),
      },
      typography: typography,
    });
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
}

module.exports = {
  ThemeProvider,
  ColorModeContext,
};
