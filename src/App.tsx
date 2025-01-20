import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { Footer } from './components/sections/Footer';
import { Box } from '@mui/material';
import { PhoneListingSection } from './components/sections/PhoneListingSection';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <HeroSection />
        <PhoneListingSection />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
