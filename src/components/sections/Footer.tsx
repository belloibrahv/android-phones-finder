import { Box, Container, Grid, Link, Typography } from '@mui/material';

export const Footer = () => {
  const footerSections = [
    {
      title: 'Privacy and safety',
      links: ['Security', 'Privacy', 'Physical safety', 'Find my device']
    },
    {
      title: 'Accessibility',
      links: ['Vision features', 'Audio features', 'Mobility features']
    },
    {
      title: 'More from Android',
      links: ['Customize Android Bot', 'Android TV', 'Google Mobile Services (GMS)']
    },
    {
      title: 'Support',
      links: ['Help Centre', 'Find My Device', 'Join user studies']
    }
  ];

  return (
    <Box component="footer" sx={{ bgcolor: '#f8f9fa', py: 6, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {footerSections.map((section) => (
            <Grid item xs={12} sm={6} md={3} key={section.title}>
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>
              {section.links.map((link) => (
                <Box key={link} sx={{ mb: 1 }}>
                  <Link
                    href="#"
                    color="textSecondary"
                    sx={{ 
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' }
                    }}
                  >
                    {link}
                  </Link>
                </Box>
              ))}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
