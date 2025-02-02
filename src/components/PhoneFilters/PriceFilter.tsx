import { Accordion, AccordionSummary, AccordionDetails, Box, Typography } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { FILTER_OPTIONS } from '../../config/constants';
import { useFilterStore } from '../../store/useFilterStore';

export const PriceFilter = () => {
  const { priceRange, setFilter } = useFilterStore();
  
  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>PRICE</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ px: 2 }}>
          {FILTER_OPTIONS.priceRanges.map((range) => (
            <Box
              key={range.label}
              onClick={() => {
                const newPriceRange = priceRange.includes(range.label)
                  ? priceRange.filter(label => label !== range.label)
                  : [...priceRange, range.label];
                setFilter('priceRange', newPriceRange);
              }}
              sx={{
                py: 1,
                px: 2,
                cursor: 'pointer',
                bgcolor: priceRange.includes(range.label) ? 'action.selected' : 'transparent',
                '&:hover': { bgcolor: 'action.hover' },
                borderRadius: 1,
                mb: 1
              }}
            >
              <Typography>{range.label}</Typography>
            </Box>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
