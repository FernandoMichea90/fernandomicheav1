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
        width: 50,
        height: 50,
        borderRadius: '50%',
      }));
    
    const StyledSpan = styled('span')(({ theme }) => ({
        fontSize: 12,
        fontWeight: 600,
        marginTop: 10,
      }));




    return (
      
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',margin:'50px ' }}>
        <a href={link} target='_blank'>
          <StyledPaper elevation={3} sx={{ p: 1.3, bgcolor: 'background.paper', display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src={process.env.NEXT_PUBLIC_REACT_APP_BASE_PATH + `/assets/icons/redes_sociales/ic_${icono}.svg`}
              sx={{ width: 30, height: 30 }}
            />
          </StyledPaper>
          </a>
          <StyledSpan>{title}</StyledSpan>
        
        </div>
    )
}

export default IconContact