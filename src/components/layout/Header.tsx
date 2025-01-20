import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

export const Header = () => {
  return (
    <AppBar 
      position="sticky" 
      color="default" 
      elevation={0}
      sx={{ 
        backgroundColor: 'white',
        borderBottom: '1px solid #eaeaea'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <img src="/android-logo.svg" alt="Android" height="24" />
            <span>Android</span>
          </Box>
          
          <Button color="inherit">Discover Android</Button>
          <Button color="inherit">Switch to Android</Button>
          <Button color="inherit">Explore devices</Button>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <SearchIcon />
          <Button 
            variant="contained"
            sx={{ 
              backgroundColor: '#1a73e8',
              '&:hover': { backgroundColor: '#1557b0' }
            }}
          >
            Shop phones
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
