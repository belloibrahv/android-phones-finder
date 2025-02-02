import React from 'react';
import { Button } from '@mui/material';
import { RestartAlt } from '@mui/icons-material';
import { useFilterStore } from '../../store/useFilterStore';

export const ClearFiltersButton = () => {
  const filters = useFilterStore();

  // Check if any filters are applied
  const hasActiveFilters = Object.entries(filters).some(([key, value]) => {
    if (key === 'setFilter' || key === 'resetFilters') return false;
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === 'string') return value !== '';
    return false;
  });

  // Check if the sort option is not the default
  const currentInteractions = sessionStorage.getItem('filterInteractions');
  const sortOption = currentInteractions 
    ? JSON.parse(currentInteractions).sortBy 
    : 'release-date';
  const isSortOptionDefault = sortOption === 'release-date';

  // Show the button if filters are applied or the sort option is not default
  const shouldShowButton = hasActiveFilters || !isSortOptionDefault;

  const handleClearAll = () => {
    // Reset filters and sort option
    filters.resetFilters();

    // Reset sort option in session storage
    const currentInteractions = sessionStorage.getItem('filterInteractions');
    if (currentInteractions) {
      const parsed = JSON.parse(currentInteractions);
      parsed.sortBy = 'release-date'; // Reset to default
      sessionStorage.setItem('filterInteractions', JSON.stringify(parsed));
    }

    // Trigger a storage event to force re-render
    window.dispatchEvent(new Event('storage'));
  };

  if (!shouldShowButton) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      startIcon={<RestartAlt />}
      onClick={handleClearAll}
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