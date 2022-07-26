import { Link as RouterLink } from 'react-router-dom';
import { Link, LinkProps } from '@mui/material';
import { FunctionComponent } from 'react';

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter: FunctionComponent<LinkRouterProps> = (props) => (
  <Link {...props} component={RouterLink as any} />
);

export default LinkRouter;
