import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// icons
import { Icon } from '@iconify/react';
// @mui
import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

const Iconify = forwardRef(({ icon, width = 20, sx, ...other }, ref) => (
  <Box
    ref={ref}
    component={Icon}
    className="component-iconify"
    icon={icon}
    sx={{ width, height: width, ...sx }}
    {...other}
  />
));

Iconify.displayName = 'Iconify';

Iconify.propTypes = {
  icon: PropTypes.any,
  sx: PropTypes.object,
  width: PropTypes.number,
};

export default Iconify;
