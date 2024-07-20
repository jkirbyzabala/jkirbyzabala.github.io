import { createSlice } from '@reduxjs/toolkit';

export const teamSlice = createSlice({
  name: 'team',
  initialState: [],
  reducers: {
    addToTeam: (state, action) => {
      if (state.length < 6 && !state.some(p => p.name === action.payload.name)) {
        state.push(action.payload);
      }
    },
  },
});

export const { addToTeam } = teamSlice.actions;
export default teamSlice.reducer;
