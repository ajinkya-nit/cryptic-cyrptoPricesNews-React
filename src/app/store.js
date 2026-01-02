import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/CryptoAPI";
import { cryptoNewsApi } from "../services/CryptoNewsApi";

export const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware),

})