// @mui
"use client";
import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Badge, { badgeClasses } from '@mui/material/Badge';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { ColorModeContext } from '../../theme';
import Typography from '@mui/material/Typography';
import { bgBlur } from '@/theme/css';





// ----------------------------------------------------------------------

export default function HeaderApp() {
    //   const theme = useTheme();
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    return (
        <AppBar>
            <Toolbar
                sx={{
                    transition: theme.transitions.create(['height'], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter,
                      }),
                    ...bgBlur({
                        color: theme.palette.background.default,
                    }),
                    color: theme.palette.text.primary,


                }}
                
            >
                <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
                    <Badge
                        badgeContent={
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener"
                                underline="none"
                                sx={{ ml: 1 }}
                            >
                                
                            </Link>
                        }
                    >
                        <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            FM
                        </Typography>
                    </Badge>
                    <Box
                        sx={{
                            borderRadius: 1,
                            p: 3,
                        }}
                    >

                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Stack alignItems="center" direction={{ xs: 'row', md: 'row-reverse' }}>
                        {/* {theme.palette.mode} mode */}
                        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                        <Button variant="contained" target="_blank" rel="noopener" href="#">
                            Purchase Now
                        </Button>

                    </Stack>
                </Container>
            </Toolbar>
        </AppBar>
    );
}
