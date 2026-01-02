import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://newsdata.io/api/1';
const apiKey = 'pub_d13dfe4ea5c94f4b81b64de702380a70';

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

// https://newsdata.io/api/1/crypto?apikey=pub_d13dfe4ea5c94f4b81b64de702380a70&coin=btc&size=1
// pub_d13dfe4ea5c94f4b81b64de702380a70