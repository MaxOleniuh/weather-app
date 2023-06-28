import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
    
}

const initialState: WeatherState = {
  
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    
  },
});

export const { } = weatherSlice.actions;
export default weatherSlice.reducer;
