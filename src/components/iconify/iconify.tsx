import * as React from 'react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
// icons
import { Icon } from '@iconify/react';
// @mui
import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

interface IconifyProps {
  icon?: any;
  sx?: any;
  width?: number;
}

const Iconify: ForwardRefRenderFunction<HTMLDivElement, IconifyProps> = (
  { icon, width = 20, sx, ...other },
  ref
) => (
  <Box
    ref={ref}
    component={Icon}
    className="component-iconify"
    icon={icon}
    sx={{ width, height: width, ...sx }}
    {...other}
  />
);

Iconify.displayName = 'Iconify';

export default React.forwardRef(Iconify);
