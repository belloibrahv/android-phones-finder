import { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Card, 
  Typography, 
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Checkbox,
  FormControlLabel,
  CircularProgress,
  FormGroup,
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
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Close as CloseIcon
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

// Styled Components
const MoreFiltersButton = styled(Button)(() => ({
  textTransform: 'none',
  padding: '8px 24px',
  fontSize: '1rem',
  fontWeight: 600,
  backgroundColor: 'white',
  color: 'black',
  '&:hover': {
    backgroundColor: 'hsl(0, 3.10%, 87.50%)',
  },
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'left',
  width: '100%',
  marginTop: '16px',
}));

const StyledAccordion = styled(Accordion)(() => ({
  '&.MuiAccordion-root': {
    boxShadow: 'none',
    borderBottom: '1px solid #E5E5E5',
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiAccordionSummary-content': {
    margin: '12px 0',
  },
  '& .MuiTypography-root': {
    fontWeight: 500,
  },
}));

const StyledButton = styled(Button)(() => ({
  borderRadius: '24px',
  textTransform: 'none',
  padding: '8px 24px',
  fontSize: '1rem',
  backgroundColor: '#1C1C1C',
  '&:hover': {
    backgroundColor: '#000000',
  },
  '& .MuiButton-endIcon': {
    marginLeft: 8,
  },
}));

const SeeAllButton = styled(Button)(() => ({
  borderRadius: '24px',
  textTransform: 'none',
  padding: '12px 32px',
  fontSize: '1rem',
  backgroundColor: 'white',
  color: 'black',
  border: '1px solid #1C1C1C',
  '&:hover': {
    backgroundColor: 'hsl(0, 3.10%, 87.50%)',
  },
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

const ClearFilterButton = styled(IconButton)(() => ({
  backgroundColor: 'hsl(0, 3.10%, 87.50%)',
  color: '#666',
  '&:hover': {
    backgroundColor: '#1C1C1C',
    color: 'white',
  },
  marginLeft: '8px',
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


  const renderPriceFilter = () => (
    <StyledAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: '13px 0', color: '#000', font: "400 18px/24px 'Google Sans', Roboto, Helvetical, sans-serif", textTransform: 'uppercase' }}>
        <Typography>PRICE</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {FILTER_OPTIONS.priceRanges.map((range) => (
            <Box key={range.label} sx={{ display: 'flex', alignItems: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.priceRange.includes(range.label)}
                    onChange={() => {
                      const newPriceRange = filters.priceRange.includes(range.label)
                        ? filters.priceRange.filter(label => label !== range.label)
                        : [...filters.priceRange, range.label];
                      handleFilterChange('priceRange', newPriceRange);
                    }}
                  />
                }
                label={range.label}
              />
              {filters.priceRange.includes(range.label) && (
                <ClearFilterButton
                  onClick={() => {
                    const newPriceRange = filters.priceRange.filter(label => label !== range.label);
                    handleFilterChange('priceRange', newPriceRange);
                  }}
                >
                  <CloseIcon />
                </ClearFilterButton>
              )}
            </Box>
          ))}
        </FormGroup>
      </AccordionDetails>
    </StyledAccordion>
  );

  const renderFilter = (
    title: string,
    options: readonly string[],
    filterKey: keyof Omit<ReturnType<typeof useFilterStore.getState>, 'setFilter' | 'resetFilters' | 'priceRange' | 'searchQuery'>
  ) => {
    const currentValues = filters[filterKey] || [];
    
    return (
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: '13px 0', color: '#000', font: "400 18px/24px 'Google Sans', Roboto, Helvetical, sans-serif", textTransform: 'uppercase' }}>
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {options.map((option) => (
              <Box key={option} sx={{ display: 'flex', alignItems: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={currentValues.includes(option)}
                      onChange={() => {
                        const newValues = currentValues.includes(option)
                          ? currentValues.filter(v => v !== option)
                          : [...currentValues, option];
                        filters.setFilter(filterKey, newValues);
                      }}
                    />
                  }
                  label={option}
                />
                {currentValues.includes(option) && (
                  <ClearFilterButton
                    onClick={() => {
                      const newValues = currentValues.filter(v => v !== option);
                      filters.setFilter(filterKey, newValues);
                    }}
                  >
                    <CloseIcon />
                  </ClearFilterButton>
                )}
              </Box>
            ))}
          </FormGroup>
        </AccordionDetails>
      </StyledAccordion>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Box sx={{ mb: 10, mt: 6, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography component='p'>
          I want to explore and compare phones.
        </Typography>
        <Typography variant='h2' sx={{ fontWeight: 600 }}>
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
          sx={{ maxWidth: '250px',  }}
        />

        <Select
          value={sortOption}
          onChange={(e) => handleSortChange(e.target.value as string)}
        >
          {SORT_OPTIONS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
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
          <Box sx={{ position: 'sticky', top: 80 }}>

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
              <Grid container spacing={2}>
                {allPhones.map((phone: Phone) => (
                  <Grid item xs={12} sm={6} md={4} key={phone.id} sx={{ mb: 5 }}>
                    <Card 
                      sx={{ 
                        p: 2,
                        height: '100%',
                        boxShadow: 'none',
                        border: '1px solid #E5E5E5',
                        borderRadius: '12px'
                      }}
                    >
                      <Box 
                        sx={{ 
                          display: 'flex',
                          justifyContent: 'center',
                          mb: 2
                        }}
                      >
                        <img
                          src={phone.imageUrl}
                          alt={phone.name}
                          style={{ 
                            width: '80%', 
                            height: 'auto',
                            objectFit: 'contain'
                          }}
                        />
                      </Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600,
                          mb: 1
                        }}
                      >
                        {phone.name}
                      </Typography>
                      <Typography 
                        sx={{ 
                          color: '#666',
                          mb: 2
                        }}
                      >
                        From ${phone.price.toLocaleString()}
                      </Typography>
                      <StyledButton
                        fullWidth
                        variant="contained"
                        endIcon={<KeyboardArrowDownIcon />}
                      >
                        Buy now
                      </StyledButton>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Load More Button */}
              {hasNextPage && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 9, borderTop: '2px solid #E5E5E5', paddingTop: 4 }}>
                  <SeeAllButton 
                    onClick={handleLoadMore} 
                    disabled={isFetchingNextPage}
                  >
                    {isFetchingNextPage ? 'Loading...' : 'Load More'}
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
