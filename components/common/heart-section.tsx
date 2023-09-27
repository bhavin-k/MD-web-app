import React from 'react';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface HeartSection {
  isFavourite: boolean;
  setIsFavourite: () => void;
}

const HeartSection = ({ isFavourite, setIsFavourite }) => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'sticky',
        width: '100%',
        justifyContent: 'end',
        top: '100px',
        zIndex: 1,
      }}
    >
      <IconButton
        onClick={() => {
          setIsFavourite(!isFavourite);
        }}
      >
        {!isFavourite ? (
          <FavoriteBorderIcon sx={{ color: '#000000' }} />
        ) : (
          <FavoriteIcon sx={{ color: 'red' }} />
        )}
      </IconButton>
    </div>
  );
};

export default HeartSection;
