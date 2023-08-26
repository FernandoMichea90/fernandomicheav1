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
import {useResponsive} from '../../hooks/use-responsive'
import Image from '../../components/image'


const Home_about = () => {
    const mdUp = useResponsive('up', 'md');
    const theme = useTheme();

    return (
        <Container
        id="sobremi"
          sx={{
            py: { xs: 10, md: 15 },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Grid container columnSpacing={{ md: 3 }} alignItems="flex-start">
          {mdUp && (
          <Grid container xs={12} md={6} lg={7} alignItems="center" sx={{ pr: { md: 7 } }}>
            <Grid xs={6}>
              <m.div >
                <Image
                  alt="our office 2"
                  src={process.env.NEXT_PUBLIC_REACT_APP_BASE_PATH+"/assets/images/about/what_2.png"}
                  ratio="1/1"
                  sx={{ borderRadius: 3 }}
                />
              </m.div>
            </Grid>

            <Grid xs={6}>
              <m.div >
                <Image
                  alt={"our office 1"}
                  src={process.env.NEXT_PUBLIC_REACT_APP_BASE_PATH+"/assets/images/about/what_1.png"}
                  ratio="3/4"
                  sx={{ borderRadius: 3 }}
                />
              </m.div>
            </Grid>
          </Grid>
        )}
         
            <Grid   style={{margin:'auto'}} xs={12} md={6} lg={5}>
              <div>
              <m.div >
                <Typography variant="h2" sx={{ mb: 3 }}>
                  Sobre mi 
                </Typography>
              </m.div>
    
              <m.div>
                <Typography
                  sx={{
                    color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
                  }}
                >
                  Soy un desarrollador full stack con enfoque en diseño y programación web. Apasionado por crear soluciones digitales atractivas y funcionales.
                </Typography>
              </m.div>
              </div>

            </Grid>
          </Grid>
        </Container>
        // </Box>
      );
}

export default Home_about