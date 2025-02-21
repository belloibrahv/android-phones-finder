import { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Card, 
  Typography, 
  Button,
  Accordion,
  TextField,
  Checkbox,
  CircularProgress,
  Select,
  MenuItem,
  InputAdornment,
  IconButton,
  styled,
  Divider
} from '@mui/material';
import { 
  ExpandMore as ExpandMoreIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import { useFilterStore } from '../../store/useFilterStore';
import { FILTER_OPTIONS, SORT_OPTIONS } from '../../config/constants';
import { usePhoneFiltering } from '../../hooks/usePhoneFiltering';
import { useFilterInteractions } from '../../hooks/useFilterInteractions';
import { initializeFilterInteractions, updateFilterInteractions } from '@/utils/filterInteractions';
import type { Phone } from '../../types/phone';
import { generateMockPhones } from '@/utils/mockData';
import { FilterInteractions } from '@/types/filterInteractions';
import { FilterChips } from '../PhoneFilters/FilterChips';
import { ClearFiltersButton } from '../PhoneFilters/ClearFiltersButton';
import FilterWithCounts from '../PhoneFilters/FilterWithCounts';
import { getFilterCounts } from '../../utils/filterCountUtils';

// Styled Components
const MoreFiltersButton = styled(Button)(() => ({
  textTransform: 'none',
  padding: '8px 0',
  font: '700 18px/24px "", Roboto, Helvetical, sans-serif',
  backgroundColor: 'white',
  color: 'black',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'left',
  width: '100%',
  marginTop: '16px',
}));

const SeeAllButton = styled(Button)(() => ({
    backgroundColor: '#ffffff',
    color: '#000000',
    textTransform: 'none',
    fontFamily: "Roboto, sans-serif, Arial, Helvetica",
    fontWeight: '600',
    fontSize: '14px',
    letterSpacing: '0.3px',
    lineHeight: '24px',
    borderRadius: '30px',
    marginRight: '30px',
    padding: '23px 20px 20px',
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
      backgroundColor: 'rgb(218, 220, 224)',
      '& .MuiBox-root': {
        transform: 'translateX(5px)'
      }
    },
    '& .MuiBox-root': {
      transition: 'transform 0.1s ease-in-out'
    }
}));

const SearchTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderWidth: '0 0 0 0',
    },
    '&:hover fieldset': {
      borderWidth: '0 0 0 0',
    },
    '&:focus fieldset': {
      borderWidth: '0 0 0 0',
    },
  },
});

const StyledSelect = styled(Select)(() => ({
  '& .MuiSelect-select': {
    padding: '8px 32px 8px 16px',
    fontSize: '14px',
    fontWeight: 600,
    fontFamily: "'', Roboto, Helvetical, sans-serif",
    color: '#202124',
    borderRadius: '0',
    border: 'none',
    '&:focus': {
      background: 'transparent',
    }
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '& .MuiSelect-icon': {
    right: '8px',
    top: 'calc(50% - 12px)',
    color: '#202124'
  }
}));

const StyledCard = styled(Card)(() => ({
  padding: '24px',
  height: '100%',
  boxShadow: 'none',
  border: 'none',
  borderRadius: '20px',
  backgroundColor: '#f8f9fa',
  fontFamily: "'', Roboto, Helvetical, sans-serif",
  transition: 'all 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  }
}));

const StyledNewLabel = styled(Box)(() => ({
  backgroundColor: 'rgb(232, 234, 237)',
  color: 'rgb(32, 33, 36)',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '14px',
  fontWeight: 600,
  fontFamily: "'', Roboto, Helvetical, sans-serif",
  display: 'inline-flex',
  alignItems: 'center',
  marginRight: '8px'
}));

const BuyNowButton = styled(Button)(() => ({
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
  },
  '& .MuiButton-endIcon': {
    marginLeft: '8px',
    color: '#c2ff00',
    '& svg': {
      fontSize: '20px'
    }
  }
}));

