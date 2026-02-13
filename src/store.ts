import { configureStore } from "@reduxjs/toolkit";
import { pagesApi } from "./services/pagesApi";

export const store = configureStore({
    reducer: {
        [pagesApi.reducerPath]: pagesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pagesApi.middleware),
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
