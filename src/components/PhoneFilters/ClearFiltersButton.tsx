import React from 'react';
import { Button } from '@mui/material';
import { RestartAlt } from '@mui/icons-material';
import { useFilterStore } from '../../store/useFilterStore';

export const ClearFiltersButton = () => {
  const { resetFilters } = useFilterStore();
  
  return (
    <Button
      variant="outlined"
      startIcon={<RestartAlt />}
      onClick={resetFilters}
      sx={{
        textTransform: 'none',
        borderColor: '#e0e0e0',
        color: '#666',
        '&:hover': {
          borderColor: '#1C1C1C',
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
        mb: 2,
      }}
    >
      Clear All Filters
    </Button>
  );
};
