import { DARK_MODE } from "../../app/types";

export const handleDarkMode = (e) => async (dispatch) => {
    // getting the true or false value from the parameter and saving that to localstorage
    localStorage.setItem("darkMode", e);

    //dispatch data to reducer to be accessed as payload.action
    dispatch({
        type: DARK_MODE,
        payload: e,
    });
};
