import { Box, Container, Grid, Link, Typography, Stack, MenuItem, Select, Divider } from '@mui/material';
import { KeyboardArrowRight as ArrowRightIcon } from '@mui/icons-material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AndroidLogo from '../../assets/images/ui/droid.gif';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
  const footerSections = [
    {
      title: 'Privacy and safety',
      links: [
        { text: 'Security', hasArrow: false },
        { text: 'Privacy', hasArrow: false },
        { text: 'Physical safety', hasArrow: false },
        { text: 'Find my device', hasArrow: true }
      ]
    },
    {
      title: 'Accessibility',
      links: [
        { text: 'Vision features', hasArrow: true },
        { text: 'Audio features', hasArrow: true },
        { text: 'Mobility features', hasArrow: true }
      ]
    },
    {
      title: 'More from Android',
      links: [
        { text: 'Customize Android Bot', hasArrow: true },
        { text: 'Android TV', hasArrow: true },
        { text: 'Google Mobile Services (GMS)', hasArrow: true }
      ]
    },
    {
      title: 'Support',
      links: [
        { text: 'Help Centre', hasArrow: true },
        { text: 'Find My Device', hasArrow: true },
        { text: 'Join user studies', hasArrow: true }
      ]
    }
  ];

  const additionalSections = [
    {
      title: 'For enterprise',
      links: [
        { text: 'Overview', hasArrow: false },
        { text: 'Enterprise devices', hasArrow: false },
        { text: 'Enterprise support', hasArrow: false },
        { text: 'Enterprise blog', hasArrow: true }
      ]
    },
    {
      title: 'For the press',
      links: [
        { text: 'Android blog', hasArrow: true },
        { text: 'Press corner', hasArrow: true },
        { text: 'Contact Press team', hasArrow: true }
      ]
    },
    {
      title: 'For developers',
      links: [
        { text: 'Developer resources', hasArrow: true },
        { text: 'Android Studio and SDK', hasArrow: true },
        { text: 'Android Open Source Project', hasArrow: true },
        { text: 'How Google Play works', hasArrow: true }
      ]
    }
  ];

  const socialLinks = [
    { platform: 'Twitter', icon: <TwitterIcon />, url: '#' },
    { platform: 'Instagram', icon: <InstagramIcon />, url: '#' },
    { platform: 'YouTube', icon: <YouTubeIcon />, url: '#' },
    { platform: 'Facebook', icon: <FacebookIcon />, url: '#' },
    { platform: 'LinkedIn', icon: <LinkedInIcon />, url: '#' }
  ];

  const languages = [
    'English (United Kingdom)',
    'English (United States)',
    'Español',
    'Français',
    'Deutsch',
    '日本語',
    '中文'
  ];

  return (
    <Box component="footer" sx={{ bgcolor: '#f8f9fa', mt: 8, pt: 6, pb: 4, fontFamily: '"ProductSans", Roboto, Helvetical, sans-serif' }}>
      <Container maxWidth="lg">
        {/* Social Media Links */}
        <Box sx={{ mb: 6, display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" fontWeight={600} sx={{ mr: 3, color: '#000', fontSize: '14px' }}>
            Follow us
          </Typography>
          <Stack direction="row" spacing={3}>
            {socialLinks.map((social) => (
              <Link 
                key={social.platform} 
                href={social.url} 
                sx={{ 
                  color: '#000',
                  '&:hover': { color: '#5f6368' },
                  display: 'flex',
                  alignItems: 'center'
                }}
                aria-label={social.platform}
              >
                {social.icon}
              </Link>
            ))}
          </Stack>
        </Box>
        <Divider sx={{ mb: 5 }} />

        {/* Main Footer Links */}
        <Grid container spacing={6} sx={{ mb: 6 }}>
          {footerSections.map((section) => (
            <Grid item xs={12} sm={6} md={3} key={section.title}>
              <Typography variant="body1" fontWeight={600} sx={{ mb: 2, fontSize: '14px', cursor: 'auto', height: '25px' }}>
                {section.title}
              </Typography>
              {section.links.map((link) => (
                <Box key={link.text} sx={{ mb: 1.5, padding: '20px 0 0', fontSize: '14px' }}>
                  <Link
                    href="#"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#5f6368',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      '&:hover': {
                        color: '#1a73e8',
                        textDecoration: 'none'
                      }
                    }}
                  >
                    {link.text}
                    {link.hasArrow && (
                      <ArrowOutwardIcon
                        sx={{
                          fontSize: '18px',
                          ml: 0.5,
                          opacity: 0.7,
                          transition: 'all 0.2s ease',
                          transform: 'scale(0.8)',
                          '.MuiLink-root:hover &': {
                            transform: 'translateX(2px) scale(0.8)',
                            opacity: 1
                          }
                        }}
                      />
                    )}
                  </Link>
                </Box>
              ))}
            </Grid>
          ))}
        </Grid>

        {/* Additional Footer Links */}
        <Grid container spacing={6} sx={{ mb: 6 }}>
          {additionalSections.map((section) => (
            <Grid item xs={12} sm={6} md={3} key={section.title}>
              <Typography variant="body1" fontWeight={600} sx={{ mb: 2, fontSize: '14px', cursor: 'auto', height: '25px', }}>
                {section.title}
              </Typography>
              {section.links.map((link) => (
                <Box key={link.text} sx={{ mb: 1.5, padding: '20px 0 0', fontSize: '14px' }}>
                  <Link
                    href="#"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#5f6368',
                      textDecoration: 'none',
                      '&:hover': { 
                        color: '#1a73e8',
                        textDecoration: 'none'
                      }
                    }}
                  >
                    {link.text}
                    {link.hasArrow && (
                      <ArrowOutwardIcon
                        sx={{
                          fontSize: '1rem',
                          ml: 0.5,
                          opacity: 0.7,
                          transition: 'transform 0.2s',
                          '.MuiLink-root:hover &': {
                            transform: 'translateX(2px)',
                          }
                        }}
                      />
                    )}
                  </Link>
                </Box>
              ))}
            </Grid>
          ))}         
        </Grid>

        {/* Bottom Links & Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            alignItems: 'center',
            justifyContent: 'space-between',
            pt: 4,
            borderTop: '1px solid #dadce0',
            fontFamily: '"Google Sans", Roboto, Helvetical, sans-serif'
          }}
        >
          <Typography variant="body2" color="textSecondary">
            {/* © 2025 Google LLC */}
          </Typography>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={3} 
            alignItems="center"
          >
            <Link
              href="#"
              sx={{
                color: '#5f6368',
                fontSize: '14px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: '#1a73e8',
                  textDecoration: 'none'
                }
              }}
            >
              Privacy Policy
            </Link>
            <Select
              value={languages[0]}
              variant="standard"
              sx={{
                color: '#5f6368',
                fontSize: '14px',
                '& .MuiSelect-select': {
                  minWidth: '200px',
                  py: 0.5,
                  pr: 4,
                  pl: 0
                },
                '& .MuiInput-underline:before': {
                  borderBottom: 'none'
                },
                '& .MuiInput-underline:after': {
                  borderBottom: '2px solid #1a73e8'
                },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottom: '1px solid rgba(0, 0, 0, 0.42)'
                },
                '& .MuiSelect-icon': {
                  color: '#5f6368',
                  right: 0,
                  transition: 'transform 0.2s ease'
                },
                '&:hover .MuiSelect-icon': {
                  transform: 'rotate(180deg)'
                }
              }}
            >
              {languages.map((language) => (
                <MenuItem 
                  key={language} 
                  value={language}
                  sx={{
                    fontSize: '14px',
                    '&:hover': {
                      backgroundColor: 'rgba(26, 115, 232, 0.04)'
                    }
                  }}
                >
                  {language}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Box>

        
        {/* Android Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 8, position: 'relative'  }}>
          <Box
            component="img"
            src={AndroidLogo}
            alt="Android Logo"
            sx={{
              height: '122px',
              width: 'auto',
              opacity: 0.8,
              position: 'absolute',
              bottom: 0,
              mb: -5
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;