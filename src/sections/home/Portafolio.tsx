import { motion as m } from 'framer-motion';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { MotionViewport, varFade } from '@/components/animate';
import Image from '@/components/image';
import Iconify from '@/components/iconify/iconify';


interface PortafolioProps{
    nombre: string;
    iconos: string[];
    imagen: string;
    github: string;
    web: string;
}

export default function HomeColorPresets({nombre, iconos, imagen, github, web}: PortafolioProps) {
    const renderDescription = (
        <Stack spacing={3} sx={{ textAlign: 'center', mb:'90px' }}>
            <m.div variants={varFade().inDown}>
                <Typography variant="h2"> {nombre} </Typography>
            </m.div>

            <Stack spacing={2} direction="row" justifyContent="center">
                {iconos.map((platform) => (
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
                    href={web}
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
                    href={github}
                    sx={{
                        textDecoration: 'underline',
                        display: 'inline-flex',
                        alignItems: 'center',
                    }}
                >
                    <Iconify icon="eva:external-link-fill" width={16} sx={{ mr: 0.5 }} />
                        Ver codigo en Github
                </Link>
            </m.div>
        </Stack>
    );

    const renderContent = (
        <Box sx={{ position: 'relative' }}>
            <Image disabledEffect alt="grid" src={`${process.env.NEXT_PUBLIC_REACT_APP_BASE_PATH}/assets/images/home/presets/grid.webp`} />

            <Box sx={{ position: 'absolute', top: 0,left:0,right:0 }}>
                <m.div variants={varFade().inUp}>
                    <div style={{width: '40vw', height: '100%',perspective:"1000px",margin:'auto'}}>
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
                        src={`${process.env.NEXT_PUBLIC_REACT_APP_BASE_PATH}/assets/images/home/web/`+imagen}
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
            }}
        >
            {renderDescription}
            {renderContent}
        </Container>
    );
}
