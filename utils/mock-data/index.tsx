import { Typography, Box, Tab } from '@mui/material';

export const productName = ['Jonathan Simkhai', 'Blazers', 'Viscose'];
export const tabsData = [
  {
    label: 'Details',
    content: (
      <>
        <Typography
          sx={{
            color: '#000',
            fontFamily: 'Helvetica',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '19.6px ',
          }}
        >
          The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night
          and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines
          like a star in the sky. it has a straight fit with well defined shoulders and a shawl
          collar culminating in a button and has been flawlessly finished with three jet pockets
          with a sartorial feel.
        </Typography>
        <Box
          sx={{
            mt: 2,
            display: 'flex',
            gap: 2,
            color: '#000',
            fontFamily: 'Helvetica',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '19.6px ',
          }}
        >
          <Typography>
            See the{' '}
            <a href="#" target="_blank" style={{ textDecoration: 'underline' }}>
              EDITOR’S NOTE
            </a>
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography>
            Learn about The{' '}
            <a href="#" target="_blank" style={{ textDecoration: 'underline' }}>
              DESIGNER
            </a>
          </Typography>
        </Box>
      </>
    ),
  },

  {
    label: 'Delivery',
    content: (
      <Typography>
        The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night
        and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines
        like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar
        culminating in a button and has been flawlessly finished with three jet pockets with a
        sartorial feel. See the EDITOR’S NOTE Learn about the DESIGNER
      </Typography>
    ),
  },
  {
    label: 'Fit',
    content: (
      <Typography>
        Wake up dull and tired-looking skin with this weekly ritual. Vitamin C-rich Java Plum Mango
        and Banana extracts combine with Wintergreen derived Beta Hydroxy Acid (BHA) to gently
        exfoliate dead skin cells and improve skin brightness and clarity. Kaolin and Bentonite
        Clays help clear pores and absorb excess sebum while Jasmine and Burdock Root extracts work
        to leave skin soothed soft supple and luminous.
      </Typography>
    ),
  },
  {
    label: 'Share',
    content: (
      <Typography>
        Kaolin and Bentonite Clays help clear pores and absorb excess sebum while Jasmine and
        Burdock Root extracts work to leave skin soothed soft supple and luminous. How to Use: Apply
        a thin layer to freshly cleansed skin avoiding the immediate eye area. Allow the mask up to
        five minutes to reveal a red-carpet glow then gently rinse with warm water. Use two to three
        times weekly for optimal results (once a week for sensitive skin). For external use only
      </Typography>
    ),
  },
];
export const productImages = [
  { src: '../images/product-image-1.png', alt: 'product-image-1', width: '375px' },
  { src: '../images/product-image-5.png', alt: 'product-image-5', width: '420px' },
  { src: '../images/product-image-2.png', alt: 'product-image-2', width: '375px' },
  { src: '../images/product-image-4.png', alt: 'product-image-3', width: '375px' },
];

export const productColorImages = ['../images/product-image-1.png', '../images/product-image-2.png'];

export const productSize = ['XS', 'S', 'M', 'L', 'XXL'];

export const productImageSliderSettings = {
  dots: true,
  infinite: true,
  speed: 200,
  autoplay: true,
  autoplaySpeed: 10000,
  slidesToShow: 1,
  slidesToScroll: 1,
  width: '100%',
};

export const drawerWidth = 240;

export const navItems = [
  'THE EDIT',
  'NEW ARRIVALS',
  'DESIGNERS',
  'CLOTHING',
  'SHOES',
  'BAGS',
  'ACCESSORIES',
  'JEWERY',
  'BEAUTY',
  'HOME',
];
