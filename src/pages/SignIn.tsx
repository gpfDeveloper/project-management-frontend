import {
  Avatar,
  Button,
  TextField,
  Link,
  Box,
  Typography,
  Container,
  Paper,
  Divider,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LayoutBlank } from 'components/layout/LayoutBlank';
import { useState } from 'react';
import { useAuth } from 'contexts/auth-context';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://pengfeidevelopment.com/">
        pengfeidevelopment.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignIn() {
  const { login } = useAuth();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      setError(true);
    }
  };
  const [email, setEmail] = useState('pengfei@pengfeidevelopment.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState(false);

  return (
    <LayoutBlank>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Paper
            sx={{
              my: 1,
              p: 2,
              display: 'flex',
              gap: 1,
              flexDirection: 'column',
            }}
            elevation={4}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                color: 'primary.main',
                '& p': { fontSize: 14 },
              }}
            >
              <Typography>Admin</Typography>
              <Typography fontWeight={700}>
                pengfei@pengfeidevelopment.com
              </Typography>
              <Typography>/</Typography>
              <Typography>Pass</Typography>
              <Typography fontWeight={700}>admin123</Typography>
            </Box>
            <Divider />
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                color: 'primary.main',
                '& p': { fontSize: 14 },
              }}
            >
              <Typography>User</Typography>
              <Typography fontWeight={700}>terry@gmail.com</Typography>
              <Typography>/</Typography>
              <Typography>Pass</Typography>
              <Typography fontWeight={700}>user123</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                color: 'primary.main',
                '& p': { fontSize: 14 },
              }}
            >
              <Typography>User</Typography>
              <Typography fontWeight={700}>john@gmail.com</Typography>
              <Typography>/</Typography>
              <Typography>Pass</Typography>
              <Typography fontWeight={700}>user456</Typography>
            </Box>
          </Paper>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              error={error}
              helperText={error && 'Incorrect email or password'}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </LayoutBlank>
  );
}
