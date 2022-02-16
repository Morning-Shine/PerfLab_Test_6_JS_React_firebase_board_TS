import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import loadingSlice from "./loadingSlice";
import tableViewSlice from "./tableViewSlice";
import themeSlice from "./themeSlice";
import userSlice from "./userSlice";
import firebaseDataLoadingSlice from "./firebaseDataLoadingSlice";



const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "theme", "tableView"],
};

const rootReducer = combineReducers({
  user: userSlice,
  loading: loadingSlice,
  theme: themeSlice,
  tableView: tableViewSlice,
  firebaseData: firebaseDataLoadingSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
