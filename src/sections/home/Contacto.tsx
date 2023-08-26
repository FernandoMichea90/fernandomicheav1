import { Box, Typography, Grid, Paper } from '@mui/material'
import React from 'react'
import { textGradient } from '@/theme/css';
import { useTheme } from '@mui/material/styles';
import IconContact from '@/components/page/home/IconContact';
import contacto from '@/components/data/contacto.json';

const renderContacto = () => {
    return contacto.map((contact, index) => { // Corregir los parámetros del map
           console.log("index "+index)
        return (
            <Grid item xs={12} md={4} key={index}> {/* Agregar una clave única */}
                    <IconContact icono={contact.icono} title={contact.title} index={index} link={contact.link} />
            </Grid>
        )
    })
}

const Contacto = () => {
    const theme = useTheme();
    return (
        <Box  sx={{ textAlign: { xs: 'center', md: 'center' }, mt: { xs: 10, md: 20 },width:{xs:"100%", md:"80%"},margin:"auto",marginBottom:"170px"}}>
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
                Contacto
            </Typography>
            <Grid
                container
                justifyContent="space-around" // Usar justifyContent en lugar de direction y alignItems
                spacing={2}>
                {renderContacto()} {/* Renderizar la lista de contactos */}
            </Grid>
        </Box>
    )
}

export default Contacto;
