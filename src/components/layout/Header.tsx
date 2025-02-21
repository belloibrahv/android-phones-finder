import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Collapse,
  InputBase,
  ClickAwayListener,
  MenuItem,
  Grow,
  Popper,
  Paper,
} from '@mui/material';
import {
  Search as SearchIcon,
  KeyboardArrowDown as ArrowDownIcon,
  KeyboardArrowUp as ArrowUpIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import AndroidLogo from '../../assets/images/ui/andriod.svg';
import AndroidLogoImg from '../../assets/images/ui/droid.gif';
import ShopArrow from '../../assets/images/ui/shoparrow.svg';

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  
  // Hover states for menus
  const [anchorElDiscover, setAnchorElDiscover] = useState<null | HTMLElement>(null);
  const [anchorElSwitch, setAnchorElSwitch] = useState<null | HTMLElement>(null);
  const [anchorElExplore, setAnchorElExplore] = useState<null | HTMLElement>(null);

  // Menu items
  const discoverMenuItems = [
    'Latest Features',
    'Android 15',
    'Safety',
    'Accessibility',
    'Google Messages',
    'Enterprise',
    'Android Autos',
    'Quick Share',
    'Android Magazine'
  ];

  const switchMenuItems = [
    'Why Android',
    'How to switch'
  ];

  const exploreMenuItems = [
    'Phones',
    'Compare phones',
    'Tablets',
    'Connected devices',
    'Find my device'
  ];

  // Handlers for search
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

  // Hover handlers
  const handleMenuEnter = (event: React.MouseEvent<HTMLElement>, setAnchor: (el: HTMLElement | null) => void) => {
    setAnchor(event.currentTarget);
  };

  const handleMenuLeave = (setAnchor: (el: HTMLElement | null) => void) => {
    setAnchor(null);
  };

  const commonButtonStyles = {
    textTransform: 'none',
    fontWeight: 500,
    fontSize: '1rem',
    color: '#000000',
    padding: '8px 16px',
    minWidth: 'auto',
    zIndex: 1,
    '&:hover': {
      backgroundColor: 'transparent',
      textDecoration: 'underline',
    },
  };

  const popperStyles = {
    zIndex: 9999,
    '& .MuiPaper-root': {
      marginTop: '0',
      boxShadow: '0 2px 6px rgba(60,64,67,.15)',
      borderRadius: '8px',
      minWidth: '200px',
      backgroundColor: 'white',
    },
  };

  const menuItemStyles = {
    padding: '12px 24px',
    '&:hover': {
      backgroundColor: 'transparent',
      textDecoration: 'underline',
    },
  };

  // Custom menu component
  const HoverMenu = ({ 
    anchorEl, 
    items, 
    onLeave 
  }: { 
    anchorEl: HTMLElement | null; 
    items: string[];
    onLeave: () => void;
  }) => (
    <Popper
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      placement="bottom-start"
      transition
      sx={popperStyles}
      onMouseLeave={onLeave}
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps}>
          <Paper>
            {items.map((item) => (
              <MenuItem 
                key={item} 
                sx={menuItemStyles}
              >
                {item}
              </MenuItem>
            ))}
          </Paper>
        </Grow>
      )}
    </Popper>
  );

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          backgroundColor: 'hsl(0, 0.00%, 100.00%)',
          boxShadow: '0px 2px 6px 0px hsla(0,0%,76%,.25)',
          height: '88px',
          lineHeight: '88px',
          zIndex: 1000,
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
          {/* Left section with logo */}
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
              position: 'relative'
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <img
                src={AndroidLogo}
                alt="Android"
                style={{
                  height: '24px',
                  width: '110px',
                  transition: 'transform 0.5s ease-in-out',
                }}
              />
              <img
                src={AndroidLogoImg}
                alt="Android"
                style={{
                  height: '24px',
                  marginLeft: '-30px',
                  position: 'relative',
                  top: '-4px',
                  transition: 'transform 0.5s ease-in-out'
                }}
              />
            </Box>
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
                {/* Discover Android Button with Hover Menu */}
                <Box
                  onMouseEnter={(e) => handleMenuEnter(e, setAnchorElDiscover)}
                  onMouseLeave={() => handleMenuLeave(setAnchorElDiscover)}
                >
                  <Button
                    endIcon={Boolean(anchorElDiscover) ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    sx={commonButtonStyles}
                  >
                    Discover Android
                  </Button>
                  <HoverMenu
                    anchorEl={anchorElDiscover}
                    items={discoverMenuItems}
                    onLeave={() => handleMenuLeave(setAnchorElDiscover)}
                  />
                </Box>

                {/* Switch to Android Button with Hover Menu */}
                <Box
                  onMouseEnter={(e) => handleMenuEnter(e, setAnchorElSwitch)}
                  onMouseLeave={() => handleMenuLeave(setAnchorElSwitch)}
                >
                  <Button
                    endIcon={Boolean(anchorElSwitch) ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    sx={commonButtonStyles}
                  >
                    Switch to Android
                  </Button>
                  <HoverMenu
                    anchorEl={anchorElSwitch}
                    items={switchMenuItems}
                    onLeave={() => handleMenuLeave(setAnchorElSwitch)}
                  />
                </Box>

                {/* Explore devices Button with Hover Menu */}
                <Box
                  onMouseEnter={(e) => handleMenuEnter(e, setAnchorElExplore)}
                  onMouseLeave={() => handleMenuLeave(setAnchorElExplore)}
                >
                  <Button
                    endIcon={Boolean(anchorElExplore) ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    sx={commonButtonStyles}
                  >
                    Explore devices
                  </Button>
                  <HoverMenu
                    anchorEl={anchorElExplore}
                    items={exploreMenuItems}
                    onLeave={() => handleMenuLeave(setAnchorElExplore)}
                  />
                </Box>
              </>
            )}

            {/* Search Box */}
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

              {/* Shop phones Button */}
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
