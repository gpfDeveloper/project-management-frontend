import { Box, Button, Link, Menu, Typography } from '@mui/material';
import { FunctionComponent } from 'react';

type Props = {
  anchorEl: HTMLElement | null;
  onClose: () => void;
};

const AboutMenu: FunctionComponent<Props> = ({ anchorEl, onClose }) => {
  return (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
      <Box
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: 400,
        }}
      >
        <Typography variant="h5">Project Management App</Typography>
        <Typography variant="h6">
          Build with React, MUI and Typescript
        </Typography>
        <Typography>Designed and developed by Pengfei Gao</Typography>
        <Typography>
          Read more on my website or reach out via{' '}
          <Link
            href="mailto:pengfei@pengfeidevelopment.com"
            fontWeight={500}
            underline="hover"
          >
            pengfei@pengfeidevelopment.com
          </Link>{' '}
        </Typography>
        <Button
          href="https://pengfeidevelopment.com"
          target="_blank"
          variant="contained"
        >
          Visit Website
        </Button>
      </Box>
    </Menu>
  );
};
export default AboutMenu;
