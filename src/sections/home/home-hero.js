"use client";
import { m, useScroll,motion } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
// @mui
import { styled, alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// routes
import { paths } from 'src/routes/paths';
// hooks
import { useResponsive } from '@/hooks/use-responsive';
// theme
import { secondaryFont } from 'src/theme/typography';
import { textGradient, bgGradient, bgBlur } from 'src/theme/css';
// layouts
import { HEADER } from 'src/layouts/config-layout';
// components
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import {  MotionViewport, varFade } from '@/components/animate';
import contacto from  "@/components/data/contacto.json"

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.94),
    imgUrl: '/assets/background/overlay_3.jpg',
  }),
  width: '100%',
  height: '100vh',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    position: 'fixed',
  },
}));

const StyledWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    marginTop: HEADER.H_DESKTOP_OFFSET,
  },
}));

const StyledTextGradient = styled(motion.h1)(({ theme }) => ({
  ...textGradient(
    `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 25%, ${theme.palette.primary.main} 50%, ${theme.palette.warning.main} 75%, ${theme.palette.primary.main} 100%`
  ),
  padding: 0,
  marginTop: 8,
  lineHeight: 1,
  marginBottom: 24,
  letterSpacing: 8,
  textAlign: 'center',
  backgroundSize: '400%',
  fontSize: `${64 / 16}rem`,
  fontFamily: secondaryFont.style.fontFamily,
  [theme.breakpoints.up('md')]: {
    fontSize: `${96 / 16}rem`,
  },
}));

const StyledEllipseTop = styled('div')(({ theme }) => ({
  top: -80,
  width: 480,
  right: -80,
  height: 480,
  borderRadius: '50%',
  position: 'absolute',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}));

const StyledEllipseBottom = styled('div')(({ theme }) => ({
  height: 400,
  bottom: -200,
  left: '10%',
  right: '10%',
  borderRadius: '50%',
  position: 'absolute',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}));

const StyledPolygon = styled('div')(({ opacity = 1, anchor = 'left', theme }) => ({
  ...bgBlur({
    opacity,
    color: theme.palette.background.default,
  }),
  zIndex: 9,
  bottom: 0,
  height: 80,
  width: '50%',
  position: 'absolute',
  clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
  ...(anchor === 'left' && {
    left: 0,
    ...(theme.direction === 'rtl' && {
      transform: 'scale(-1, 1)',
    }),
  }),
  ...(anchor === 'right' && {
    right: 0,
    transform: 'scaleX(-1)',
    ...(theme.direction === 'rtl' && {
      transform: 'scaleX(1)',
    }),
  }),
}));

// ----------------------------------------------------------------------

