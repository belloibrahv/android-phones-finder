import { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Button, 
  IconButton,
  Collapse,
  InputBase,
  ClickAwayListener
} from '@mui/material';
import { 
  Search as SearchIcon,
  KeyboardArrowDown as ArrowDownIcon,
  Close as CloseIcon 
} from '@mui/icons-material';
import AndroidLogo from '../../assets/images/ui/andriod.svg';

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchValue('');
    }
  };

  const handleClickAway = () => {
    if (isSearchOpen) {
      setIsSearchOpen(false);
      setSearchValue('');
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <AppBar 
        position="sticky" 
        color="default" 
        elevation={0}
        sx={{ 
          backgroundColor: 'white',
          borderBottom: '1px solid #eaeaea'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', height: '72px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Box 
              component="a" 
              href="/"
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <img src={AndroidLogo} alt="Android" height="35" />
            </Box>
            
            {!isSearchOpen && (
              <>
                <Button 
                  color="inherit"
                  endIcon={<ArrowDownIcon />}
                  sx={{ 
                    textTransform: 'none', 
                    fontWeight: 500,
                    fontSize: '0.9375rem',
                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' }
                  }}
                >
                  Discover Android
                </Button>
                <Button 
                  color="inherit"
                  endIcon={<ArrowDownIcon />}
                  sx={{ 
                    textTransform: 'none', 
                    fontWeight: 500,
                    fontSize: '0.9375rem',
                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' }
                  }}
                >
                  Switch to Android
                </Button>
                <Button 
                  color="inherit"
                  endIcon={<ArrowDownIcon />}
                  sx={{ 
                    textTransform: 'none', 
                    fontWeight: 500,
                    fontSize: '0.9375rem',
                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' }
                  }}
                >
                  Explore devices
                </Button>
              </>
            )}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Collapse 
                in={isSearchOpen} 
                orientation="horizontal"
                sx={{ position: 'absolute', right: '100%', pr: 2 }}
              >
                <InputBase
                  placeholder="Search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  sx={{ 
                    width: '300px',
                    '& input': { 
                      fontSize: '1rem',
                      padding: '4px 0'
                    }
                  }}
                />
              </Collapse>
              
              <IconButton
                onClick={handleSearchToggle}
                sx={{ 
                  color: isSearchOpen ? '#1a73e8' : 'inherit',
                  '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' }
                }}
              >
                {isSearchOpen ? <CloseIcon /> : <SearchIcon />}
              </IconButton>
            </Box>

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
                fontSize: '0.9375rem',
                borderRadius: '100px',
                px: 3,
                py: 1,
                '&:hover': { 
                  backgroundColor: '#000000'
                }
              }}
            >
              Shop phones
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ClickAwayListener>
  );
};

export default Header;
