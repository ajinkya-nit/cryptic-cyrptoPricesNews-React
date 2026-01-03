import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://newsdata.io/api/1';
const apiKey = import.meta.env.VITE_CRYPTO_NEWS_API_KEY;

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => `/crypto?apikey=${apiKey}`,
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
