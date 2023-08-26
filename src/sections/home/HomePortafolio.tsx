import React from 'react'
import { motion } from 'framer-motion';
// @mui
import { useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// hooks
import { useResponsive } from '@/hooks/use-responsive';
// theme
import { textGradient, bgGradient } from '@/theme/css';
// routes
// components
import { MotionViewport, varFade } from '@/components/animate';
import "../../utils-css-js/animacion.css"


const HomePortafolio = () => {
  const theme = useTheme();

  const upMd = useResponsive('up', 'md');

  var test = varFade().inUp;

  const variantsTexto = varFade().in+" "+varFade().out
  
  
  const renderDescription = (
    <Box sx={{ textAlign: { xs: 'center', md: 'unset' }, mt: { xs: 10, md: 20 } }}>

      <div >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1,transition: { delay: 0.2, duration: 0.6 }}}   
      >
        <Typography
          variant="h2"
          sx={{
            mt: 3,
            mb: 5,
            ...textGradient(
              `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 100%`
            ),
          }}
        >
          Portafolio
        </Typography>
      </motion.div>
      </div>

    </Box>
  );

  const renderImg = (
    <Box
      component={motion.img}
      src={process.env.NEXT_PUBLIC_REACT_APP_BASE_PATH + "/assets/images/home/web/code-image.jpg"}
      className='in-up'
      sx={{
        height: 1,
        width: 0.5,
        objectFit: 'cover',
        position: 'absolute',
        boxShadow: `-80px 80px 80px ${theme.palette.mode === 'light'
          ? alpha(theme.palette.grey[500], 0.48)
          : alpha(theme.palette.common.black, 0.24)
          }`,
      }}
    />
  );

  return (
    <Box
      sx={{
        minHeight: 560,
        overflow: 'hidden',
        position: 'relative',
        ...bgGradient({
          startColor: `${theme.palette.grey[900]} 25%`,
          endColor: alpha(theme.palette.grey[900], 0),
          imgUrl: process.env.NEXT_PUBLIC_REACT_APP_BASE_PATH + "/assets/images/home/web/code-image.jpg",
        }),
        ...(upMd && {
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.8),
            imgUrl: process.env.NEXT_PUBLIC_REACT_APP_BASE_PATH + '/assets/background/overlay_4.jpg',
          }),
        }),
      }}
    >
      <Container component={MotionViewport} >
        <Grid container>
          <Grid xs={12} md={6}>
            {renderDescription}
          </Grid>

          {upMd && <Grid md={6}>{renderImg}</Grid>}
        </Grid>
      </Container>
    </Box>
  );

}

export default HomePortafolio