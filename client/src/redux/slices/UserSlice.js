//external import
import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "User",
  initialState: {},
  reducers: {
    SetUserDetails(state, action) {
      state.UserDetails = action.payload;
    },
    RemoveUserDetails(state, action) {
      state.UserDetails = undefined;
    },
  },
});

export const { SetUserDetails, RemoveUserDetails } = UserSlice.actions;
export default UserSlice.reducer;
