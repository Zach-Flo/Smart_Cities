import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { makeStyles } from "@mui/material/styles";

function valuetext(value: number) {
  return `${value}:00`;
}

export default function DiscreteSlider() {

  const marks = [
    { value: 0, label: '0:00', style: {color: 'white'} },
    { value: 3, label: '3:00' },
    { value: 6, label: '6:00' },
    { value: 9, label: '9:00' },
    { value: 12, label: '12:00' },
    { value: 15, label: '15:00' },
    { value: 18, label: '18:00' },
    { value: 21, label: '21:00' },
    { value: 24, label: '24:00' },
  ];

  return (
    <Box sx={{ width: 600, color: 'white'}}>
      <Slider className="slider"
        aria-label="Time"
        defaultValue={0}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks={marks}
        min={0}
        max={24}
      />
    </Box>
  );
}
