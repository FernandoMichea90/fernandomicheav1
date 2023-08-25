import React from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import useTheme from '@mui/material/styles/useTheme';
interface IconContactProps {
    icono: string,
    title: string,
    link: string
}

const IconContact = ({icono,title,link}:IconContactProps) => {
    const theme = useTheme();
    const StyledPaper=styled(Paper)(({ theme }) => ({
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '50px' }}>
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
      </div>
      
    )
}

export default IconContact