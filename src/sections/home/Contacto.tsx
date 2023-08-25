import { Box, Typography, Grid, Paper } from '@mui/material'
import React from 'react'
import { textGradient } from '@/theme/css';
import { useTheme } from '@mui/material/styles';



const Contacto = () => {
    const theme = useTheme();
    return (
        <Box sx={{ textAlign: { xs: 'center', md: 'center' }, mt: { xs: 10, md: 20 } }}>
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
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={2}>
                <Grid item xs={12} md={4}>
                    <Paper>xs=6 md=8</Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper>xs=6 md=4</Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper>xs=6 md=4</Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper>xs=6 md=8</Paper>
                </Grid>
            </Grid>

        </Box>
    )
}

export default Contacto