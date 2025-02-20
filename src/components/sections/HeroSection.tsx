import { Box, Typography, Button, Container, Divider } from '@mui/material';
import PeopleImg from '../../assets/images/ui/people.webp';
import ShopArrow from '../../assets/images/ui/shoparrow.svg';

export const HeroSection = () => {
  return (
    <Box sx={{ backgroundColor: '#ffffff', overflow: 'hidden', fontFamily: ", Helvetica, Arial, sans-serif", maxWidth: '80rem', margin: '-70px auto 0' }}>
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
          <Box sx={{ maxWidth: '380px', paddingLeft: '6rem' }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontFamily: ", Helvetica, Arial, sans-serif",
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: { xs: '3rem', md: '4rem' },
                fontWeight: 700,
                letterSpacing: '-0.063rem',
                color: '#202124',
                mb: '1rem'
              }}
            >
              Want to find the perfect phone?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: ", Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                fontWeight: '400',
                lineHeight: '1.625rem',
                color: '#000000',
                mb: '2rem',
                letterSpacing: '0',
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
                      display: 'inline-flex',
                      fontSize: '2.25rem',
                      ml: 0.5,
                    }}
                  >
                    <img src={ShopArrow} alt="Shop Arrow" style={{ height: '24px', width: '24px', color: '#c6ff00' }} />
                  </Box>
                }
                sx={{
                  backgroundColor: '#000000',
                  color: 'white',
                  textTransform: 'none',
                  fontFamily: ", Roboto, sans-serif, Arial, Helvetica",
                  fontWeight: '600',
                  fontSize: '14px',
                  letterSpacing: '0.3px',
                  lineHeight: '24px',
                  borderRadius: '30px',
                  marginRight: '55px',
                  padding: '20px 19px 20px 12px',
                  borderWidth: '1px',
                  border: '1px solid #202124',
                  cursor: 'pointer',
                  isolation: 'isolate',
                  overflow: 'hidden',
                  minWidth: 'max-content',
                  position: 'relative',
                  userSelect: 'none',
                  height: '40px',
                  '&:hover': {
                    backgroundColor: 'rgb(241, 243, 244)',
                    color: '#000000',
                    '& .MuiBox-root': {
                      transform: 'translateX(5px)'
                    }
                  },
                  '& .MuiBox-root': {
                    transition: 'transform 0.2s ease-in-out'
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
        <Divider />
      </Container>
    </Box>
  );
};

export default HeroSection;