import { Box, Typography, Divider } from '@mui/material';

const DisclaimerText = () => {
  return (
    <Box sx={{ my: 6, mx: 15 }}>
      <Divider sx={{ mb: 4 }} />
      
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontFamily: '"Google Sans", Roboto, Helvetical, sans-serif', }}>
        ****Estimate of typical capacity based on testing and expected mobile behaviour.
      </Typography>
      
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontFamily: '"Google Sans", Roboto, Helvetical, sans-serif' }}>
        *Estimated battery life based on testing using a median Pixel user battery usage profile across a mix of talk, data, standby and use of other features. Battery testing conducted on a major US operator network. Battery testing conducted in California in mid-2024 on pre-production hardware and software using default settings. Tests began with phones fully charged. Battery life depends upon many factors and the usage of certain features will decrease battery life. Actual battery life may be lower.
      </Typography>
      
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontFamily: '"Google Sans", Roboto, Helvetical, sans-serif' }}>
        **Designed to comply with dust and water protection rating IP68 under IEC standard 60529 when each device leaves the factory, but the device is not water- or dust-proof. The accessories are not water- or dust-resistant. Water resistance and dust resistance are not permanent conditions and will diminish or be lost over time due to normal wear and tear, device repair, disassembly or damage. Phone is not drop/tumble proof and dropping your device may result in loss of water/dust resistance. Damage from drops, tumbles, slips and other external forces are not covered under warranty. Liquid damage voids the warranty. See g.co/pixel/water for details.
      </Typography>
      
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontFamily: '"Google Sans", Roboto, Helvetical, sans-serif' }}>
        ***Designed to comply with water protection rating IPX8 under IEC standard 60529 when each device leaves the factory but device is not waterproof or dust proof. The accessories are not water resistant. Water resistance is not a permanent condition and diminishes or is lost over time due to normal wear and tear, device repair, disassembly or damage. The phone is not drop/tumble proof and dropping your device may result in a loss of water/dust resistance. Damage from drops, tumbles, slips and other external forces are not covered under warranty. Liquid damage voids the warranty. See g.co/pixel/water for details.
      </Typography>
      
      <Typography variant="body2" color="text.secondary" sx={{fontFamily: '"Google Sans", Roboto, Helvetical, sans-serif' }}>
        *****Storage specifications refer to capacity before formatting. Actual formatted capacity will be less.
      </Typography>
    </Box>
  );
};

export default DisclaimerText;
