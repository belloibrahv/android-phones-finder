import { Button } from '@mui/material';
import { RestartAlt } from '@mui/icons-material';
import { useFilterStore } from '../../store/useFilterStore';
import { useEffect } from 'react';

export const ClearFiltersButton = () => {
  const filters = useFilterStore();

  // Check if any filters are applied
  const hasActiveFilters = Object.entries(filters).some(([key, value]) => {
    if (key === 'setFilter' || key === 'resetFilters') return false;
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === 'string') return value !== '';
    return false;
  });

  // Get current sort option from session storage
  const getSortOption = () => {
    const currentInteractions = sessionStorage.getItem('filterInteractions');
    return currentInteractions 
      ? JSON.parse(currentInteractions).sortBy 
      : 'release-date';
  };

  // Check if the sort option is not the default
  const isSortOptionDefault = getSortOption() === 'release-date';

  // Show the button if filters are applied or the sort option is not default
  const shouldShowButton = hasActiveFilters || !isSortOptionDefault;

  const handleClearAll = () => {
    // Reset filters
    filters.resetFilters();

    // Reset sort option in session storage and update filterInteractions
    const currentInteractions = sessionStorage.getItem('filterInteractions');
    if (currentInteractions) {
      const parsed = JSON.parse(currentInteractions);
      parsed.sortBy = 'release-date'; // Reset to default
      sessionStorage.setItem('filterInteractions', JSON.stringify(parsed));
      
      // Update the window.filterInteractions if it exists
      if (window.filterInteractions) {
        window.filterInteractions.sortBy = 'release-date';
      }
    }

    // Dispatch custom event to notify PhoneListingSection to update sort option
    window.dispatchEvent(new CustomEvent('resetSort', {
      detail: { sortOption: 'release-date' }
    }));
  };

  // Clean up event listener
  useEffect(() => {
    return () => {
      window.removeEventListener('resetSort', () => {});
    };
  }, []);

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