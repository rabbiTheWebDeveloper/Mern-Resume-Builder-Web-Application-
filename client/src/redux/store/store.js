//External import
import { configureStore } from "@reduxjs/toolkit";

//Internal Import
import AuthSlice from "../slices/AuthSlice";
import LoaderSlice from "../slices/LoaderSlice";
import UserSlice from "../slices/UserSlice";
// import TemplateSlice from "../slices/TemplateSlice";

const store = configureStore({
  reducer: {
    Auth: AuthSlice,
    Loader: LoaderSlice,
    User: UserSlice,
    // Template: TemplateSlice,
  },
});

export default store;
