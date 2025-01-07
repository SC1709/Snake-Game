import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the types for your state
interface RootState {
  gamescore: number;
  totalQuestion: number;
}

// Initial state with type
const initialState: RootState = {
  gamescore: 0,
  totalQuestion: 0,
};

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setTotalQuestion: (state, action: PayloadAction<number>) => {
      state.totalQuestion = action.payload;
      console.log(state.totalQuestion);
    },
    setGameScore: (state, action: PayloadAction<number>) => {
      state.gamescore = action.payload;
      console.log(state.gamescore);
    },
  },
});

export const { setTotalQuestion, setGameScore } = rootSlice.actions;
export default rootSlice.reducer;