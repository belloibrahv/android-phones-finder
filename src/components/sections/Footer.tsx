import { Box, Container, Grid, Link, Typography, Stack, MenuItem, Select } from '@mui/material';
import { KeyboardArrowRight as ArrowRightIcon } from '@mui/icons-material';
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
    <Box component="footer" sx={{ bgcolor: '#f8f9fa', mt: 8, pt: 6, pb: 4 }}>
      <Container maxWidth="lg">
        {/* Social Media Links */}
        <Box sx={{ mb: 6, display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" fontWeight={500} sx={{ mr: 3 }}>
            Follow us
          </Typography>
          <Stack direction="row" spacing={3}>
            {socialLinks.map((social) => (
              <Link 
                key={social.platform} 
                href={social.url} 
                sx={{ 
                  color: '#5f6368',
                  '&:hover': { color: '#000' },
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

        {/* Main Footer Links */}
        <Grid container spacing={6} sx={{ mb: 6 }}>
          {footerSections.map((section) => (
            <Grid item xs={12} sm={6} md={3} key={section.title}>
              <Typography variant="body1" fontWeight={500} sx={{ mb: 2 }}>
                {section.title}
              </Typography>
              {section.links.map((link) => (
                <Box key={link.text} sx={{ mb: 1.5 }}>
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
                      <ArrowRightIcon
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

        {/* Additional Footer Links */}
        <Grid container spacing={6} sx={{ mb: 6 }}>
          {additionalSections.map((section) => (
            <Grid item xs={12} sm={6} md={3} key={section.title}>
              <Typography variant="body1" fontWeight={500} sx={{ mb: 2 }}>
                {section.title}
              </Typography>
              {section.links.map((link) => (
                <Box key={link.text} sx={{ mb: 1.5 }}>
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
                      <ArrowRightIcon
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
            borderTop: '1px solid #dadce0' 
          }}
        >
          <Typography variant="body2" color="textSecondary">
            {/* © 2025 Google LLC */}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center">
            <Link 
              href="#" 
              sx={{ 
                color: '#5f6368', 
                textDecoration: 'none', 
                '&:hover': { 
                  color: '#1a73e8', 
                  textDecoration: 'underline' 
                } 
              }}
            >
              Privacy Policy
            </Link>
            <Link 
              href="#" 
              sx={{ 
                color: '#5f6368', 
                textDecoration: 'none', 
                '&:hover': { 
                  color: '#1a73e8', 
                  textDecoration: 'underline' 
                } 
              }}
            >
              Manage Cookies
            </Link>
            
            <Select
              value={languages[0]}
              variant="standard"
              sx={{
                color: '#5f6368',
                '& .MuiSelect-select': {
                  minWidth: '180px',
                  py: 0.5
                },
                '& .MuiInput-underline:before': {
                  borderBottom: 'none'
                },
                '& .MuiInput-underline:hover:before': {
                  borderBottom: '1px solid rgba(0, 0, 0, 0.42)'
                },
                '& .MuiSelect-icon': {
                  color: '#5f6368'
                }
              }}
            >
              {languages.map((language) => (
                <MenuItem key={language} value={language}>
                  {language}
                </MenuItem>
              ))}
            </Select>
          </Stack>
          
        </Box>
        
        {/* Android Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 4 }}>
          <Box
            component="img"
            src={AndroidLogo}
            alt="Android Logo"
            sx={{
              height: '64px',
              width: 'auto',
              opacity: 0.8,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;