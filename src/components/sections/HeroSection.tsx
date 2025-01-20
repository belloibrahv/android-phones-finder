import { Box, Typography, Button, Container } from '@mui/material';

export const HeroSection = () => {
  return (
    <Container maxWidth="lg">
      <Box 
        sx={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 4,
          py: 8,
          alignItems: 'center'
        }}
      >
        <Box>
          <Typography variant="h2" component="h1" gutterBottom>
            Want to find the perfect phone?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Take a short quiz to find the phone that best suits your needs.
          </Typography>
          <Button 
            variant="contained"
            size="large"
            sx={{ 
              backgroundColor: '#1a73e8',
              '&:hover': { backgroundColor: '#1557b0' }
            }}
          >
            Get started
          </Button>
        </Box>
        <Box>
          <img 
            src="/api/placeholder/600/400" 
            alt="People using phone"
            style={{ 
              width: '100%',
              height: 'auto',
              borderRadius: '16px'
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};
