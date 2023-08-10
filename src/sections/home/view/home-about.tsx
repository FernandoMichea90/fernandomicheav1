import React from 'react'
import { motion as m } from 'framer-motion';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Iconify from '@/components/iconify';


const Home_about = () => {
    const theme = useTheme();

    return (
        <Container
        
          sx={{
            py: { xs: 10, md: 15 },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Grid container columnSpacing={{ md: 3 }} alignItems="flex-start">
         
            <Grid xs={12} md={6} lg={5}>
              <m.div>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  What is Minimal?
                </Typography>
              </m.div>
    
              <m.div>
                <Typography
                  sx={{
                    color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
                  }}
                >
                  Our theme is the most advanced and user-friendly theme you will find on the market, we
                  have documentation and video to help set your site really easily, pre-installed demos
                  you can import in one click and everything from the theme options to page content can
                  be edited from the front-end. This is the theme you are looking for.
                </Typography>
              </m.div>
    
              <m.div >
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
                >
                  Our Work
                </Button>
              </m.div>
            </Grid>
          </Grid>
        </Container>
        // </Box>
      );
}

export default Home_about