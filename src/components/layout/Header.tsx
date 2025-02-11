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
import ShopArrow from '../../assets/images/ui/shoparrow.svg';

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

  const commonButtonStyles = {
    textTransform: 'none',
    fontWeight: 500,
    fontSize: '1rem',
    color: '#00000',
    padding: '8px 16px',
    minWidth: 'auto',
    '&:hover': { 
      backgroundColor: 'rgba(60, 64, 67, 0.08)'
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <AppBar 
        position="fixed" 
        color="default" 
        elevation={0}
        sx={{ 
          backgroundColor: 'white',
          boxShadow: '0 5px 6px 0 rgba(232, 229, 229, 0.3), 0 2px 6px 2px rgba(232, 232, 232, 0.15)',
          height: '84px'
        }}
      >
        <Toolbar 
          sx={{ 
            justifyContent: 'space-between', 
            height: '100%',
            lineHeight: '64px !important',
            minHeight: '64px !important',
            px: { xs: 2, md: 3 }
          }}
        >
          {/* Left section */}
          <Box 
            component="a" 
            href="/"
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
              justifyContent: 'space-around',
              marginLeft: '55px',
            }}
          >
            <img src={AndroidLogo} alt="Android" style={{ height: '24px', width: '110px' }} />
          </Box>

          {/* Center/Right section */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            ml: 'auto',
          }}>
            {!isSearchOpen && (
              <>
                <Button 
                  color="inherit"
                  endIcon={<ArrowDownIcon sx={{ fontSize: '1.25rem', color: '#000' }} />}
                  sx={commonButtonStyles}
                >
                  Discover Android
                </Button>
                <Button 
                  color="inherit"
                  endIcon={<ArrowDownIcon sx={{ fontSize: '1.25rem', color: '#000' }} />}
                  sx={commonButtonStyles}
                >
                  Switch to Android
                </Button>
                <Button 
                  color="inherit"
                  endIcon={<ArrowDownIcon sx={{ fontSize: '1.25rem' }} />}
                  sx={commonButtonStyles}
                >
                  Explore devices
                </Button>
              </>
            )}

            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              ml: 1
            }}>
              <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Collapse 
                  in={isSearchOpen} 
                  orientation="horizontal"
                  sx={{ 
                    position: 'absolute', 
                    right: '100%', 
                    pr: 2,
                    width: '300px'
                  }}
                >
                  <InputBase
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    sx={{ 
                      width: '100%',
                      '& input': { 
                        fontSize: '1rem',
                        padding: '8px 0'
                      }
                    }}
                  />
                </Collapse>
                
                <IconButton
                  onClick={handleSearchToggle}
                  size="large"
                  sx={{ 
                    color: isSearchOpen ? '#1a73e8' : '#5f6368',
                    padding: '8px',
                    '&:hover': { 
                      backgroundColor: 'rgba(60, 64, 67, 0.08)'
                    }
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
                      display: 'inline-flex',
                      fontSize: '2.25rem',
                      ml: 0.5,
                    }}
                  >
                  <img src={ShopArrow} alt="Shop Arrow" style={{ height: '20px', width: '20px' }} />
                  </Box>
                }
                sx={{ 
                  backgroundColor: '#000000',
                  color: 'white',
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  borderRadius: '100px',
                  marginRight: '55px',
                  px: 3,
                  py: 1,
                  ml: 1,
                  height: '40px',
                  // '&:hover': { 
                  //   backgroundColor: '#ffffff',
                  //   color: '#000000',
                  //   // border: '1px double #000000',
                  // }
                }}
              >
                Shop phones
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ClickAwayListener>
  );
};

export default Header;