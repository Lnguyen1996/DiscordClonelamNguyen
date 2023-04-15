import * as api from "../../api";
import { openAlertMessage } from "./alertAction";

export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails, navigation) => dispatch(login(userDetails, navigation)),
    register: (userDetails, navigation) =>
      dispatch(register(userDetails, navigation)),
  };
};

const setUserDetails = (userDetails) => {
    return {
        type:authActions.SET_USER_DETAILS,
        userDetails
    }
}

const login = (userDetails,navigation) =>{
    return async (dispatch) =>{
        const response = await api.login(userDetails);

        if(response.error)
        {
           dispatch(openAlertMessage(response?.exception?.response?.data));
        }
        else{
            const {userDetails} = response?.data;

            localStorage.setItem('user', JSON.stringify(userDetails));

            dispatch(setUserDetails(userDetails));

            navigation("/dashboard");
        }
    }
}

const register = (userDetails,navigation) =>{
    return async (dispatch) =>{
        const response = await api.register(userDetails);

        if(response.error)
        {
            dispatch(openAlertMessage(response?.exception?.response?.data));
        }
        else{
            const {userDetails} = response?.data;

            localStorage.setItem('user', JSON.stringify(userDetails));

            dispatch(setUserDetails(userDetails));

            navigation("/dashboard");
        }
    }
}