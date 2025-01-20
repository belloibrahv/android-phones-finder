import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { Footer } from './components/sections/Footer';
import { Box } from '@mui/material';
import { PhoneListingSection } from './components/sections/PhoneListingSection';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <HeroSection />
        <PhoneListingSection />
      </Box>
      <Footer />
    </Box>
    </QueryClientProvider>
  );
}

export default App;
