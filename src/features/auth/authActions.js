import { SIGN_IN_USER, SIGN_OUT_USER } from "./authConstants";
import firebase from "../../app/config/firebase";

export function signInUser(creds) {
  return async function (dispatch) {
    try {
      const result = await
    } catch (error) {
      throw error;
    }
  };
}

export function signOutUser() {
  return {
    type: SIGN_OUT_USER,
  };
}
