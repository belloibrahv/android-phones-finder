import { Accordion, AccordionSummary, AccordionDetails, Box, Checkbox, Typography } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { useFilterStore } from '../../store/useFilterStore';

interface FilterGroupProps {
  title: string;
  options: string[];
  filterKey: keyof ReturnType<typeof useFilterStore.getState>;
}

export const FilterGroup = ({ title, options, filterKey }: FilterGroupProps) => {
  const { setFilter } = useFilterStore();
  const selectedValues = useFilterStore((state) => state[filterKey]) as string[];

  const handleToggle = (value: string) => {
    const newValues = selectedValues.includes(value)
      ? selectedValues.filter(v => v !== value)
      : [...selectedValues, value];
    setFilter(filterKey, newValues);
  };

  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          {options.map((option) => (
            <Box
              key={option}
              sx={{
                display: 'flex',
                alignItems: 'center',
                py: 0.5
              }}
            >
              <Checkbox
                checked={selectedValues.includes(option)}
                onChange={() => handleToggle(option)}
                size="small"
              />
              <Typography>{option}</Typography>
            </Box>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
