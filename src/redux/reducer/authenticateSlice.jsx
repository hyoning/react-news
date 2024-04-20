import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  password: "",
  bookmarkList: null,
  interestList: null,
  authenticate: false,
};

const authenticateSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.id = action.payload.id;
      // eslint-disable-next-line no-param-reassign
      state.password = action.payload.password;
      // eslint-disable-next-line no-param-reassign
      state.bookmarkList = action.payload.bookmarkList;
      // eslint-disable-next-line no-param-reassign
      state.interestList = action.payload.interestList;
      // eslint-disable-next-line no-param-reassign
      state.authenticate = true;
    },
    logout(state) {
      // eslint-disable-next-line no-param-reassign
      state.id = "";
      // eslint-disable-next-line no-param-reassign
      state.password = "";
      // eslint-disable-next-line no-param-reassign
      state.bookmarkList = null;
      // eslint-disable-next-line no-param-reassign
      state.interestList = null;
      // eslint-disable-next-line no-param-reassign
      state.authenticate = false;
    },
  },
});

export const authenticateActions = authenticateSlice.actions;
export default authenticateSlice.reducer;
