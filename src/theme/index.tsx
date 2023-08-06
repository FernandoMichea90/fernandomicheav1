'use client';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import orange from '@mui/material/colors/orange';
import { ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(() => {
    const lightPalette = {
      mode: 'light',
      primary: {
        main: '#6200ea',
      },
      secondary: {
        main: '#f50057',
      },
      status: {
        danger: orange[500],
      },
    };

    const darkPalette = {
      mode: 'dark',
      primary: {
        main: '#6200ea',
      },
      secondary: {
        main: '#f50057',
      },
      status: {
        danger: orange[500],
      },
    };

    return createTheme({
        palette: {
          mode: mode,
          ...(mode === 'light' ? lightPalette : darkPalette),
        },
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
