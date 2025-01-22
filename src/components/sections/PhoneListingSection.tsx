import { useState } from 'react';
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
  Collapse,
  styled
} from '@mui/material';
import { 
  ExpandMore as ExpandMoreIcon,
  Search as SearchIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon 
} from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import { FilterState, useFilterStore } from '../../store/useFilterStore';
import { FILTER_OPTIONS, SORT_OPTIONS } from '../../config/constants';
import { generateMockPhones } from '../../utils/mockData';
import type { Phone } from '../../types/phone';
import { useFilterInteractions } from '@/hooks/useFilterInteractions';

const ITEMS_PER_PAGE = 9;

// Styled Components
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
    fontWeight: 600,
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
    borderRadius: '24px',
    '& fieldset': {
      borderColor: '#E5E5E5',
    },
    '&:hover fieldset': {
      borderColor: '#1C1C1C',
    },
  },
});

// Mock API call
const fetchPhones = async (
  page: number,
  filters: ReturnType<typeof useFilterStore.getState>,
  sortOption: string
): Promise<{ phones: Phone[]; totalCount: number }> => {
  await new Promise(resolve => setTimeout(resolve, 800));

  let filteredPhones = generateMockPhones(50);

  // Apply filters
  if (filters.searchQuery) {
    filteredPhones = filteredPhones.filter(phone => 
      phone.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
    );
  }

  if (filters.brand.length > 0) {
    filteredPhones = filteredPhones.filter(phone => 
      filters.brand.includes(phone.brand)
    );
  }

  if (filters.priceRange) {
    filteredPhones = filteredPhones.filter(phone => 
      phone.price >= filters.priceRange!.min && 
      phone.price <= filters.priceRange!.max
    );
  }

  if (filters.primaryCamera.length > 0) {
    filteredPhones = filteredPhones.filter(phone => 
      filters.primaryCamera.includes(phone.primaryCamera)
    );
  }

  if (filters.features.length > 0) {
    filteredPhones = filteredPhones.filter(phone => 
      filters.features.every(feature => phone.features.includes(feature))
    );
  }

  if (filters.batteryLife.length > 0) {
    filteredPhones = filteredPhones.filter(phone => 
      filters.batteryLife.includes(phone.batteryLife)
    );
  }

  if (filters.screenSize.length > 0) {
    filteredPhones = filteredPhones.filter(phone => 
      filters.screenSize.includes(phone.screenSize)
    );
  }

  // Apply sorting
  switch (sortOption) {
    case 'price-asc':
      filteredPhones.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filteredPhones.sort((a, b) => b.price - a.price);
      break;
    case 'release-date':
      filteredPhones.sort((a, b) => b.releaseYear - a.releaseYear);
      break;
  }

  const start = page * ITEMS_PER_PAGE;
  const paginatedPhones = filteredPhones.slice(start, start + ITEMS_PER_PAGE);
  
  return {
    phones: paginatedPhones,
    totalCount: filteredPhones.length
  };
};

export const PhoneListingSection = () => {
  const [page, setPage] = useState(0);
  const [sortOption, setSortOption] = useState('price-asc');
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const filters = useFilterStore();

  const { 
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['phones', page, filters, sortOption],
    queryFn: () => fetchPhones(page, filters, sortOption),
  });

  useFilterInteractions(data?.phones || []);

  const handleSeeMore = () => {
    setPage(prev => prev + 1);
  };

  // Updated renderFilter function with type safety
  const renderFilter = (
    title: string,
    options: readonly string[],
    filterKey: keyof Omit<FilterState, 'setFilter' | 'resetFilters' | 'priceRange' | 'searchQuery'>
  ) => {
    // Ensure we have a valid array of values for the filter
    const currentValues = filters[filterKey] || [];
    
    return (
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {options.map((option) => (
              <FormControlLabel
                key={option}
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
            ))}
          </FormGroup>
        </AccordionDetails>
      </StyledAccordion>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Mobile Phones
        </Typography>
        <Select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          sx={{ minWidth: 200, borderRadius: '24px' }}
        >
          {SORT_OPTIONS.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </Box>
      
      <Grid container spacing={4}>
        {/* Filters Column */}
        <Grid item xs={12} md={3}>
          <Box sx={{ position: 'sticky', top: 80 }}>
            <SearchTextField
              fullWidth
              placeholder="Search"
              value={filters.searchQuery}
              onChange={(e) => filters.setFilter('searchQuery', e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 3 }}
            />
            
            {/* Main Filters - Updated calls */}
            {renderFilter('BRAND', FILTER_OPTIONS.brands, 'brand')}
            {renderFilter('PRIMARY CAMERA', FILTER_OPTIONS.primaryCamera, 'primaryCamera')}
            {renderFilter('FEATURES', FILTER_OPTIONS.features, 'features')}
            {renderFilter('BATTERY LIFE', FILTER_OPTIONS.batteryLife, 'batteryLife')}
            {renderFilter('SCREEN SIZE', FILTER_OPTIONS.screenSizes, 'screenSize')}
              
            {/* More Filters Button */}
            <Button
              fullWidth
              onClick={() => setShowMoreFilters(!showMoreFilters)}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ mt: 2, textTransform: 'none' }}
            >
              + More Filters
            </Button>

            {/* Additional Filters - Updated calls */}
            <Collapse in={showMoreFilters}>
              {renderFilter('STORAGE', FILTER_OPTIONS.storage, 'storage')}
              {renderFilter('RAM', FILTER_OPTIONS.ram, 'ram')}
              {renderFilter('SCREEN RESOLUTION', FILTER_OPTIONS.screenResolution, 'screenResolution')}
              {renderFilter('DIMENSIONS', FILTER_OPTIONS.dimensions, 'dimensions')}
              {renderFilter('RELEASE YEAR', FILTER_OPTIONS.releaseYears.map(String), 'releaseYear')}
            </Collapse>
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
                {data?.phones.map((phone) => (
                  <Grid item xs={12} sm={6} md={4} key={phone.id}>
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

              {/* See All Button */}
              {data && data.totalCount > (page + 1) * ITEMS_PER_PAGE && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 9, borderTop: '2px solid #E5E5E5', paddingTop: 4 }}>
                  <SeeAllButton onClick={handleSeeMore}>
                    See all
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