export const PhoneListingSection = () => {
  const filters = useFilterStore();
  const {
    sortOption,
    setSortOption,
    // filteredResults,
    updateFilteredResults
  } = useFilterInteractions();
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError
  } = usePhoneFiltering(sortOption);

  useEffect(() => {
    const interactions = sessionStorage.getItem('filterInteractions');
    if (interactions) {
      const parsed = JSON.parse(interactions);
      if (parsed.sortBy) {
        setSortOption(parsed.sortBy); // Set sort option from session storage
      }
    }
  }, [setSortOption]);

  // Initialize filter interactions on component mount
  useEffect(() => {
    const interactions = initializeFilterInteractions();
    
    // Update store with persisted values if they exist
    if (interactions) {
      Object.entries(interactions).forEach(([key, value]) => {
        if (key !== 'results' && key !== 'sortBy') {
          filters.setFilter(
            key as keyof Omit<FilterInteractions, 'results' | 'sortBy'>,
            value
          );
        }
        if (key === 'sortBy') {
          setSortOption(value as string);
        }
      });
    }
    
    // Initialize results
    const allPhones = generateMockPhones();
    updateFilteredResults(
      allPhones.map(phone => ({
        id: phone.id,
        name: phone.name,
        brand: phone.brand,
        price: phone.price,
        primaryCamera: phone.primaryCamera,
        features: phone.features,
        batteryLife: phone.batteryLife,
        screenSize: phone.screenSize,
        imageUrl: phone.imageUrl,
        isNew: phone.isNew,
        dimensions: phone.dimensions,
        storage: phone.storage,
        ram: phone.ram,
        screenResolution: phone.screenResolution,
        releaseYear: phone.releaseYear
      }))
    );
  }, []);

  useEffect(() => {
    const handleResetSort = (event: CustomEvent<{ sortOption: string }>) => {
      handleSortChange(event.detail.sortOption);
    };
  
    // Add event listener
    window.addEventListener('resetSort', handleResetSort as EventListener);
  
    // Cleanup
    return () => {
      window.removeEventListener('resetSort', handleResetSort as EventListener);
    };
  }, []);

  // Flatten the pages to get all phones
  const allPhones = data?.pages.flatMap(page => page.phones) || [];

  const handleLoadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const handleSortChange = (value: string) => {
    setSortOption(value);
    // Update session storage
    const interactions = sessionStorage.getItem('filterInteractions');
    if (interactions) {
      const parsed = JSON.parse(interactions);
      parsed.sortBy = value;
      sessionStorage.setItem('filterInteractions', JSON.stringify(parsed));
    }
  };

  const handleFilterChange = (
    filterKey: keyof Omit<FilterInteractions, 'results' | 'sortBy'>,
    value: any
  ) => {
    filters.setFilter(filterKey, value);
    updateFilterInteractions(filterKey, value, allPhones);
  };


  const renderFilter = (
    title: string,
    options: readonly string[],
    filterKey: keyof typeof getFilterCounts
  ) => {
    return (
      <FilterWithCounts
        title={title}
        options={options}
        filterKey={filterKey}
        getOptionCount={(phones, option) => getFilterCounts[filterKey](phones, option)}
      />
    );
  };

  const renderPriceFilter = () => (
    <FilterWithCounts
      title="PRICE"
      options={FILTER_OPTIONS.priceRanges.map(range => range.label)}
      filterKey="priceRange"
      getOptionCount={(phones, option) => getFilterCounts.priceRange(phones, option)}
    />
  );

  const renderPhoneGrid = (phones: Phone[]) => (
    <Grid container spacing={3}>
      {phones.map((phone: Phone) => (
        <Grid item xs={12} sm={6} md={4} key={phone.id} sx={{ mb: 10 }}>
          <StyledCard>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Checkbox sx={{ p: 0, mr: 1 }} />
            </Box>
            
            <Box sx={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flex: 1,
              mb: 3
            }}>
              <img 
                src={phone.imageUrl} 
                alt={phone.name}
                style={{ 
                  maxWidth: '80%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                {phone.isNew && (
                  <StyledNewLabel>NEW</StyledNewLabel>
                )}
                <Typography variant="h6" component="h3" sx={{ 
                  fontWeight: 700,
                  fontSize: '16px'
                }}>
                  {phone.name}
                </Typography>
              </Box>
              
              <Typography variant="body1" sx={{ 
                color: '#5f6368',
                fontSize: '14px',
                fontWeight: 400,
              }}>
                From ${phone.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </Typography>
            </Box>
            
            <BuyNowButton
              endIcon={<Box component="span" sx={{ color: '#c2ff00', fontSize: '100px', fontWeight: 700 }}>+</Box>}
            >
              Buy now
            </BuyNowButton>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Box sx={{ mb: 10, mt: 6, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography component='p' sx={{ fontSize: '16px', lineHeight: '24px', letterSpacing: '0px', mb: 2 }}>
          I want to explore and compare phones.
        </Typography>
        <Typography variant='h2' sx={{ fontWeight: 700, fontSize: '56px', lineHeight: '64px', letterSpacing: '-1px' }}>
          Every device. Every detail.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <SearchTextField
          fullWidth
          placeholder="Search"
          value={filters.searchQuery}
          onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ maxWidth: '250px' }}
        />

        <StyledSelect
          value={sortOption}
          onChange={(e) => handleSortChange(e.target.value as string)}
          IconComponent={ExpandMoreIcon}
        >
          {SORT_OPTIONS.map((option) => (
            <MenuItem 
              key={option.value} 
              value={option.value}
              sx={{
                fontWeight: sortOption === option.value ? 700 : 400,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </StyledSelect>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Box sx={{ position: 'sticky', top: 80 }}>
            <ClearFiltersButton />
          </Box>
        </Grid>
      </Grid>
      
      <Grid container spacing={4}>
        {/* Filters Column */}
        <Grid item xs={12} md={3}>
          <Box sx={{ }}>

            <Box sx={{ width: '100%', mb: 3 }}>
              <FilterChips />
            </Box>
            
            <Divider />
            {/* Main Filters */}
            {renderFilter('BRAND', FILTER_OPTIONS.brands, 'brand')}
            {renderPriceFilter()}
            {renderFilter('PRIMARY CAMERA', FILTER_OPTIONS.primaryCamera, 'primaryCamera')}
            {renderFilter('FEATURES', FILTER_OPTIONS.features, 'features')}
            {renderFilter('BATTERY LIFE', FILTER_OPTIONS.batteryLife, 'batteryLife')}
            {renderFilter('SCREEN SIZE', FILTER_OPTIONS.screenSizes, 'screenSize')}
            
            {/* Additional Filters */}
            {!showMoreFilters && (
              <MoreFiltersButton
                onClick={() => setShowMoreFilters(true)}
              >
                + More Filters
              </MoreFiltersButton>
            )}

            {/* Additional Filters in Continuous Flow */}
            {showMoreFilters && (
              <>
                {renderFilter('DIMENSIONS', FILTER_OPTIONS.dimensions || [], 'dimensions')}
                {renderFilter('STORAGE', FILTER_OPTIONS.storage || [], 'storage')}
                {renderFilter('RAM', FILTER_OPTIONS.ram || [], 'ram')}
                {renderFilter('SCREEN RESOLUTION', FILTER_OPTIONS.screenResolution || [], 'screenResolution')}
                {renderFilter('RELEASE YEAR', FILTER_OPTIONS.releaseYears ? FILTER_OPTIONS.releaseYears.map(String) : [], 'releaseYear')}
              </>
            )}
          </Box>
        </Grid>

        {/* Phones Grid */}
        <Grid item xs={12} md={9}>
          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
              <CircularProgress />
            </Box>
          ) : isError ? (
            <Typography color="error" align="center">
              Error loading phones. Please try again.
            </Typography>
          ) : (
            <>
              {renderPhoneGrid(allPhones)}

              {/* Load More Button */}
              {hasNextPage && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 9, borderTop: '2px solid #E5E5E5', paddingTop: 4 }}>
                  <SeeAllButton 
                    onClick={handleLoadMore} 
                    disabled={isFetchingNextPage}
                  >
                    {isFetchingNextPage ? 'Loading...' : 'See more'}
                  </SeeAllButton>
                </Box>
              )}
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};
