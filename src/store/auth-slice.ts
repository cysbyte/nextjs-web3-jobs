import { createSlice } from "@reduxjs/toolkit";
import { JwtPayload } from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";

const initialState = {
  accessToken: "",
  userId: "",
  firstname: "",
  lastname: "",
};

const authTokenSlice = createSlice({
  name: "authToken",
  initialState,
  reducers: {
    addToken(state, action) {
      const token = action.payload;
      const decode = jwtDecode(token) as JwtPayload;
      console.log(decode);
      const id = decode._id;
      console.log("ID", id);
      state.accessToken = token;
      state.userId = id;
      state.firstname = decode.firstname;
      state.lastname = decode.lastname;
    },
    deleteToken(state, action) {
      state.accessToken = "";
      state.userId = "";
    },
  },
});

export const authTokenActions = authTokenSlice.actions;

export default authTokenSlice;
