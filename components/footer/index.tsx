import React from 'react';
import { Grid } from '@mui/material';
import { productName } from '../../utils/mock-data';
import { footerSection } from './footeStyle';

const Footer = () => {
  return (
    <Grid container sx={{ mb: 12 }}>
      <Grid item xs={12} md={12} sm={12}>
        <div className={footerSection}>
          <div className="product">ViEW MOR PRODUCT LIKE THIS</div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {productName?.map((data, index) => (
              <div className="products-name" key={`${index}`}>
                {data}
              </div>
            ))}
          </div>
          <div className="author-note">
            <div className="note">A note from Author</div>
            <div className="note-description">
              The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by
              night and by day: a blazer in a linen blend shot with lurex for a shimmering surface
              that shines like a star in the sky.
            </div>
            <div className="author">--By MINNA SHIM, Fashion Editor</div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Footer;
