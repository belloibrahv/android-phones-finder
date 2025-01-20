import { Box, Typography, Button, Container } from '@mui/material';
import PeopleImg from '../../assets/images/ui/people.webp';

export const HeroSection = () => {
  return (
    <Box sx={{ backgroundColor: '#ffffff', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: { xs: 4, md: 8 },
            py: { xs: 6, md: 10 },
            alignItems: 'center',
            minHeight: '300px'
          }}
        >
          {/* Left Content */}
          <Box sx={{ maxWidth: '480px' }}>
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: { xs: 1.2, md: 1.1 },
                fontWeight: 500,
                letterSpacing: '-0.02em',
                color: '#202124',
                mb: 2
              }}
            >
              Want to find the perfect phone?
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: '1.125rem',
                lineHeight: 1.5,
                color: '#202124',
                mb: 4,
                opacity: 0.7
              }}
            >
              Take a short quiz to find the phone that best suits your needs.
            </Typography>
            <Button 
              variant="contained"
              endIcon={
                <Box 
                  component="span" 
                  sx={{ 
                    transform: 'rotate(-45deg)',
                    display: 'inline-flex'
                  }}
                >
                  →
                </Box>
              }
              sx={{ 
                backgroundColor: '#202124',
                color: 'white',
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '1rem',
                borderRadius: '100px',
                px: 3,
                py: 1.5,
                '&:hover': { 
                  backgroundColor: '#000000'
                }
              }}
            >
              Get started
            </Button>
          </Box>

          {/* Right Image */}
          <Box 
            sx={{ 
              position: 'relative',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}
          >
            <Box
              component="img"
              src={PeopleImg}
              alt="People using phone"
              sx={{
                width: '100%',
                maxWidth: '600px',
                height: 'auto',
                borderRadius: '24px',
                objectFit: 'cover',
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
