import { DARK_MODE} from "../../app/types";

// initial state
const initialState = {
    // checking mode from localstorage if falsey (e.g. 0, null, undefined, etc.) it will be false, otherwise true
    darkMode: !!JSON.parse(localStorage.getItem("darkmode")),
};

const darkModeReducer = (state = initialState, action) => {
    switch (action.type) {
        case DARK_MODE:
            return {
                ...state,
                darkMode: action.payload,
            };
        default:
            return state;
    }
};

export default darkModeReducer;
