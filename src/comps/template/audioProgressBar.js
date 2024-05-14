import React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

function AudioProgressBar({ duration, currentProgress, onChange, ...rest }) {
  // Ensure duration is a valid number and not 0
  if (!Number.isFinite(duration) || duration === 0) {
    return null; // Return null if duration is invalid to prevent errors
  }

  const handleChange = (e, newValue) => {
    if (!Number.isFinite(newValue)) return; // Ignore non-finite values
    onChange(e, newValue);
  };

  return (
    <Box className="absolute h-1 -top-[4px] left-0 right-0 group">
      <Slider
        name="progress"
        value={currentProgress}
        onChange={handleChange}
        min={0}
        max={duration}
        {...rest}
      />
    </Box>
  );
}

export default AudioProgressBar;
