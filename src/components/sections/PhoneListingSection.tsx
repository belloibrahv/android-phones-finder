import { useEffect } from 'react';
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
  Chip,
  Slider,
  Checkbox,
  FormControlLabel,
  CircularProgress,
  FormGroup
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useFilterStore } from '../../store/useFilterStore';
import { FILTER_OPTIONS } from '../../config/constants';
import { generateMockPhones } from '../../utils/mockData';
import { useInView } from 'react-intersection-observer';
import type { Phone } from '../../types/phone';

const ITEMS_PER_PAGE = 9;

// Mock API call
const fetchPhones = async (
  page: number, 
  filters: ReturnType<typeof useFilterStore.getState>
): Promise<{ phones: Phone[]; hasMore: boolean }> => {
  // Simulate API delay
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

  const start = page * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const paginatedPhones = filteredPhones.slice(start, end);
  
  return {
    phones: paginatedPhones,
    hasMore: end < filteredPhones.length
  };
};

export const PhoneListingSection = () => {
  const filters = useFilterStore();
  const { ref: infiniteScrollRef, inView } = useInView();

  // Setup infinite query
  const { 
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status
  } = useInfiniteQuery({
    queryKey: ['phones', filters],
    queryFn: ({ pageParam = 0 }) => fetchPhones(pageParam, filters),
    getNextPageParam: (lastPage, allPages) => 
      lastPage.hasMore ? allPages.length : undefined,
    initialPageParam: 0
  });

  // Fetch next page when scroll reaches bottom
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const phones = data?.pages.flatMap(page => page.phones) ?? [];

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Every device. Every detail.
      </Typography>
      
      <Grid container spacing={4}>
        {/* Filters Column */}
        <Grid item xs={12} md={3}>
          <Box sx={{ position: 'sticky', top: 80 }}>
            <TextField
              fullWidth
              placeholder="Search"
              variant="outlined"
              sx={{ mb: 2 }}
              value={filters.searchQuery}
              onChange={(e) => filters.setFilter('searchQuery', e.target.value)}
            />
            
            {/* Brand Filter */}
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>BRAND</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  {FILTER_OPTIONS.brands.map((brand) => (
                    <FormControlLabel
                      key={brand}
                      control={
                        <Checkbox
                          checked={filters.brand.includes(brand)}
                          onChange={() => filters.setFilter('brand', 
                            filters.brand.includes(brand)
                              ? filters.brand.filter(b => b !== brand)
                              : [...filters.brand, brand]
                          )}
                        />
                      }
                      label={brand}
                    />
                  ))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            {/* Price Filter */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>PRICE</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ px: 2 }}>
                  <Slider
                    value={[
                      filters.priceRange?.min || 0,
                      filters.priceRange?.max || 1500
                    ]}
                    onChange={(_, newValue) => filters.setFilter('priceRange', {
                      min: newValue[0],
                      max: newValue[1]
                    })}
                    valueLabelDisplay="auto"
                    min={0}
                    max={1500}
                    step={100}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>$0</Typography>
                    <Typography>$1,500+</Typography>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>

            {/* Camera Filter */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>PRIMARY CAMERA</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  {FILTER_OPTIONS.primaryCamera.map((camera) => (
                    <FormControlLabel
                      key={camera}
                      control={
                        <Checkbox
                          checked={filters.primaryCamera.includes(camera)}
                          onChange={() => filters.setFilter('primaryCamera',
                            filters.primaryCamera.includes(camera)
                              ? filters.primaryCamera.filter(c => c !== camera)
                              : [...filters.primaryCamera, camera]
                          )}
                        />
                      }
                      label={camera}
                    />
                  ))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            {/* Features Filter */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>FEATURES</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  {FILTER_OPTIONS.features.map((feature) => (
                    <FormControlLabel
                      key={feature}
                      control={
                        <Checkbox
                          checked={filters.features.includes(feature)}
                          onChange={() => filters.setFilter('features',
                            filters.features.includes(feature)
                              ? filters.features.filter(f => f !== feature)
                              : [...filters.features, feature]
                          )}
                        />
                      }
                      label={feature}
                    />
                  ))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            {/* Battery Life Filter */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>BATTERY LIFE</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  {FILTER_OPTIONS.batteryLife.map((battery) => (
                    <FormControlLabel
                      key={battery}
                      control={
                        <Checkbox
                          checked={filters.batteryLife.includes(battery)}
                          onChange={() => filters.setFilter('batteryLife',
                            filters.batteryLife.includes(battery)
                              ? filters.batteryLife.filter(b => b !== battery)
                              : [...filters.batteryLife, battery]
                          )}
                        />
                      }
                      label={battery}
                    />
                  ))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            {/* Screen Size Filter */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>SCREEN SIZE</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  {FILTER_OPTIONS.screenSizes.map((size) => (
                    <FormControlLabel
                      key={size}
                      control={
                        <Checkbox
                          checked={filters.screenSize.includes(size)}
                          onChange={() => filters.setFilter('screenSize',
                            filters.screenSize.includes(size)
                              ? filters.screenSize.filter(s => s !== size)
                              : [...filters.screenSize, size]
                          )}
                        />
                      }
                      label={size}
                    />
                  ))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>

        {/* Phones Grid */}
        <Grid item xs={12} md={9}>
          {status === 'pending' ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
              <CircularProgress />
            </Box>
          ) : status === 'error' ? (
            <Typography color="error" align="center">
              Error loading phones. Please try again.
            </Typography>
          ) : (
            <>
              <Grid container spacing={2}>
                {phones.map((phone) => (
                  <Grid item xs={12} sm={6} md={4} key={phone.id}>
                    <Card sx={{ p: 2, height: '100%' }}>
                      <Box sx={{ position: 'relative' }}>
                        {phone.isNew && (
                          <Chip
                            label="NEW"
                            size="small"
                            sx={{
                              position: 'absolute',
                              top: 8,
                              left: 8,
                              bgcolor: '#E8F0FE',
                              color: '#1a73e8'
                            }}
                          />
                        )}
                        <img
                          src={phone.imageUrl}
                          alt={phone.name}
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </Box>
                      <Typography variant="h6" gutterBottom>
                        {phone.name}
                      </Typography>
                      <Typography color="textSecondary">
                        From ${phone.price.toLocaleString()}
                      </Typography>
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{ 
                          mt: 2,
                          backgroundColor: '#1a73e8',
                          '&:hover': { backgroundColor: '#1557b0' }
                        }}
                      >
                        Buy now
                      </Button>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Infinite Scroll Trigger */}
              <Box 
                ref={infiniteScrollRef}
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  p: 4 
                }}
              >
                {isFetchingNextPage && <CircularProgress />}
              </Box>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};