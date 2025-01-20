import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import AndriodLogo from '../../assets/images/ui/andriod.svg';

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
            <img src={AndriodLogo} alt="Android" height="50" />
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
