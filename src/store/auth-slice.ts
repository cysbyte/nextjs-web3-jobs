import { clearEncryptedItems, getDecryptedAccessToken, getDecryptedFirstName, getDecryptedLastName, getDecryptedUserId, setEncryptedItems } from "@/utils/encrypt-localstorage";
import { createSlice } from "@reduxjs/toolkit";
import { JwtPayload } from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";


const initialState = {
  accessToken: getDecryptedAccessToken(),
  userId: getDecryptedUserId(),
  firstname: getDecryptedFirstName(),
  lastname: getDecryptedLastName(),
  // accessToken: localStorage.getItem('accessToken'),
  // userId: localStorage.getItem('userId'),
  // firstname: localStorage.getItem('firstname'),
  // lastname: localStorage.getItem('lastname'),
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

      setEncryptedItems({
        accessToken: token,
        userId: id,
        firstname: decode.firstname,
        lastname: decode.lastname,
      });
      // localStorage.setItem('accessToken', token)
      // localStorage.setItem('userId', id)
      // localStorage.setItem('firstname', decode.firstname)
      // localStorage.setItem('lastname', decode.lastname)
    },
    deleteToken(state, action) {
      state.accessToken = "";
      state.userId = "";
      state.firstname = '';
      state.lastname = '';
      clearEncryptedItems();
    },
  },
});

export const authTokenActions = authTokenSlice.actions;

export default authTokenSlice;
