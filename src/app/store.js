import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from "../components/darkModeSwitch/darkModeReducer";
import articleReducer from "../components/articleList/articleListSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    articles: articleReducer
  },
});
