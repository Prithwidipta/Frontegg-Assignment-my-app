import React from 'react';
import { useAuth, useLoginWithRedirect, ContextHolder } from "@frontegg/react";
import { Button, Container, Box, Typography, Card, CardContent, Avatar, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AdminPortal } from '@frontegg/react';
import { Settings, Logout, Home } from '@mui/icons-material';
import TextContainer from "./TextContainer"

const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: theme.spacing(1),
  transition: 'background 0.3s ease-in-out',
  '&:hover': {
    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)', 
    boxShadow: '0 5px 7px 3px rgba(255, 105, 135, .5)',
  }
}));

const BackgroundBox = styled(Box)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

function Login() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  const handleClick = () => {
    AdminPortal.show();
  };

  return (
    <BackgroundBox>
      <Container maxWidth="sm">
        <Card elevation={5}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4 }}>
            {isAuthenticated ? (
              <>
                <Avatar
                  src={user?.profilePictureUrl}
                  alt={user?.name}
                  sx={{ width: 100, height: 100, mb: 2 }}
                />
                <Typography variant="h4" gutterBottom>
                  Welcome, {user?.name}!
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  {user?.email}
                </Typography>
                <Divider sx={{ width: '100%', my: 2 }} />
                <Box sx={{ width: '100%', mt: 2 }}>
                  <GradientButton
                    fullWidth
                    startIcon={<Settings />}
                    onClick={handleClick}
                  >
                    Settings
                  </GradientButton>
                  <GradientButton
                    fullWidth
                    startIcon={<Logout />}
                    onClick={logout}
                  >
                    Logout
                  </GradientButton>
                  <GradientButton
                    fullWidth
                    startIcon={<Home />}
                    onClick={() => window.location.href = "/"}
                  >
                    Back to Homepage
                  </GradientButton>
                </Box>
              </>
            ) : (
              <>
                <TextContainer/>
                <GradientButton
                  onClick={() => loginWithRedirect()}
                  sx={{ mt: 3 }}
                >
                  Click me to Sign in or Sign Up
                </GradientButton>
              </>
            )}
          </CardContent>
        </Card>
      </Container>
    </BackgroundBox>
  );
}

export default Login;