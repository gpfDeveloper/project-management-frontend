import { Box, Button, Link, Typography } from '@mui/material';
import { Layout } from 'components/layout/Layout';
import { useAuth } from 'contexts/auth-context';
import Carousel from 'react-material-ui-carousel';

const images = [
  { src: '/imgs/kanban_board.png', alt: 'kanban board' },
  { src: '/imgs/your_work_page.png', alt: 'your work page' },
  { src: '/imgs/your_work_with_menu.png', alt: 'your work with menu' },
  {
    src: '/imgs/dark_your_work_with_menu.png',
    alt: 'dark your work with menu',
  },
  { src: '/imgs/issues_table.png', alt: 'issues table' },
  { src: '/imgs/dark_issues_table.png', alt: 'dark issues table' },
  { src: '/imgs/dark_board.png', alt: 'dark_board' },
];

function Home() {
  const { login } = useAuth();

  const livePreviewHanlder = () => {
    login('pengfei@pengfeidevelopment.com', 'admin123');
  };
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          gap: 4,
          alignItems: 'center',
        }}
      >
        <Box sx={{ flex: 2 }}>
          <Carousel height={720}>
            {images.map((item) => (
              <Box
                key={item.src}
                sx={{
                  height: '100%',
                  width: '100%',
                  '& img': { height: '100%', width: '100%' },
                }}
              >
                <img src={item.src} alt={item.alt} />
              </Box>
            ))}
          </Carousel>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h4">Project Management App</Typography>
          <Typography variant="h6">
            Build with React, MUI, and Typescript.
          </Typography>
          <Typography>
            Designed and developed by{' '}
            <Link href="https://pengfeidevelopment.com" target={'_blank'}>
              Pengfei Gao
            </Link>
          </Typography>
          <Box>
            <Button variant="contained" onClick={livePreviewHanlder}>
              Live Preview
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default Home;
