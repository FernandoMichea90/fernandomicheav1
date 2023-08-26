import React from 'react'
import { Box } from '@mui/material'
import { motion } from 'framer-motion';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import useTheme from '@mui/material/styles/useTheme';

interface IconContactProps {
  icono: string,
  title: string,
  link: string,
  index:number
}

const IconContact = ({ icono, title, link,index }: IconContactProps) => {
  // Define tus duraciones y curvas de easeIn y easeOut
  const distance=120;
  const durationIn =  0.64; // Por ejemplo, 0.5 segundos
  const easeIn =  [0.43, 0.13, 0.23, 0.5];; // Curva de easing "ease-in"
  const durationOut = 0.48; // Por ejemplo, 0.3 segundos
  const easeOut = [0.43, 0.13, 0.23, 0.96]; // Curva de easing "ease-out"
  const theme = useTheme();
  const StyledPaper = styled(Paper)(({ theme }) => ({
    width: 56,
    height: 60,
    borderRadius: '50%',
    '&:hover': {
      boxShadow: '0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12);',
    },
  }));

  const StyledSpan = styled('span')(({ theme }) => ({
    fontSize: 12,
    fontWeight: 600,
    marginTop: 10,
    textDecoration: 'none',
    color: '#808080'
  }));

  return (
    <motion.div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '50px' }}
      initial={{ 
        y:120,
        opacity: 0 }}
      whileInView={{
         y: 0,
        opacity: 1,
        transition: { duration:0.1+(index/2)  , ease: easeIn },
      }}
      
    >
      <a href={link} target='_blank' style={{ textDecoration: 'none' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <StyledPaper elevation={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px' }}>
            <Box
              component="img"
              src={process.env.NEXT_PUBLIC_REACT_APP_BASE_PATH + `/assets/icons/redes_sociales/ic_${icono}.svg`}
              sx={{ width: 30, height: 30 }}
            />
          </StyledPaper>
          <StyledSpan>{title}</StyledSpan>
        </div>
      </a>
    </motion.div>
  )
}

export default IconContact
