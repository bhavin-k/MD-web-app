import { css } from '@emotion/css';
import { commonFontstyle } from '../common/commonStyle';

export const footerSection = css`
  min-width:500px;
  padding:18px
  justify-content: center;
  margin-top: 79.8px;
  .product,
  .products-name,{
    text-align: center;
  }
  .product {
    color: #000;
    ${commonFontstyle}
    text-transform: uppercase;
  }
  .products-name {
    margin-top: 12px;
    color: #000;
    line-height: 120%;
    text-decoration-line: underline;
    text-transform: uppercase;
    margin-right: 24px;
  }
  .author-note {
    margin-top: 120px;
    .note,
    .note-description{
      text-align: center;
    }
    .note {
      ${commonFontstyle}
      text-transform: uppercase;
    }
    .note-description {
      font-size: 32px;
      line-height: 140%;
      margin: 16px 0;
      padding: 0px 200px;
      @media (max-width: 768px) {
        padding: 18px; 
      }
    }
    .author {
      color: #000;
      line-height: 120%;
      text-transform: capitalize;
      text-align: center;
    }
  }
`;
