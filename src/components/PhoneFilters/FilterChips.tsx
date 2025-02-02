import React from 'react';
import { Box, Chip } from '@mui/material';
import { useFilterStore } from '../../store/useFilterStore';
import { FILTER_OPTIONS } from '../../config/constants';

export const FilterChips = () => {
  const filters = useFilterStore();
  
  const getFilterLabel = (filterKey: string, value: string) => {
    switch (filterKey) {
      case 'priceRange':
        return value;
      case 'brand':
        return value;
      case 'primaryCamera':
        return value;
      case 'features':
        return value;
      case 'batteryLife':
        return value;
      case 'screenSize':
        return value;
      default:
        return value;
    }
  };

  const renderChips = () => {
    const chips: JSX.Element[] = [];

    Object.entries(filters).forEach(([key, values]) => {
      if (Array.isArray(values) && values.length > 0 && key !== 'setFilter' && key !== 'resetFilters') {
        values.forEach((value) => {
          chips.push(
            <Chip
              key={`${key}-${value}`}
              label={getFilterLabel(key, value)}
              onDelete={() => {
                const newValues = (filters[key as keyof typeof filters] as string[]).filter(
                  (v) => v !== value
                );
                filters.setFilter(key as any, newValues);
              }}
              sx={{
                m: 0.5,
                backgroundColor: '#f5f5f5',
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                },
              }}
            />
          );
        });
      }
    });

    return chips;
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
      {renderChips()}
    </Box>
  );
};
