import { forwardRef } from 'react';
import Link from 'next/link';

// ----------------------------------------------------------------------

const RouterLink = forwardRef(({ ...other }, ref) => <Link ref={ref} {...other} />);

RouterLink.displayName = 'RouterLink'; // Agrega el nombre de visualización

export default RouterLink;
