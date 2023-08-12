import { motion as m } from 'framer-motion';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { MotionViewport, varFade } from '@/components/animate';
import Image from '@/components/image';
import Iconify from '@/components/iconify/iconify';
export default function HomeColorPresets() {
    const renderDescription = (
        <Stack spacing={3} sx={{ textAlign: 'center', mb:'25px' }}>
            <m.div variants={varFade().inDown}>
                <Typography variant="h2"> Clinica Almendral </Typography>
            </m.div>

            <Stack spacing={2} direction="row" justifyContent="center">
                {['mui', 'react', 'firebase', 'netlify'].map((platform) => (
                    <m.div key={platform} variants={varFade().inDown}>
                        <Box
                            component="img"
                            src={process.env.NEXT_PUBLIC_REACT_APP_BASE_PATH + `/assets/icons/redes_sociales/ic_${platform}.svg`}
                            sx={{ width: 24, height: 24 }}
                        />
                    </m.div>
                ))}
            </Stack>
            <m.div variants={varFade().inDown}>
                <Link
                    color="inherit"
                    variant="caption"
                    target="_blank"
                    rel="noopener"
                    href="#"
                    sx={{
                        textDecoration: 'underline',
                        display: 'inline-flex',
                        alignItems: 'center',
                        mx: 3,
                    }}
                >
                    <Iconify icon="eva:external-link-fill" width={16} sx={{ mr: 0.5 }} />
                     Ver pagina web
                </Link>
                <Link
                    color="inherit"
                    variant="caption"
                    target="_blank"
                    rel="noopener"
                    href="#"
                    sx={{
                        textDecoration: 'underline',
                        display: 'inline-flex',
                        alignItems: 'center',
                    }}
                >
                    <Iconify icon="eva:external-link-fill" width={16} sx={{ mr: 0.5 }} />
                        Ver codigo github
                </Link>
            </m.div>
        </Stack>
    );

    const renderContent = (
        <Box sx={{ position: 'relative' }}>
            <Image disabledEffect alt="grid" src={`${process.env.NEXT_PUBLIC_REACT_APP_BASE_PATH}/assets/images/home/presets/grid.webp`} />

            <Box sx={{ position: 'absolute', top: 0,left:0,right:0 }}>
                <m.div variants={varFade().inUp}>
                    <div style={{width: '45%', height: '100%',perspective:"1000px",margin:'auto'}}>
                    <Image
                         sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            verticalAlign: "bottom", // Corrección: verticalAlign en lugar de vertical-align
                            transform: "rotate3d(2, 0, 1, -329deg)", // Corrección: rotate3d con todos los valores juntos
                          }}
                        
                        disabledEffect
                        alt="screen"
                        src={`${process.env.NEXT_PUBLIC_REACT_APP_BASE_PATH}/assets/images/home/web/clinica_almendral.png`}
                    />
                    </div>
                </m.div>
            </Box>

            {/* Rest of the code for renderContent... */}
        </Box>
    );



    return (
        <Container
            component={MotionViewport}
            sx={{
                position: 'relative',
                py: { xs: 10, md: 15 },
            }}
        >
            {renderDescription}
            {renderContent}
        </Container>
    );
}
