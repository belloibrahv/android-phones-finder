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
  Chip
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { useFilterStore } from '../../store/useFilterStore';
import { FILTER_OPTIONS } from '../../config/constants';
import { generateMockPhones } from '../../utils/mockData';

const mockPhones = generateMockPhones(20);

export const PhoneListingSection = () => {
  const [phones] = useState(mockPhones);
  const filters = useFilterStore();

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
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {FILTER_OPTIONS.brands.map((brand) => (
                    <Button
                      key={brand}
                      variant={filters.brand.includes(brand) ? 'contained' : 'outlined'}
                      onClick={() => filters.setFilter('brand', 
                        filters.brand.includes(brand) 
                          ? filters.brand.filter(b => b !== brand)
                          : [...filters.brand, brand]
                      )}
                    >
                      {brand}
                    </Button>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>

            {/* Other filters following the same pattern */}
            {/* Add similar Accordion components for price, camera, features, etc. */}
          </Box>
        </Grid>

        {/* Phones Grid */}
        <Grid item xs={12} md={9}>
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
                    From £{phone.price.toLocaleString()}
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
        </Grid>
      </Grid>
    </Container>
  );
};
