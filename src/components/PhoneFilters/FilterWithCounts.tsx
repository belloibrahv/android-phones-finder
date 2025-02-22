import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { useFilterStore } from '../../store/useFilterStore';
import { generateMockPhones } from '../../utils/mockData';
import { useMemo } from 'react';
import type { Phone } from '../../types/phone';

type FilterKey =
  | 'brand'
  | 'priceRange'
  | 'primaryCamera'
  | 'features'
  | 'batteryLife'
  | 'screenSize'
  | 'storage'
  | 'ram'
  | 'screenResolution'
  | 'dimensions'
  | 'releaseYear'
  | 'searchQuery';

interface FilterWithCountsProps {
  title: string;
  options: readonly string[] | string[];
  filterKey: FilterKey;
  getOptionCount: (phones: Phone[], option: string) => number;
}

const FilterWithCounts = ({
  title,
  options,
  filterKey,
  getOptionCount,
}: FilterWithCountsProps) => {
  const filters = useFilterStore();
  const currentValues = (filters[filterKey] || []) as string[];
  
  // Get all phones once for counting
  const allPhones = useMemo(() => generateMockPhones(), []);

  // Calculate counts for each option with proper type handling
  const optionCounts = useMemo(() => {
    return [...options].reduce<Record<string, number>>((acc, option) => {
      let count = 0;
      
      if (filterKey === 'storage' || filterKey === 'ram') {
        // Handle storage and RAM counting specifically
        count = allPhones.filter(phone => {
          const phoneValue = phone[filterKey]?.toString() || '';
          // Normalize both values for comparison (e.g., "64GB" vs "64 GB")
          const normalizedOption = option.replace(/\s+/g, '').toLowerCase();
          const normalizedPhoneValue = phoneValue.replace(/\s+/g, '').toLowerCase();
          return normalizedPhoneValue === normalizedOption;
        }).length;
      } else {
        // Use the provided getOptionCount for other filters
        count = getOptionCount(allPhones, option);
      }
      
      acc[option] = count;
      return acc;
    }, {});
  }, [options, allPhones, getOptionCount, filterKey]);

  const handleOptionChange = (option: string) => {
    const newValues = currentValues.includes(option)
      ? currentValues.filter((v: string) => v !== option)
      : [...currentValues, option];
    filters.setFilter(filterKey, newValues);
  };

  return (
    <Accordion
      sx={{
        '&.MuiAccordion-root': {
          boxShadow: 'none',
          borderBottom: '1px solid #E5E5E5',
          '&:before': {
            display: 'none',
          },
        }
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          padding: '13px 0',
          color: '#000',
          font: "400 18px/24px '', Roboto, Helvetical, sans-serif",
          textTransform: 'uppercase'
        }}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {[...options].map((option) => (
            <Box key={option} sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={currentValues.includes(option)}
                      onChange={() => handleOptionChange(option)}
                    />
                  }
                  label={option}
                />
              </Box>
              <Typography
                sx={{
                  color: '#5f6368',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '20px',
                  ml: -1
                }}
              >
                ({optionCounts[option] || 0})
              </Typography>
            </Box>
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterWithCounts;