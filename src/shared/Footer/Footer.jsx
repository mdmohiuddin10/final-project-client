

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

const Footer = () => {
  return (
    <footer  style={{ marginTop: 'auto' }}>
      <Container maxWidth="xl" style={{ padding: '20px 0' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" color="textPrimary">
              Company Name
            </Typography>
            <Typography variant="body2" color="textSecondary">
              A short description about the company.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" color="textPrimary">
              Quick Links
            </Typography>
            <nav>
              <Link href="#" color="textSecondary" style={{ marginRight: '10px' }}>
                Home
              </Link>
              <Link href="#" color="textSecondary" style={{ marginRight: '10px' }}>
                About
              </Link>
              <Link href="#" color="textSecondary" style={{ marginRight: '10px' }}>
                Services
              </Link>
              <Link href="#" color="textSecondary">
                Contact
              </Link>
            </nav>
          </Grid>
        </Grid>
        <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '20px' }}>
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