export default function HomeHero() {

  var imagen_light1 = process.env.NEXT_PUBLIC_REACT_APP_BASE_PATH+`/assets/images/home/hero/section_1.png`;
  var imagen_dark1 = process.env.NEXT_PUBLIC_REACT_APP_BASE_PATH+`/assets/images/home/hero/dark_1.webp`;
  var imagen_light2 = process.env.NEXT_PUBLIC_REACT_APP_BASE_PATH+`/assets/images/home/hero/section_1.png`;
  var imagen_dark2 = process.env.NEXT_PUBLIC_REACT_APP_BASE_PATH+`/assets/images/home/hero/dark_2.webp`;





  const mdUp = useResponsive('up', 'md');

  const theme = useTheme();

  const heroRef = useRef(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);

  const isLight = theme.palette.mode === 'light';

  const getScroll = useCallback(() => {
    let heroHeight = 0;

    if (heroRef.current) {
      heroHeight = heroRef.current.offsetHeight;
    }

    scrollY.on('change', (scrollHeight) => {
      const scrollPercent = (scrollHeight * 100) / heroHeight;

      setPercent(Math.floor(scrollPercent));
    });
  }, [scrollY]);

  useEffect(() => {
    getScroll();
  }, [getScroll]);

  const transition = {
    repeatType: 'loop',
    ease: 'linear',
    duration: 25*1,
    repeat: Infinity,
  };

  const opacity = 1 - percent / 100;

  const hide = percent > 120;

  const renderDescription = (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: 1,
        mx: 'auto',
        maxWidth: 480,
        opacity: opacity > 0 ? opacity : 0,
        mt: {
          md: `-${HEADER.H_DESKTOP + percent * 2.5}px`,
        },
      }}
    >
      

      <motion.div variants={varFade().in}>
        <StyledTextGradient
          animate={{ backgroundPosition: '200% center' }}
          transition={{
            repeatType: 'reverse',
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
        >
          Fernando Michea
        </StyledTextGradient>
      </motion.div>

      <motion.div variants={varFade().in}>
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
           Desarrollador Full Stack apasionado por diseñar aplicaciones  que optimizan la experiencia del usuario.
        </Typography>
      </motion.div>

      {/* <motion.div variants={varFade().in}>
        <Stack
          spacing={0.75}
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ my: 3 }}
        >
          <Rating readOnly value={4.95} precision={0.1} max={5} />
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            <Box component="strong" sx={{ mr: 0.5, color: 'text.primary' }}>
              4.96/5
            </Box>
            (99+ reviews)
          </Typography>
        </Stack>
      </motion.div> */}

      <motion.div variants={varFade().in}>
        <Stack style={{marginTop:'15px'}} spacing={1.5} direction={{ xs: 'column-reverse', sm: 'row' }} sx={{ mb: 5 }}>
          <Stack alignItems="center" spacing={2}>
            <Button
              component={RouterLink}
              href="/assets/cv/fernando_michea_cv.pdf"
              target="_blank"
              color="inherit"
              size="large"
              variant="contained"
              startIcon={<Iconify icon="humbleicons:download" width={24} />}
            >
             Descargar CV
            </Button>

            {/* <Link
              color="inherit"
              variant="caption"
              target="_blank"
              rel="noopener"
              href={paths.freeUI}
              sx={{
                textDecoration: 'underline',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              <Iconify icon="eva:external-link-fill" width={16} sx={{ mr: 0.5 }} />
              Get Free Version
            </Link> */}
          </Stack>

          <Button
            color="inherit"
            size="large"
            variant="outlined"
            startIcon={<Iconify icon="uil:github" width={24} />}
            target="_blank"
            rel="noopener"
            href="https://github.com/fernandoMichea90"
            sx={{ borderColor: 'text.primary' }}
          >
            GitHub
          </Button>
        </Stack>
      </motion.div>

      <Stack spacing={3} sx={{ textAlign: 'center' }}>
        <motion.div variants={varFade().in}>
          <Typography variant="overline" sx={{ opacity: 0.4 }}>
            Redes Sociales
          </Typography>
        </motion.div>

        <Stack spacing={2} direction="row" justifyContent="center">
          {contacto.map((platform,key) => (
            <motion.div key={key} 
            initial={{ 
              y:120,
              opacity: 0 }}
            whileInView={{
               y: 0,
              opacity: 1,
              transition:{ duration:0.1+(key/2) , ease: [0.43, 0.13, 0.23, 0.5] },
            }}
            >
              <a href={platform.link} target='_blank'>
              <Box
                component="img"
                src={process.env.NEXT_PUBLIC_REACT_APP_BASE_PATH+`/assets/icons/redes_sociales/ic_${platform.icono}.svg`}
                sx={{ width: 24, height: 24 }}
              />
              </a>
            </motion.div>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
  

  const renderSlides = (
    <Stack
      sx={{
        height: '100%',
        marginLeft:"170px",
        position: 'absolute',
        opacity: opacity > 0 ? opacity : 0,
        transform: `skew(${0 - percent / 24}deg, ${  percent / 16}deg)`,
        ...(theme.direction === 'rtl' && {
          transform: `skew(${16 + percent / 24}deg, ${20 + percent / 16}deg)`,
        }),
      }}
    >
      <Stack
        component={motion.div}
        sx={{
          width: 344,
          position: 'relative',
        }}
      >
        <Box
          component={motion.img}
          animate={{ y: ['0%', '100%'] }}
          transition={transition}
          alt={isLight ? 'light_1' : 'dark_1'}
          src={
            isLight
              ? imagen_light1
              : imagen_light1
          }
          sx={{ position: 'absolute', width:"344px"}}
        />
        <Box
          component={motion.img}
          animate={{ y: ['-100%', '0%'] }}
          transition={transition}
          alt={isLight ? 'light_1' : 'dark_1'}
          src={
            isLight
              ? imagen_light1
              : imagen_light1
          }
          sx={{ position: 'absolute',width:"344px"  }}
        />
      </Stack>

      {/* <Stack
        component={motion.div}
        variants={varFade().in}
        sx={{ width: 720, position: 'relative', ml: -5,width:"390px" }}
      >
        <Box
          component={motion.img}
          animate={{ y: ['100%', '0%'] }}
          transition={transition}
          alt={isLight ? 'light_2' : 'dark_2'}
          src={
            isLight
              ? imagen_light2
              : imagen_light2
          }
          sx={{ position: 'absolute', mt: -5,width:"390px" }}
        />
        <Box
          component={motion.img}
          animate={{ y: ['0%', '-100%'] }}
          transition={transition}
          alt={isLight ? 'light_2' : 'dark_2'}
          src={
            isLight
              ? imagen_light2
              : imagen_light2
          }
          sx={{ position: 'absolute',width:"390px" }}
        />
      </Stack> */}
    </Stack>
  );

  const renderPolygons = (
    <>
      <StyledPolygon />
      <StyledPolygon anchor="right" opacity={0.48} />
      <StyledPolygon anchor="right" opacity={0.48} sx={{ height: 48, zIndex: 10 }} />
      <StyledPolygon anchor="right" sx={{ zIndex: 11, height: 24 }} />
    </>
  );

  const renderEllipses = (
    <>
      {mdUp && <StyledEllipseTop />}
      <StyledEllipseBottom />
    </>
  );

  return (
    <>
      <StyledRoot
        ref={heroRef}
        sx={{
          ...(hide && {
            opacity: 0,
          }),
        }}
      >
        <StyledWrapper>
          <Container component={ MotionViewport } sx={{ height: 1 }}>
            <Grid 
             
            
            container columnSpacing={{ md: 10 }} sx={{ height: 1 }}>
              <Grid xs={12} md={6}>
                {renderDescription}
              </Grid>
              
              {mdUp && <Grid  md={6}>{renderSlides}</Grid>}
            </Grid>
          </Container>

          {renderEllipses}
        </StyledWrapper>
      </StyledRoot>

      {mdUp && renderPolygons}

      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
