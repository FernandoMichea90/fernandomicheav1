'use client';

import { useScroll } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// layouts
import MainLayout from '@/layouts/mainsecond';
// components
import ScrollProgress from '@/components/scroll-progress';
import HomeHero from '@/sections/home/home-hero';

// ----------------------------------------------------------------------

const StyledPolygon = styled('div')(({ anchor = 'top', theme }) => ({
  left: 0,
  zIndex: 9,
  height: 80,
  width: '100%',
  position: 'absolute',
  clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
  backgroundColor: theme.palette.background.default,
  display: 'block',
  lineHeight: 0,
  ...(anchor === 'top' && {
    top: -1,
    transform: 'scale(-1, -1)',
  }),
  ...(anchor === 'bottom' && {
    bottom: -1,
    backgroundColor: theme.palette.grey[900],
  }),
}));

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />
     
      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
      <div style={{marginTop:"100vh"}}>
        <h1>{process.env.REACT_APP_BASE_PATH?process.env.REACT_APP_BASE_PATH:"no existe variable"}</h1>
      </div>
        
      </Box>
    </MainLayout>
  );
}
