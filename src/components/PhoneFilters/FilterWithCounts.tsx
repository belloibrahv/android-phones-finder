import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon, Close as CloseIcon } from '@mui/icons-material';
import { useFilterStore } from '../../store/useFilterStore';
import { generateMockPhones } from '../../utils/mockData';
import { useMemo } from 'react';

const FilterWithCounts = ({
  title,
  options,
  filterKey,
  getOptionCount,
}) => {
  const filters = useFilterStore();
  const currentValues = filters[filterKey] || [];
  
  // Get all phones once for counting
  const allPhones = useMemo(() => generateMockPhones(), []);

  // Calculate counts for each option
  const optionCounts = useMemo(() => {
    return options.reduce((acc, option) => {
      // Count phones that match this option
      const count = getOptionCount(allPhones, option);
      acc[option] = count;
      return acc;
    }, {});
  }, [options, allPhones, getOptionCount]);

  const handleOptionChange = (option) => {
    const newValues = currentValues.includes(option)
      ? currentValues.filter(v => v !== option)
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
          {options.map((option) => (
            <Box key={option} sx={{ display: 'flex', alignItems: 'center', }}>
              <Box sx={{ display: 'flex', alignItems: 'center', }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={currentValues.includes(option)}
                      onChange={() => handleOptionChange(option)}
                    />
                  }
                  label={option}
                />
                {/* {currentValues.includes(option) && (
                  <IconButton
                    onClick={() => handleOptionChange(option)}
                    sx={{
                      backgroundColor: 'hsl(0, 3.10%, 87.50%)',
                      color: '#666',
                      '&:hover': {
                        backgroundColor: '#1C1C1C',
                        color: 'white',
                      },
                      ml: 1,
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                )} */}
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
                ({optionCounts[option]})
              </Typography>
            </Box>
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterWithCounts;
