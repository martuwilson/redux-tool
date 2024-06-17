
import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'counter',
  initialState: {
      page: 0,
      pokemons: [],
      isLoading: false,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    
  },
})

export const { increment } = pokemonSlice.actions;