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
  Menu,
  MenuItem,
  Grow,
  Paper,
  Popper,
  MenuList
} from '@mui/material';
import {
  Search as SearchIcon,
  KeyboardArrowDown as ArrowDownIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import AndroidLogo from '../../assets/images/ui/andriod.svg';
import AndroidLogoImg from '../../assets/images/ui/droid.gif';
import ShopArrow from '../../assets/images/ui/shoparrow.svg';

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  
  // Dropdown menu states
  const [anchorElDiscover, setAnchorElDiscover] = useState<null | HTMLElement>(null);
  const [anchorElSwitch, setAnchorElSwitch] = useState<null | HTMLElement>(null);
  const [anchorElExplore, setAnchorElExplore] = useState<null | HTMLElement>(null);
  
  // Menu open states
  const isDiscoverOpen = Boolean(anchorElDiscover);
  const isSwitchOpen = Boolean(anchorElSwitch);
  const isExploreOpen = Boolean(anchorElExplore);

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

  // Handlers for dropdown menus
  const handleDiscoverClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElDiscover(event.currentTarget);
  };

  const handleSwitchClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSwitch(event.currentTarget);
  };

  const handleExploreClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElExplore(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElDiscover(null);
    setAnchorElSwitch(null);
    setAnchorElExplore(null);
  };

  const commonButtonStyles = {
    textTransform: 'none',
    fontWeight: 500,
    fontSize: '1rem',
    color: '#000000',
    padding: '8px 16px',
    minWidth: 'auto',
    '&:hover': {
      backgroundColor: 'rgba(60, 64, 67, 0.08)'
    }
  };

  // Menu items for each dropdown
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
          {/* Left section with animated logo */}
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
            <Box sx={{ position: 'relative', }}>
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
                {/* Discover Android Dropdown */}
                <Button
                  color="inherit"
                  endIcon={<ArrowDownIcon sx={{ fontSize: '1.25rem', color: '#000' }} />}
                  sx={commonButtonStyles}
                  onClick={handleDiscoverClick}
                  aria-controls={isDiscoverOpen ? 'discover-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={isDiscoverOpen ? 'true' : undefined}
                >
                  Discover Android
                </Button>
                <Menu
                  id="discover-menu"
                  anchorEl={anchorElDiscover}
                  open={isDiscoverOpen}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'discover-button',
                  }}
                  TransitionComponent={Grow}
                  sx={{ mt: 1 }}
                >
                  {discoverMenuItems.map((item) => (
                    <MenuItem key={item} onClick={handleClose}>{item}</MenuItem>
                  ))}
                </Menu>

                {/* Switch to Android Dropdown */}
                <Button
                  color="inherit"
                  endIcon={<ArrowDownIcon sx={{ fontSize: '1.25rem', color: '#000' }} />}
                  sx={commonButtonStyles}
                  onClick={handleSwitchClick}
                  aria-controls={isSwitchOpen ? 'switch-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={isSwitchOpen ? 'true' : undefined}
                >
                  Switch to Android
                </Button>
                <Menu
                  id="switch-menu"
                  anchorEl={anchorElSwitch}
                  open={isSwitchOpen}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'switch-button',
                  }}
                  TransitionComponent={Grow}
                  sx={{ mt: 1 }}
                >
                  {switchMenuItems.map((item) => (
                    <MenuItem key={item} onClick={handleClose}>{item}</MenuItem>
                  ))}
                </Menu>

                {/* Explore Devices Dropdown */}
                <Button
                  color="inherit"
                  endIcon={<ArrowDownIcon sx={{ fontSize: '1.25rem' }} />}
                  sx={commonButtonStyles}
                  onClick={handleExploreClick}
                  aria-controls={isExploreOpen ? 'explore-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={isExploreOpen ? 'true' : undefined}
                >
                  Explore devices
                </Button>
                <Menu
                  id="explore-menu"
                  anchorEl={anchorElExplore}
                  open={isExploreOpen}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'explore-button',
                  }}
                  TransitionComponent={Grow}
                  sx={{ mt: 1 }}
                >
                  {exploreMenuItems.map((item) => (
                    <MenuItem key={item} onClick={handleClose}>{item}</MenuItem>
                  ))}
                </Menu>
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

              {/* Shop Phones Button with hover effect */}
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
                  position: 'relative',
                  overflow: 'hidden',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.2)',
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.3s ease-in-out'
                  },
                  '&:hover': {
                    backgroundColor: '#111111',
                    '&::after': {
                      transform: 'translateX(0)'
                    },
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